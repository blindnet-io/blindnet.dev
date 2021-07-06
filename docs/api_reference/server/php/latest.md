---
title: PHP server SDK v0.9.2
---

## Installation

```console 
composer require blindnet/blindnet-sdk-php
```

## Imports
```php linenums="1"
require 'vendor/autoload.php';
use Blindnet\BlindnetSDKPHP\Blindnet;
```

## Init
Initializes blindnet server SDK.

```js
static function init(
  string $appKey,
  string $appId,
  string $apiEndpoint = 'https://api.blindnet.io'
): Blindnet
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$appKey | `string` | true | [Application private key](../../../other/glossary.md){target=_blank}
$appId | `string` | true | [Application ID](../../../other/glossary.md){target=_blank}
$apiEndpoint | `string` | false | Endpoint of the blindnet server. Default value is `https://api.blindnet.io`. For testing, use `https://test.blindnet.io`.

#### Return type
`Blindnet`

## createTempUserToken
Creates a [token](../../../other/glossary.md){target=_blank} for [non-registered users](../../../other/glossary.md){target=_blank} of your application, usually data senders.
When this token is used for [encrypting data](../../../guides/encrypt.md){target=_blank}, all users that belong to a specified [group](../../../other/glossary.md){target=_blank} will have access to the encrypted data.

```js
function createTempUserToken(string $groupId): string
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$groupId | `string` | true | ID of the [group](../../../other/glossary.md){target=_blank} for which the data is being encrypted.

#### Return type
`String`

## createUserToken
Creates a [token](../../../other/glossary.md){target=_blank} for [registered](../../../other/glossary.md){target=_blank} users of your application, usually data receivers.

```js
function createUserToken(string $userId, string $groupId): string
```

name | type | required | description
---- | ---- | -------- | -----------
$userId | `string` | true | ID of a [registered user](../../../other/glossary.md){target=_blank}.
$groupId | `string` | true | ID of the [group](../../../other/glossary.md){target=_blank} to which a [registered user](../../../other/glossary.md){target=_blank} belongs.

#### Return type
`String`

## forgetData
Deletes the [encrypted data key](../../../other/glossary.md){target=_blank} from blindnet.

```js
function forgetData(string $dataId)
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$dataId | `string` | true | ID of a data to be deleted.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid [token](../../../other/glossary.md){target=_blank}, which further implies invalid [application id](../../../other/glossary.md){target=_blank} or [application key](../../../other/glossary.md){target=_blank}.
BlindnetServiceError | Implies an error in the request to blindnet API.

## revokeAccess
Deletes all [encrypted data keys](../../../other/glossary.md){target=_blank} of a given user.

```js
function revokeAccess(string $userId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$userId | `string` | true | ID of a user to revoke access to the encrypted data.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid [token](../../../other/glossary.md){target=_blank}, which further implies invalid [application id](../../../other/glossary.md){target=_blank} or [application key](../../../other/glossary.md){target=_blank}.
BlindnetServiceError | Implies an error in the request to blindnet API.

## forgetUser
Deletes a user from blindnet.

```js
function forgetUser(string $userId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$userId | `string` | true | ID of a user to delete.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid [token](../../../other/glossary.md){target=_blank}, which further implies invalid [application id](../../../other/glossary.md){target=_blank} or [application key](../../../other/glossary.md){target=_blank}.
BlindnetServiceError | Implies an error in the request to blindnet API.

## forgetGroup
Deletes all [encrypted data keys](../../../other/glossary.md){target=_blank} of a given user.  
Deletes all users that belong to the [group](../../../other/glossary.md){target=_blank} and all their [encrypted data keys](../../../other/glossary.md){target=_blank}.

```js
function forgetGroup(string $groupId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$groupId | `string` | true | ID of a group to delete.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid [token](../../../other/glossary.md){target=_blank}, which further implies invalid [application id](../../../other/glossary.md){target=_blank} or [application key](../../../other/glossary.md){target=_blank}.
BlindnetServiceError | Implies an error in the request to blindnet API.
