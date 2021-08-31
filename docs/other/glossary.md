## Application ID
A randomly generated UUID which identifies an application in blindnet.  
Used as a parameter in the [initialization](../guides/installation.md#initialization){target=_blank} method of the [Server SDK](#server-side_sdk).

## Application key
A secret value ([private key](#private_key)) which proves the ownership of an [application id](#application_id).
It is used to sign the [tokens](#authentication_token) in the [token generation](../guides/managing_users_access.md#creating_user_tokens){target=_blank} methods. The corresponding [public key](#public_key) is stored by blindnet and is used to verify token signatures.  
Used as a parameter in the [initialization](../guides/installation.md#initialization){target=_blank} method of the [Server SDK](#server-side_sdk).  
For instructions on how to generate your application keys click [here](../guides/installation.md#generating_application_keys){target=_blank}.


## Asymmetric key encryption
Type of encryption where [different keys](#key_pair) are used to encrypt and to decrypt the data.  
A [public key](#public_key) is used to encrypt the data while it's associated [private key](#private_key) is used to decrypt the encrypted data.  
In blindnet, it is used to encrypt a [symmetric key](#symmetric_key_encryption) for an other user, as a way to do a symmetric key exchange so two users can securely communicate.  

## Authentication token
Every request made to the blindnet servers through [blindnet SDK](#blindnet_sdk) must be authenticated.  
Authentication is done through **authentication tokens** which are generated using the [Server SDK](#server-side_sdk).  
Authentication tokens are used as parameters in the [initialization](../guides/installation.md#initialization){target=_blank} methods of the [Client SDK](#client-side_sdk).
All tokens are [signed](#digital_signature) by an [application key](#application_key) and validated by blindnet with the corresponding public key.  
We distinguish three types of tokens in blindnet: *tokens for registered users*, *tokens for unregistered (temporary) users*, and *client tokens*.

### Registered user token
A token which authenticates a [user known to your system](#registered_user) to blindnet. It contains information about user's id and application id.

### Temp user token
A token which authenticates an [unregistered user](#anonymous_user) (in your system) to blindnet. It is used for example when a user needs to upload a document using a form the user received by e-mail (no need to register an account in your system).

### Client token
A token used by the [Server SDK](#server-side_sdk){target=_blank} for various [user and data management](../guides/managing_users_access.md){target=_blank} functionalities to authenticate your server.

## Blindnet endpoint
URL of the blindnet api you should use in production. The URL is defined in the [initialization methods](../guides/installation.md#initialization){target=_blank} of both [Client](#client-side_sdk) and [Server SDKs](#server-side_sdk).  
The default value is `https://api.blindnet.io`

### Testing endpoint
URL of the blindnet api you should use when testing. It must be manually set to `https://test.blindnet.io`

## Blindnet SDK
Blindnet is integrated to your application using the libraries for you client and server applications. SDKs provide the methods to encrypt and decrypt the data, register a new user, delete a user etc.  
[Multiple](../api_reference/index.md){target=_blank} programming languages are supported for both **Client-side** and **Server-side** SDKs.  
To use blindnet, both Client and Server SDKs must be integrated in your application.

### Client-side SDK
A set of libraries for front-end applications. Client-side SDK is used for [encryption](../guides/encrypt.md){target=_blank} and [decryption](../guides/decrypt.md){target=_blank} of data shared between users of your application. Other functionalities are e.g. [giving access](../guides/managing_users_access.md#giving_access_to_other_users){target=_blank} to encrypted data to a user who doesn’t possess the [encryption keys](#data_key){target=_blank}.

### Server-side SDK
A set of libraries for back-end applications. Server-side SDK is used mainly for user authentication in blindnet by providing the api to [generate the authentication tokens](../guides/managing_users_access.md#creating_user_tokens){target=_blank}. Additionally, you can use it to [delete users](../guides/managing_users_access.md#deleting_users){target=_blank} and [delete encryption keys](../guides/managing_users_access.md#deleting_encrypted_data_keys){target=_blank} of your application registered in blindnet.

## Data
Data is anything a user is encrypting. It is in a plain, unencrypted format. Data never leaves user's device until it is [encrypted](../guides/encrypt.md){target=_blank}.   
Depending on the [Client SDK](#client-side_sdk), multiple formats are supported - `String`, `File`, `byte array`. If the format of the provided data is not supporetd by the SDK, you should encode it to a byte array before [encrypting](../guides/encrypt.md){target=_blank}, and decode it after [decrypting](../guides/decrypt.md){target=_blank}.

## Data key
Every piece of [data](#data){target=_blank} in blindnet is encrypted with a different symmetric key.  
Only a user who encrypted the data and the users to whom it was encrypted have access to the data key.  
The key is stored on the blindnet servers encrypted.

## Digital signature
An algorithm used to validate the authenticity and integrity of a message. In assymetric key encryption schemes, [private key](#private_key) is used to *sign* a message while the associated [public key](#public_key) is used to *validate* the signature. Signatures can't be forged and we can be sure the message was created by the owner of the private key.

## Encrypted data
When a [data](#data) is [encrypted](../guides/encrypt.md){target=_blank} from any method in the [Client SDK](#client-side_sdk), it can be safely transferred to your or blindnet server.  
Only a user who encrypted the data and the users to whom it was encrypted can decrypt the data.  
To obtain the orginal [data](#data), the encrypted data has to be [decrypted](../guides/decrypt.md){target=_blank}.

## Encrypted data key
An encrypted [key](#data_key) stored on the blindnet servers.  
Only a user who created the key to [encrypt](../guides/encrypt.md){target=_blank} the data and the users to whom it was encrypted have access can decrypt the data key.

## Key pair
A pair of [private](#private_key) and [public](#public_key) keys. Private keys are usually generated randomly while the public keys are calculated from the them.  
Derivation of a public key from a private key is is fast (having linear complexity) while vice-versa, the derivation is should be impossible with current computing power. That's it's important to keep the private keys "private" while public keys can be safely distributed.

## Metadata
Additional data that can be [encrypted](../guides/encrypt.md){target=_blank} alongside the [data](#data).  
It is provided in a JSON serializable format.

## Private key
Every application and user in blindnet owns at least one private key (paired with a publicly available [public key](#public_key)) which is stored locally on the app server or user's devices and encrypted on the blindnet servers.  
In an asymmetric key encryption scheme, secret key is used to decrypt the data encrypted by it's associated [public key](#public_key).  
The other usage is to sign the data which is later verified by private key's associated [public key](#public_key) and thus prove the ownership of the key.

## Public key
Every application and user in blindnet owns at least one public key (paired with a [private key](#private_key)) which is stored in the blindnet servers.  
In an asymmetric key encryption scheme, public key is publicly available and used to encrypt the data for it's owner. Key owner is the only one who can decrypt the data using their [private key](#private_key).  
The other usage of a public key is to verify a digital signature of a signed data made by the key owner using their [private key](#private_key).

## Session
A session is identified by a [token](#authentication_token). It is valid until the timestamp specified in the token.  
For a [registered user](#registered_user_token), token expires after **12 hours**.  
For an [unregistered user](#temp_user_token), token expires after **30 minutes**.  
For a [client](#client_token) ([Server SDK](#server-side_sdk)), token expires after **24 hours**.    

## Symmetric key encryption
Type of encryption where a single secret key is used both to encrypt and to decrypt the data.  
Two parties must share a key in order to securely communicate. Key sharing is usually done through [asymmetric key encryption](#asymmetric_key_encryption){target=_blank} based protocols.

## Secret value
A value only known to a user of your application. It is used to encrypt user's keys before sending them to the blindnet server.  
It can be any `string` value, e.g. the user's password or an answer to a question.  
If the user's password is used as a secret value, make sure not to send the password to you server in plain text. Instead, you should [hash it](#secret_derivation){target=_blank}.

## Secret derivation
If a same [secret value](#secret_value){target=_blank} is used to log-in a user to your application as well as to connect the user to blindnet, the secret must be [hashed and split](../guides/managing_users_access.md#splitting_secrets){target=_blank} into two values.  
The first value is used as user's log-in password and sent to your server.  
The second value is used to encrypt user's keys in blindnet.  
This way, anyone having access to your server won't be able to decrypt user's keys.  
To split the secret, use the provided [Client SDK method](#client-side_sdk).

## User
A user known to your application which can be authenticated to blindnet using a [token](#authentication_token).

### Registered user
A user identified by your application by e.g. a *unique id* or an *email*.  
To authenticate a registered user in blindnet, [generate](../guides/managing_users_access.md#creating_user_tokens){target=_blank} a [Registered user token](#registered_user_token) which will be sent in every request from the [SDK](#blindnet_sdk) to blindnet.

### Anonymous user
A user which doesn't need to be identified in your application.  
Currently, a (temp user) [token](#temp_user_token) for an anonymous user is used to [encrypt](../guides/encrypt.md){target=_blank} the data.

## User groups
A logical grouping of users in your application.  
When [encrypting](../guides/encrypt.md){target=_blank} the data, a [group can be specified](../guides/managing_users_access.md#assigning_a_user_to_a_group){target=_blank}. Any user belonging the specified group will be able to [decrypt](../guides/decrypt.md){target=_blank} the data.  
Currently, a user can belong only to a single group which is specified when [registering](../guides/managing_users_access.html#connecting_users_with_blindnet){target=_blank} the user to blindnet and it can't be changed afterwards.
