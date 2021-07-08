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
We distinguish three types of tokens in blindnet: *tokens for registered users*, *short term tokens* and *client tokens*.

### Registered user token

### Short term token

### Client tokens

## Digital signature

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

## Symmetric key encryption
Type of encryption where a single secret key is used both to encrypt and to decrypt the data.  
Two parties must share a key in order to securely communicate. Key sharing is usually done through [asymmetric encryption](){target=_blank} based protocols.

## Blindnet SDK

### Client SDK

### Server SDK

## Session

## Blindnet endpoint

### Testing endpoint

## Secret value

## Secret derivation

## User

### Registered user

### Anonymous user

## User groups

## Data

## Encrypted data

## Data key

## Encrypted data key

## Metadata
