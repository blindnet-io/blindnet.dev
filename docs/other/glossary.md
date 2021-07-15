## Application ID
A randomly generated UUID which identifies an application in blindnet.  
Used as a parameter in the [initialization](){target=_blank} method of the [Server SDK](){target=_blank}.

## Application key
A secret value ([private key](){target=_blank}) which proves the ownership of an [application id](){target=_blank}.  
It is used to sign the [tokens](){target=_blank} in the [token generation](){target=_blank} methods.  
Used as a parameter in the [initialization](){target=_blank} method of the [Server SDK](){target=_blank}.

## Asymmetric key encryption
Type of encryption where [different keys](){target=_blank} are used to encrypt and to decrypt the data.  
A [public key](){target=_blank} is used to encrypt the data while it's associated [private key](){target=_blank} is used to decrypt the encrypted data.  
In blindnet, it is used to encrypt a [symmetric key](){target=_blank} for an other user, as a way to do a symmetric key exchange so two users can securely communicate.  

## Authentication token
Every request made to the blindnet servers through [blindnet SDK](){target=_blank} must be authenticated.  
Authentication is done through **authentication tokens** which are generated using the [Server SDK](){target=_blank}.  
Authentication tokens are used as parameters in the [initialization](){target=_blank} methods of the [Client SDK](){target=_blank}.
All tokens are [signed](){target=_blank} by an [application key](){target=_blank} and validated in blindnet.  
We distinguish three types of tokens in blindnet: *tokens for registered users*, *short term tokens* and *client tokens*.

### Registered user token
A token which authenticates a user known to your system in blindnet. Contains the information about user's id and application id.

### Short term token
A token which authenticates an unregistered user (in your system) in blindnet. Used e.g. when a user needs to upload a document using a form the user received by e-mail (no need to register an account).

### Client tokens
A token used by the [Server SDK](){target=_blank} for various [user and data management](){target=_blank} functionalities to authenticate your server.

## Blindnet endpoint
URL of the blindnet api you should use in production. It is defined in the [initialization methods](){target=_blank} of both [Client](){target=_blank} and [Server SDKs](){target=_blank}.  
The default value is `https://api.blindnet.io`

### Testing endpoint
URL of the blindnet api you should use when testing. It must be manually set to `https://test.blindnet.io`

## Blindnet SDK
Blindnet is integrated to your application using the libraries for you client and server applications. SDKs provide the methods to encrypt and decrypt the data, register a new user, delete a user etc.  
[Multiple](){target=_blank} programming languages are supported for both **Client-side** and **Server-side** SDKs.  
To use blindnet, both Client and Server SDKs must be integrated in your application.

### Client-side SDK
A set of libraries for front-end applications. Client-side SDK is used for [encryption](){target=_blank} and [decryption](){target=_blank} of data shared between users of your application. Other functionalities are e.g. [giving access](){target=_blank} to encrypted data to a user who doesn’t possess the [encryption keys](){target=_blank}.

### Server-side SDK
A set of libraries for back-end applications. Server-side SDK is used mainly for user [authentication](){target=_blank} in blindnet by providing the api to [generate the authentication tokens](){target=_blank}. Additionally, you can use it to [delete users] and [encryption keys](){target=_blank} of your application registered in blindnet.

## Digital signature
An algorithm used to validate the authenticity and integrity of a message. In assymetric key encryption schemes, [private key](){target=_blank} is used to *sign* a message while the associated [public key](){target=_blank} is used to *validate* the signature. Signatures can't be forged and we can be sure the message was created by the owner of the private key.

## Key pair
A pair of [private](){target=_blank} and [public](){target=_blank} keys. Private keys are usually generated randomly while the public keys are calculated from the them.  
Derivation of a public key from a private key is is fast (having linear complexity) while vice-versa, the derivation is should be impossible with current computing power. That's it's important to keep the private keys "private" while public keys can be safely distributed.

## Private key
Every application and user in blindnet owns at least one private key (paired with a publicly available [public key](){target=_blank}) which is stored locally on the app server or user's devices and encrypted on the blindnet servers.  
In an asymmetric key encryption scheme, secret key is used to decrypt the data encrypted by it's associated [public key](){target=_blank}.  
The other usage is to sign the data which is later verified by private key's associated [public key](){target=_blank} and thus prove the ownership of the key.

## Public key
Every application and user in blindnet owns at least one public key (paired with a [secret key](){target=_blank}) which is stored in the blindnet servers.  
In an asymmetric key encryption scheme, public key is publicly available and used to encrypt the data for it's owner. Key owner is the only one who can decrypt the data using their [private key](){target=_blank}.  
The other usage of a public key is to verify a digital signature of a signed data made by the key owner using their [private key](){target=_blank}.

## Session
A session is identified by a [token](){target=_blank}. Every request to blindnet is authenticated using the token. Tokens can be reused until they expire.

## Symmetric key encryption
Type of encryption where a single secret key is used both to encrypt and to decrypt the data.  
Two parties must share a key in order to securely communicate. Key sharing is usually done through [asymmetric key encryption](){target=_blank} based protocols.

## Secret value
A value only known to a user of your application. It is used to encrypt user's keys before sending them to the blindnet server.  
It can be any `string` value, e.g. the user's password or an answer to a question.  
If the user's password is used as a secret value, make sure not to send the password to you server in plain text. Instead, you should [hash it](){target=_blank}.

## Secret derivation
If a same [secret value](){target=_blank} is used to log-in a user to your application as well as to connect the user to blindnet, the secret must be hashed and split into two values.  
The first value is used as user's log-in password and sent to your server.  
The second value is used to encrypt user's keys in blindnet.  
This way, anyone having access to your server won't be able to decrypt user's keys.  
To split the secret, use the provided [Client SDK method](){target=_blank}.

## User
A user known to your application which can be authenticated to blindnet using a [token](){target=_blank}.

### Registered user
A user identified by your application by e.g. a *unique id* or an *email*.  
To authentica a registered user in blindnet, [generate](){target=_blank} a [Registered user token]().

### Anonymous user
A user which doesn't need to be identified in your application.  
Currently, [token]() for an anonymous user is used to [encrypt](){target=_blank} the data.

## User groups
A logical grouping of users in your application.  
When [encrypting](){target=_blank} the data, a [group can be specified](){target=_blank}. Any user belonging the specified group will be able to [decrypt](){target=_blank} the data.  
Currently, a user can belong only to a single group specified when [registering](){target=_blank} the user to blindnet and it can't be changed afterwards.

## Data

## Encrypted data

## Data key

## Encrypted data key

## Metadata
