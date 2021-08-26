The following programming languages are currently supported:

Client SDK:

- [JavaScript](../api_reference/client/javascript/latest.md){target=_blank}

Server SDK:

- [PHP](../api_reference/server/php/latest.md){target=_blank}
- [Node.js](../api_reference/server/node.js/latest.md){target=_blank}

## Installation

### Client SDK
=== "Javascript"
    Pick one of the following methods to install the blindnet SDK.

    === "npm"
        Run the following command in your terminal.
        ```console
        npm i -S @blindnet/sdk-javascript
        ```
    === "yarn"
        Run the following command in your terminal.
        ```console
        yarn add @blindnet/sdk-javascript
        ```
    === "umd"
        Download the [umd](https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/){target=_blank} file and include it in your `HTML` file.  
        File can be downloaded [here](https://raw.githubusercontent.com/blindnet-io/blindnet-sdk-js/develop/lib/index.umd.js){target=_blank}.
        ```html
        <script src="blindnet.umd.js"></script>
        ```

    For more info, check the [api reference](../api_reference/client/javascript/latest.md#installation){target=_blank}.

### Server SDK
=== "PHP"
    ```console 
    composer require blindnet/blindnet-sdk-php
    ```

    For more info, check the [api reference](../api_reference/server/php/latest.md#installation){target=_blank}.

=== "Node.js"
    Pick one of the following methods to install the blindnet SDK.
    
    === "npm"
        Run the following command in your terminal.
        ```console
        npm i -S @blindnet/sdk-node
        ```
    === "yarn"
        Run the following command in your terminal.
        ```console
        yarn add @blindnet/sdk-node
        ```

    For more info, check the [api reference](../api_reference/server/node.js/latest.md#installation){target=_blank}.
    

## Imports

### Client SDK
The blindnet SDK api is enclosed in the `Blindnet` module. It should be imported together with the `error types` and optionally, `utilities` (e.g. to encode and decode the encrypted data).

=== "Javascript"
    If the SDK was installed as an `npm` package, it is imported as

    ```js
    import { Blindnet, util, error } from '@blindnet/sdk-javascript'
    ```

    If it was imported as an `umd` package, use
    ```js
    const { Blindnet, util, error } = blindnet
    ```

    For more info, check the [api reference](../api_reference/client/javascript/latest.md#imports){target=_blank}.

### Server SDK
=== "PHP"
    ```php linenums="1"
    require 'vendor/autoload.php';
    use Blindnet\BlindnetSDKPHP\Blindnet;
    ```

    For more info, check the [api reference](../api_reference/server/php/latest.md#imports){target=_blank}.

=== "Node.js"
    ```js
    const Blindnet = require('@blindnet/sdk-node')
    ```

    For more info, check the [api reference](../api_reference/server/node.js/latest.md#imports){target=_blank}.

## Initialization

### Client SDK 
Blindnet SDK must be initialized before you can use it (with the exception for some static methods, e.g. [secret derivation](./managing_users_access.md#splitting_secrets){target=_blank}).

To initialize the library, you need to provide the [authentication token generated](./managing_users_access.md#creating_user_tokens){target=_blank} using the **server SDK**.

Also, blindnet endpoint url can be provided. The default value is `https://api.blindnet.io`.  
If you are testing the library, use `https://test.blindnet.io`.

Initialization is done with the `init` method.
  
=== "JavaScript"
    ```js linenums="1"
    const blindnet = Blindnet.init(token)
    // for testing
    const blindnet = Blindnet.init(token, 'https://test.blindnet.io')
    ```

### Server SDK
To initialize the server SDK, you need to obtain [application id](../other/glossary.md#application_id){target=_blank} and [application key](../other/glossary.md#application_key){target=_blank}. You can obtain them from the [dashboard](https://dashboard.blindnet.io){target=_blank}, or generate them on your own (see next section).

As for the client SDK, you can provide an endpoint. For testing, use `https://test.blindnet.io`.

=== "PHP"
    ```php linenums="1"
    $blindnet=Blindnet.init($appKey, $appId)
    // for testing
    $blindnet=Blindnet.init($appKey, $appId, 'https://test.blindnet.io')
    ```

=== "Node.js"
    ```js linenums="1"
    const blindnet = await Blindnet.init(appKey, appId)
    // for testing
    const blindnet = await Blindnet.init(appKey, appId, 'https://test.blindnet.io')
    ```

## Generating application keys

[Application key](../other/glossary.md#application_key){target=_blank} is actually an [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519){target=_blank} private key used to sign the tokens that allow your users to access blindnet. You can generate it either in the blindnet [dashboard](https://dashboard.blindnet.io){target=_blank} or on your own. If you decide to generate the application key on your own, you need to generate an Ed25519 key pair, take the private key as your blindnet application key, and register the public key in your application on the dashboard. 

Examples of how to generate the Ed25519 key pair: 
=== "JavaScript"
    ```js linenums="1"
    import * as ed from 'noble-ed25519';
    const privateKey = ed.utils.randomPrivateKey(32);
    const publicKey = await ed.getPublicKey(privateKey);
    console.log("application key: " + btoa(String.fromCharCode(...privateKey, ...publicKey)));
    console.log("public key: " + btoa(String.fromCharCode(...publicKey)));
    ```
=== "PHP"
    ```php linenums="1"
    $keypair = sodium_crypto_sign_keypair();
    $publicKey = base64_encode(sodium_crypto_sign_publickey($keypair)); 
    $privateKey = base64_encode(sodium_crypto_sign_secretkey($keypair));
    echo ('application key: ' . $privateKey . "\n");
    echo ('public key: ' . $publicKey . "\n");
    ```

Examples of Ed25519 keys:
!!! Ed25519 keys
    public key: QqglmSldC4PerNo+zQJIkV5+CkCHL2Tlq5aO1NXiY7Y=  
    private key: GWuUnD5bn0Xuk8GdbLGoX+0UBanFmY3/Qq8JY8Fff2pCqCWZKV0Lg96s2j7NAkiRXn4KQIcvZOWrlo7U1eJjtg==