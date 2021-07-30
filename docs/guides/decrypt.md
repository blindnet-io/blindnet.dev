Encryption is a core feature of the blindnet SDK. Depending on the language, multiple data formats can be encrypted - `strings`, `files` or simply just `byte arrays`.  

We provide two methods to decrypt the data: [decrypt](#decrypt) and [decryptValues](#decrypt).

The following workflow is applied when decrypting data:

1. The [encrypted symmetric key](../other/glossary.mdl#encrypted_data_key){target=_blank} of the user for the provided encrypted data is obtained from blindnet 
1. The `encrypted symmetric key` is decrypted using the user’s secret key
1. Data is decrypted with the `symmetric key`

Only **registered users** can decrypt the data.

## decrypt

If the encrypted data is [encoded](./encrypt.md#encode){target=_blank}, use the following helper methods to decode it before decrypting it.

=== "JavaScript"
    ```javascript linenums="1"
    import { util } from '@blindnet/sdk-javascript'

    // if you use base64 encoding
    const encryptedData = util.fromBase64(encodedData)
    // if you use hex encoding
    const encryptedData = util.fromHex(encodedData)
    ```

To decrypt the data, use

=== "JavaScript"
    ```javascript linenums="1"
    const { data, metadata } = await blindnet.decrypt(encryptedData)
    ```

    `data` is the original data provided in the encrypt method.  
    `metadata` is the object provided in the encrypt method.

    [Metadata](../other/glossary.md#metadata){target=_blank}, besides the object fields provided in the [encrypt](./encrypt.md#encrypt){target=_blank} method, will contain additional information on data format so it can be treated accordingly.

    Additional information in metadata is under the key `dataType`, which can have following values:
    
    - `{ type: 'STRING' }` meaning data is a `string`
    - `{ type: 'FILE', name: string }` meaning data is a `file`
    - `{ type: 'BYTES' }` meaning data is `ArrayBuffer`

## decryptValues
To decrypt the object values encrypted by the method [encryptValues](./encrypt.md#encryptvalues){target=_blank}, use `decryptValues` method.

=== "JavaScript"
    ```javascript linenums="1"
    const data = await blindnet.decryptValues(encryptedData)
    ```

    `data` is the original object passed to [encryptValues](./encrypt.md#encryptvalues){target=_blank} method.
