---
title: Node.js server SDK v0.0.2
---

## Installation
Pick one of the following methods to install the SDK.

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

## Imports
```typescript
const Blindnet = require('@blindnet/sdk-node')
```

## Initialization
Blindnet SDK must be initialized before you can use it (with the exception of the static token generation methods).

```typescript
static async function init(
  appKey: string,
  appId: string,
  endpoint?: string
): Blindnet
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
appKey | `string` | true | [Application private key](../../../other/glossary.md#application_key){target=_blank}
appId | `string` | true | [Application ID](../../../other/glossary.md#application_id){target=_blank}
endpoint | `string` | false | Endpoint of the blindnet server. Default value is `https://api.blindnet.io`. For testing, use `https://test.blindnet.io`.

#### Return type
`Blindnet` (An instance which you use to call SDK methods.)

## Creating user tokens
Two types of [tokens](../../../other/glossary.md#authentication_token){target=_blank} are needed: **tokens for registered users** and **temporary tokens**.

### Create a token for a registered user

These tokens are used by the [registered users](../../../guides/encrypt.md){target=_blank} to invoke SDK methods.

```typescript
function createUserToken(userId: string, groupId?: string): Promise<string>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
userId | `string` | true | ID of a [registered user](../../../other/glossary.md#registered_user){target=_blank}.
groupId | `string` | true | ID of the [group](../../../other/glossary.md#user_groups){target=_blank} to which a [registered user](../../../other/glossary.md#registered_user){target=_blank} belongs.

#### Return type
`Promise<string>`

A static method can also be used.

```typescript
static function createUserToken(
  appKey: string,
  appId: string,
  userId: string,
  groupId?: string
): Promise<string>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
appKey | `string` | true | [Application private key](../../../other/glossary.md#application_key){target=_blank}
appId | `string` | true | [Application ID](../../../other/glossary.md#application_id){target=_blank}
userId | `string` | true | ID of a [registered user](../../../other/glossary.md#registered_user){target=_blank}.
groupId | `string` | true | ID of the [group](../../../other/glossary.md#user_groups){target=_blank} to which a [registered user](../../../other/glossary.md#registered_user){target=_blank} belongs.

#### Return type
`Promise<string>`

### Create a temporary token

Creates a [token](../../../other/glossary.md#short_term_token){target=_blank} for [non-registered users](../../../other/glossary.md#anonymous_user){target=_blank} of your application, usually data senders.
When this token is used for [encrypting data](../../../guides/encrypt.md){target=_blank}, all specified users or users that belong to a specified [group](../../../other/glossary.md#user_groups){target=_blank} will have access to the encrypted data.

```typescript
function createTempUserToken(param: string | string[]): Promise<string>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
param | `string` \| `string[]` | true | ID of the [group](../../../other/glossary.md#user_groups){target=_blank} for which the data is being encrypted OR list of IDs of users to whom the data is being encrypted.

#### Return type
`Promise<string>`

A static method can also be used.

```typescript
static function createTempUserToken(
  appKey: string,
  appId: string,
  param: string | string[]
): Promise<string>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
appKey | `string` | true | [Application private key](../../../other/glossary.md#application_key){target=_blank}
appId | `string` | true | [Application ID](../../../other/glossary.md#application_id){target=_blank}
userId | `string` | true | ID of a [registered user](../../../other/glossary.md#registered_user){target=_blank}.
param | `string` \| `string[]` | true | ID of the [group](../../../other/glossary.md#user_groups){target=_blank} for which the data is being encrypted OR list of IDs of users to whom the data is being encrypted.

#### Return type
`Promise<string>`

## Deleting data keys
Deletes the [encrypted data key](../../../other/glossary.md#encrypted_data_key){target=_blank} from blindnet.

```js
async function forgetData(dataId: string): Promise<void>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
dataId | `string` | true | ID of a data to be deleted.

#### Return type
`Promise<void>`

The operation succeeded if an exception wasn’t thrown.

#### Errors
type | description
---- | -----------
AuthenticationError | [Client token](../../../other/glossary.md#client_token){target=_blank} has expired or is invalid. A wrong [application key](../../../other/glossary.md#application_key){target=_blank} or [application id](../../../other/glossary.md#application_id){target=_blank} is provided .[Generate a new token](../../../guides/managing_users_access.md#creating_user_tokens){target=_blank} and call [refreshToken](#refreshing_the_session).
BlindnetServiceError | Error on blindnet server.

## Revoking access to users
Deletes all [encrypted data keys](../../../other/glossary.md#encrypted_data_key){target=_blank} of a given user.

```js
async function revokeAccess(userId: string): Promise<void>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
userId | `string` | true | ID of a user to revoke access to the encrypted data.

#### Return type
`Promise<void>`

The operation succeeded if an exception wasn’t thrown.

#### Errors
type | description
---- | -----------
AuthenticationError | [Client token](../../../other/glossary.md#client_token){target=_blank} has expired or is invalid. A wrong [application key](../../../other/glossary.md#application_key){target=_blank} or [application id](../../../other/glossary.md#application_id){target=_blank} is provided .[Generate a new token](../../../guides/managing_users_access.md#creating_user_tokens){target=_blank} and call [refreshToken](#refreshing_the_session).
BlindnetServiceError | Error on blindnet server.

## Deleting users
Deletes a user from blindnet.

```js
async function forgetUser(userId: string): Promise<void>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
userId | `string` | true | ID of a user to delete.

#### Return type
`Promise<void>`

The operation succeeded if an exception wasn’t thrown.

#### Errors
type | description
---- | -----------
AuthenticationError | [Client token](../../../other/glossary.md#client_token){target=_blank} has expired or is invalid. A wrong [application key](../../../other/glossary.md#application_key){target=_blank} or [application id](../../../other/glossary.md#application_id){target=_blank} is provided .[Generate a new token](../../../guides/managing_users_access.md#creating_user_tokens){target=_blank} and call [refreshToken](#refreshing_the_session).
BlindnetServiceError | Error on blindnet server.

## Deleting user groups
Deletes all [encrypted data keys](../../../other/glossary.md#encrypted_data_key){target=_blank} of a given user.  
Deletes all users that belong to the [group](../../../other/glossary.md#user_groups){target=_blank} and all their [encrypted data keys](../../../other/glossary.md#encrypted_data_key){target=_blank}.

```js
async function forgetGroup(groupId: string): Promise<void>
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
groupId | `string` | true | ID of a group to delete.

#### Return type
`Promise<void>`

The operation succeeded if an exception wasn’t thrown.

#### Errors
type | description
---- | -----------
AuthenticationError | [Client token](../../../other/glossary.md#client_token){target=_blank} has expired or is invalid. A wrong [application key](../../../other/glossary.md#application_key){target=_blank} or [application id](../../../other/glossary.md#application_id){target=_blank} is provided .[Generate a new token](../../../guides/managing_users_access.md#creating_user_tokens){target=_blank} and call [refreshToken](#refreshing_the_session).
BlindnetServiceError | Error on blindnet server.