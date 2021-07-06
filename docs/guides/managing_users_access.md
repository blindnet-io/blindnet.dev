You can manage your users’ interaction with blindnet and their access to data through blindnet SDK methods that you invoke in your application. These methods allow you to

- connect your users to blindnet
- cluster users in groups
- give/revoke access to data
- update user passwords
- etc.

## Creating user tokens
Each request to blindnet needs to be authenticated, which is done through user tokens. You `generate` user tokens on your server by using **blindnet server SDK**, and then `pass` the generated token in the initialization of **blindnet client SDK**. 

To generate a user token, after [initializing blindnet server SDK](./installation.md#server_sdk_2){target=_blank} call the following blindnet **Server SDK** method:

=== "PHP"
    ```php linenums="1"
    $userId = 'your_user_id';
    $groupId = 'your_user_group_id';
    $userToken = $blindnet->createUserToken($userId, $groupId);
    ```

### Creating temporary tokens
Temporary tokens are used to authenticate when [encrypting](./encrypt.md){target=_blank} the data. They contain the information to whom the data is being encrypted.

=== "PHP"
    ```php linenums="1"
    $groupId = 'your_user_group_id';
    $userToken = $blindnet->createTempUserToken($groupId);
    ```

## Assigning a user to a group
Each of your users can belong to one user group or no group at all.  
For example, if your platform users are employees of a hotel or bank, you can group your users (employees) with respect to the hotel or bank they work with (group).  
You associate a user to a group by specifying the `group ID` in a `user token` when connecting a user to blindnet for the first time.

Currently, you can't assign already created user to a different group. [Delete](#deleting_users) the user and create it again with a different `group id`.

## Connecting users with blindnet
The core of security of blindnet are user’s private keys. They are randomly generated on the user’s local device and encrypted using a secret code (e.g. user’s password) and then securely stored in blindnet.  
Blindnet allows you to reuse existing user passwords so that your users still use [one password](../other/glossary.md){target=_blank} in your application. To do so safely, you need to use blindnet SDK to split user passwords before you connect a user to blindnet.

### Splitting passwords
!!! info "Splitting user's password"
    In the case that you send plaintext passwords to your server for user authentication, we advise that you update the authentication workflow in the following way.

    When a user is logging into your application and enters a password, you should use blindnet SDK to split the password into two parts: you use the `second part` (*appSecret*) to authenticate the user on your app, while you use the `first part` ((*blindnetSecret*) for registering and logging users to blindnet. It is advisable not to use the same password for both actions since a party that can read the user's password (i.e., you) would be able to decrypt the user's private keys.

To split the password use the following **Client SDK** method:

=== "JavaScript"
    ```js linenums="1"
    const password = 'user_password’ 
    const { blindnetSecret, appSecret } = await Blindnet.deriveSecrets(password)
    ```

### Registering and logging users in blindnet
When a user logs into your system, you also need to login that user to blindnet. To do so, you first obtain blindnet secret by [splitting user password](#splitting_passwords), and then use the following **Client SDK** method:

=== "JavaScript"
    ```js
    await blindnet.connect(blindnetSecret)
    ```

Blindnet SDK does not expose separate methods for user registration and logging in. You always use the `connect` method while its internals handle user registration and logging in. If it is the first time that a user is being connected to blindnet, the SDK will register that user by using the information you provide in a [token](#creating_user_tokens).

### Logging out users
When a user logs out of your application, you also need to log out that user from blindnet by using the following **Client SDK** method:

=== "JavaScript"
    ```js
    await blindnet.disconnect()
    ```

This will remove the user's private keys from the user's local device.

## Changing secrets
Since user's keys are encrypted with the [user's secret](../other/glossary.md){target=_blank}, changing the secret means the keys must be re-encrypted with the new secret value.  

Your users can change their passwords in your applications at any time without losing access to previously encrypted data. To ensure that access is not lost, when your user changes password, [split](#splitting_passwords) the new password and use the corresponding **Client SDK** method:

=== "JavaScript"
    ```js linenums="1"
    const newPassword = 'user_new_password’
    const { blindnetSecret, appSecret } = await Blindnet.deriveSecrets(newPassword)
    await blindnet.changeSecret(blindnetSecret)
    ```

This will re-encrypt the user’s private keys with the new secret and post them to blindnet.

## Giving access to other users
A user (Alice) can give access to [encrypted data](./encrypt.md){target=_blank} to another user (Bob).  
It means Alice will download her [encrypted data keys](../other/glossary.md){target=_blank} and re-encrypt them with Bob's [public key](../other/glossary.md){target=_blank}. This way Bob can download and decrypt the keys with his [private key](../other/glossary.md){target=_blank}.

Possible use-case for this is when a new user registers to blindnet and needs an access to e.g. customers' data. Think of a new hotel employee accessing guest's encrypted passport during check-in.

Currently, Alice give access **all the data** for which she has the keys.

To give access to other user, use the following **Client SDK** method:

=== "JavaScript"
    ```js linenums="1"
    const userId = 'id_of_user_to_give_access_to’
    blindnet.giveAccess(userId)
    ```

## Lost secret
When a user loses the secret (forgets the login password), the user loses access to the encrypted data since they are unable to decrypt the keys used to encrypt the data.    

You need to put in place the following workflow  

1. [Delete](#deleting_users) the user from blindnet.
1. [Log-in](#registering_and_logging_users_in_blindnet) the user to blindnet with a new secret.
1. After the user has logged-in, another user must [give them access](#giving_access_to_other_users) to the encrypted data.

!!! warning
    If no other user has an access to a particular data when the secret is lost, **no one** will be able to decrypt the data.

## Revoking user access
Revoking an access to a user means the user will lose all the keys necessary to decrypt the data and consequently, lose access to data. Your server should inform blindnet about a user for which the access is being revoked, by using the following blindnet **Server SDK** method:

=== "PHP"
    ```php linenums="1"
    $userId = 'id_of_user_to_revoke_access';
    $blindnet->revokeAccess($userId);
    ```

In the situation where all users in a [user group](../other/glossary.md){target=_blank} always have access to all the data, this action is not meaningful and [deletion](#deleting_users) of users should be performed instead.

## Deleting encrypted data keys
When data is deleted from your server, it's encrypted keys should be deleted from blindnet. User the following **Server SDK** method to delete the keys:

=== "PHP"
    ```php linenums="1"
    $dataId = 'id_of_deleted_data';
    $blindnet->forgetData($dataId);
    ```

## Deleting users
When a user is deleted from your application, you must inform blindnet about the event. This is done from your server by using the following blindnet **Server SDK** method:

=== "PHP"
    ```php linenums="1"
    $userId = 'id_of_user_to_delete';
    $blindnet->forgetUser($userId);
    ```

Deleting a user from blindnet implies that the deleted user will no longer be able to decrypt any data, and other users will no longer be able to [encrypt data](./encrypt.md){target=_blank} for that user.

When deleting users, you must be careful not to delete the last user of a [group](../other/glossary.md){target=_blank} because in that case all existing data will become undecryptable. Deleting the last user has the same effect as [deleting a user group](#deleting_user_groups).

## Deleting user groups
To delete a [user group](../other/glossary.md){target=_blank}, use the following blindnet **Server SDK** method:

=== "PHP"
    ```php linenums="1"
    $groupId = 'id_of_group_to_delete';
    $blindnet->forgetGroup($groupId);
    ```

Deleting a user group in blindnet system implies deleting all its users and encrypted keys from blindnet. This means that encrypted data of this group stored on your servers will not be decryptable anymore.
