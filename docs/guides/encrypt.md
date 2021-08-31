Encryption is a core feature of the blindnet SDK. Depending on the language, multiple data formats can be encrypted - `strings`, `files` or simply just `byte arrays`. 

We provide two methods to encrypt the data: [encrypt](#encrypt) and [encryptValues](#encryptvalues).

The following workflow is applied when encrypting data:

1. A list of user ids (specified in a [temporary token](../other/glossary.md#temp_user_token){target=_blank}) is sent to blindnet to obtain the corresponding [public keys](../other/glossary.md#public_key){target=_blank}
1. An [ephemeral symmetric key](../other/glossary.md#data_key){target=_blank} is generated
1. Data is encrypted with the `symmetric key`
1. For each public key, the `symmetric key` is encrypted
1. A list of `encrypted symmetric keys` is sent to blindnet

Encryption is completed by a user of your application ([registered](../other/glossary.md#registered_user){target=_blank} or [unregistered](../other/glossary.md#anonymous_user){target=_blank}) to another registered user. A user does not need to be logged into blindnet in order to encrypt the data.
Data can be encrypted for a single user, a list of users or a [user group](../other/glossary.md#user_groups){target=_blank}.

In the current api, the [encryption destination](./managing_users_access.md#creating_temporary_tokens){target=_blank} is specified in the **Server SDK**.

To encrypt the data, the client SDK needs to be initialized with the [temporary token](./managing_users_access.md#creating_temporary_tokens){target=_blank} which contains information to whom the data is encrypted (user group or a list of users). To encrypt to a different destination, a new token needs to be generated.

To encrypt the data for a specific users, obtain a [temporary token](../other/glossary.md#temp_user_token){target=_blank} using the following **Server SDK** method:

=== "PHP"
    ```PHP linenums="1"
    $userIds = [‘1’, ‘2’, ‘3’]
    $tempUserJwt = $blindnet->createTempUserToken($userIds);
    ```

To encrypt the data for a [group](../other/glossary.md#user_groups){target=_blank}, obtain a [temporary token](../other/glossary.md#temp_user_token){target=_blank} using the following **server SDK** method:

=== "PHP"
    ```PHP linenums="1"
    $groupId = ‘1’
    $tempUserJwt = $blindnet->createTempUserToken($groupId);
    ```

## encrypt

This method encrypts the entire data passed as a parameter.
Depending on a language, multiple formats are supported.  
Besides the _data_, a [metadata](../other/glossary.md#metadata){target=_blank} can be passed as a second argument. It can be any `JSON serializable object`.

=== "JavaScript"
    `data` can be `string`, `File`, `Uint8Array` or `ArrayBuffer`
    Other formats should be encoded to `Uint8Array` or `ArrayBuffer`. You can put the information on how to decode the _data_ into the _metadata_.

    ```javascript linenums="1"
    // pass a temp user token generated in the server SDK
    const blindnet = Blindnet.init(tempUserJwt)
    // e.g. data is a file
    // const data = document.getElementById('file-picker').files[0]
    const { dataId, encryptedData } = await blindnet.encrypt(data, metadata)    
    ```
    `encryptedData` has a type `ArrayBuffer`.

### Encode

To be easily transferred, `encryptedData` can be encoded to `base64` or `hexadecimal` string.

=== "JavaScript"
    ```javascript linenums="1"
    import { util } from '@blindnet/sdk-javascript'

    const base64Encoded = util.toBase64(encryptedData)
    const hexEncoded = util.toHex(encryptedData)
    ```

`dataId` and `encryptedData` should be stored by you.  
`dataId` is used to delete the keys from blindnet using the server SDK.
To decrypt `encryptedData`, pass it to the [decrypt](./decrypt.md#decrypt){target=_blank} method.

Currently, encryption of streams is **not supported** so the entire data is loaded into the memory and then encrypted. Make sure your application does not run out of memory if e.g. large files are passed to the `encrypt` method.

## encryptValues

To encrypt the values of a JSON like object, use the `encryptValues` method.  
Object keys are left in plain text. This method can be used to e.g. encrypt the answers to a __COVID questionnaire__ (where questions are already known therefore not a sensitive data).

=== "JavaScript"
    ```javascript linenums="1"
    const data = { ‘first_name’: ‘Alice’, ‘last_name’: ‘Schumacher’  }
    const { dataId, encryptedData } = await blindnet.encryptValues(data)
    ```

`dataId` and `encryptedData` should be stored by you.  
`dataId` is used to delete the keys from blindnet using the server SDK.  
To decrypt `encryptedData`, pass it to the [decryptValues](./decrypt.md#decryptvalues){target=_blank} method.
