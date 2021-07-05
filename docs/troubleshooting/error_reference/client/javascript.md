Errors can arise during the usage of the blindnet SDK and should be handled accordingly.  
Error types can be imported as:

```javascript linenums="1"
import { error as blindnetError } from '@blindnet/sdk-javascript'
```

and handled the following way

```javascript linenums="1"
try { await blindnet.decrypt(data) }
catch (e) {
  if (e instanceof blindnetError.AuthenticationError) {
    const newToken = await getToken() // your function to obtain token
    blindnet.refreshToken(newToken)
  } else if (e instanceof blindnetError.NoAccessError)
  // notify the user about the problem
}
```

or

```javascript linenums="1"
blindnet.decrypt(data).catch(async e => {
  if (e instanceof blindnetError.AuthenticationError) {
    const newToken = await getToken() // your function to obtain token
    blindnet.refreshToken(newToken)
  } else if (e instanceof blindnetError.NoAccessError)
  // notify the user about the problem
})
```

This page describes the different types of errors that can arise in the blindnet SDK.

### AuthenticationError
**explanation**: [Token](){target=_blank} is invalid or has expired.  
**api methods**: All SDK methods except init, [deriveSecrets](){target=_blank} and [disconnect](){target=_blank}  
**solution**: [Generate a new token](){target=_blank} on the backend and pass it to the console.  

### UserNotInitializedError
**explanation**: User’s keys are missing from the browser's IndexedDB. This means either the user is not registered in blindnet or the keys have been manually deleted.  
**api methods**: [decrypt](){target=_blank}, [decryptValues](){target=_blank}, [changeSecret](){target=_blank}, [giveAccess](){target=_blank}  
**solution**: Call [connect](){target=_blank} method to get the keys.  

## PasswordError
**explanation**: Wrong password is provided. The secret is different from the one provided when a user has registered or changed it so stored encrypted keys can’t be decrypted.  
**where**: [connect](){target=_blank}  

## EncryptionError
**explanation**: Encrypted data can’t be decrypted. This means either the encrypted data or the encrypted data key has been tampered with, or the wrong encrypted data or data id has been provided.  
**api methods**: [decrypt](){target=_blank}, [decryptValues](){target=_blank}  

BlindnetServiceError
**explanation**: Unexpected error occurred. Either the SDK wasn’t able to reach the blindnet server or there was an error on the server.  
**api methods**: all SDK methods except init, [deriveSecrets](){target=_blank} and [disconnect](){target=_blank}.  
**solution**: Retry the method call  

## NotEncryptableError
**explanation**: Data can’t be encrypted. A user group or empty or no user id was passed to generate a token.  
**api methods**: [encrypt](){target=_blank}, [encryptValues](){target=_blank}  
**solution**: Add users to the group or generate a token with non-empty user id list.  

## NoAccessError
**explanation**: A user can’t decrypt the data. A user is missing the encryption keys for the encrypted data.  
**api methods**: [decrypt](){target=_blank}, [decryptValues](){target=_blank}  
**solution**: Another user with access has to give her the access with the method giveAccess.  

## UserNotFoundError
**explanation**: A user who is being given access to a document is not registered into blindnet  
**api methods**: [giveAccess](){target=_blank}, [changeSecret](){target=_blank}  
**solution**: The user being given access to has to register to blindnet using the connect method.  

## BadFormatError
**explanation**: Format of data or metadata passed to encrypting methods is not in the supported format.  
**api methods**: [encrypt](){target=_blank}, [encryptValues](){target=_blank}  
**solution**: Check the supported formats and convert the data accordingly.  

## Firefox problem with IndexedDB.
**explanation**: Firefox doesn’t support IndexedDB in private browsing mode. `Uncaught (in promise) DOMException: A mutation operation was attempted on a database that did not allow mutations` is returned.  
**solution**: Warn a user not to use the private browsing mode on Firefox.  

## IE problem.
**explanation**: Internet explorer has very limited support for web crypto api so the blindnet SDK doesn’t work on it.  
**solution**: Warn a user to use a different browser.  
