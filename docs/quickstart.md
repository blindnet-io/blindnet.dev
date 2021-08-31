Try out **blindnet SDK** quickly and easily.

!!! note
    While reading this quickstart guide you can download and follow the source code for a simple React front-end app with integrated blindnet client SDK from [here](https://github.com/blindnet-io/blindnet-client-js-example).

In this quickstart guide, you will learn how to [encrypt](./guides/encrypt.md){target=_blank} and [decrypt](./guides/decrypt.md){target=_blank} a file using the [blindnet client SDK](./guides/introduction.md){target=_blank}.  
We assume two users exist - a user we know, **Alice**, and an anonymous user **Bob**. For the sake of simplicity we’ll act as both Alice and Bob. We will register a known user Alice to blindnet, encrypt a file to her as an anonymous user Bob, and then decrypt the file as Alice.

You will learn how to:

- set-up the blindnet SDK
- register Alice to blindnet
- encrypt a file as Bob
- decrypt a file as Alice

### Before you start
Obtain blindnet authentication data. To authenticate to blindnet, your application needs the [application id](./other/glossary.md#application_id){target=_blank} and [application key](./other/glossary.md#application_key){target=_blank}.
**Application key** is a cryptographic secret key which is used to sign the authentication tokens and must be kept secret (and accessible by your server).

You can get the application id and application key using the blindnet [dashboard](https://dashboard.blindnet.io){target=_blank} after you create a new application.

!!! note
    For the sake of simplicity, you can skip creating a new application and just use the following application id and key

    id: `3544e7cd-64a9-41b7-88dc-397bfdaeeaf3`  
    key: `zB5IiU0xzkVdsH4NMXxrF90ZISL5kJnTHlt7h/Wbi/qVhch7Fw8J5AQ5j2PazaG5q114uApZRH4X1/kTKVx0Cw==`

    Be sure not to use those in production environments!

## **STEP 1**: Set-up the SDK

In this guide, only the [client SDK](./guides/introduction.md){target=_blank} is needed. To generate the authentication tokens, we will use a [dedicated client library](https://www.npmjs.com/package/@blindnet/token-generator){target=_blank}. In your production environment, you will need both **client** and **server SDKs** and [generate](./guides/managing_users_access.md#creating_user_tokens){target=_blank} the tokens on the server side.

### Installation
To install the blindnet SDK and the token generator

=== "javascript"
    ```console
    npm i -S @blindnet/sdk-javascript @blindnet/token-generator
    ```
    or
    ```console
    yarn add @blindnet/sdk-javascript @blindnet/token-generator
    ```

### Import
Import the library to your project with

=== "javascript"
    ```js linenums="1"
    import { Blindnet } from '@blindnet/sdk-javascript'
    import { createTempUserToken, createUserToken } from '@blindnet/token-generator'
    ```

### Generate a user token for **Alice**
[Tokens](./other/glossary.md#authentication_token){target=_blank} are used to authenticate the users of your application to blindnet. They can be used multiple times and should be regenerated when they expire using the same method. 

!!! warning
    We use the `token generation` library to generate the tokens. It should be only used for testing purposes and tokens should be [generated on the server](./guides/managing_users_access.md#creating_user_tokens){target=_blank} in production environment, after your user is authenticated.

Use the [application id](./other/glossary.md#application_id){target=_blank} and key you obtained in [Before you start](#before_you_start) section.

=== "JavaScript"
    ```js linenums="1"
    const appId = ‘your_application_id’
    const appKey = ‘your_application_key’
    const aliceId = ‘alice’
    const groupId = test-group’
    const token = await createUserToken(aliceId, groupId, appId, appKey)
    ```

Specify the [testing endpoint](./other/glossary.md#testing_endpoint){target=_blank} and [initialize](./guides/installation.md#initialization){target=_blank} the library for Alice

=== "JavaScript"
    ```js linenums="1"
    const endpoint = 'https://test.blindnet.io’
    const blindnet = Blindnet.init(token, endpoint)
    ```

### Connect Alice to blindnet

Blindnet can encrypt files with a particular destination (list of users or a [user group](./other/glossary.md#user_groups){target=_blank}) in mind. So in order to start encrypting, you first need to have some users (Alice in this case) that you’ve connected to blindnet.

To connect a user to blindnet, a [secret value](./other/glossary.md#secret_value){target=_blank} has to be provided. That value must only be known 
by the user (e.g. user's password). In that case, **it’s important not to use the same value to log-into your system and connect to blindnet** for which we provide a method [deriveSecrets](./guides/managing_users_access.md#splitting_secrets){target=_blank}.

=== "JavaScript"
    ```js linenums="1"
    const { appSecret, blindnetSecret } = await Blindnet.deriveSecrets(secret)
    await blindnet.connect(blindnetSecret)
    ```

!!! note
    You can use `appSecret` as a password for the user to log-into your system.

## **STEP 2**: Encrypt a file

After Alice has connected to blindnet, data can be [encrypted](./guides/encrypt.md){target=_blank} for her.
We will simulate an [anonymous](./other/glossary.md#anonymous_user){target=_blank} user Bob encrypting a file for Alice.

### Initialize SDK for Bob

You need to initialize the library with the [temporary token](./other/glossary.md#temp_user_token){target=_blank} in order to encrypt the data. Pass the ids of the users you want to encrypt a file to.

=== "JavaScript"
    ```js linenums="1"
    const token = await createTempUserToken([aliceId], appId, appKey)
    const blindnet = Blindnet.init(token, endpoint)
    ```

### Encrypt a file
Obtain a file from the `<input type="file" id="file-pick>` `HTML` element and pass it to the [encrypt](./guides/encrypt.md#encrypt){target=_blank} method.

=== "JavaScript"
    ```js linenums="1"
    const file = document.getElementById(‘file-pick’).files[0]
    const { encryptedData } = await blindnet.encrypt(file)
    ```

`encryptedData` should be stored by you.

## **STEP 3**: Decrypt a file

To [decrypt](./guides/decrypt.md#decrypt){target=_blank} a file, you only need `encryptedData`.

=== "JavaScript"
    ```js linenums="1"
    const { data, metadata } = await blindnet.decrypt(encryptedData)
    ```

    There is a convenient library to save files [file-saver](https://github.com/eligrey/FileSaver.js){target=_blank}.
    ```js linenums="1"
    saveAs(data, metadata.dataType.name)
    ```

