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
static function init(string $appKey, string $appId, string $apiEndpoint = 'https://api.blindnet.io'
): Blindnet
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$appKey |  string | true | Application private key. For more information, click <here>.
$appId | string | true | Application ID. For more information, click <here>.
$apiEndpoint | string | false | Endpoint of the blindnet server. Default value is https://api.blindnet.io. For testing, use https://test.blindnet.io.

#### Return type
`Blindnet`

## createTempUserToken
Creates a token for non-registered users of your application, usually data senders.
When this token is used for encrypting data, all users that belong to a specified group will have access to the encrypted data.

```js
function createTempUserToken(string $groupId): string
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$groupId | string | true | ID of the group for which the data is being encrypted. For more information, click <here>.

#### Return type
`String`

## createUserToken
Creates a token for registered users of your application, usually data receivers.

```js
function createUserToken(string $userId, string $groupId): string
```

name | type | required | description
---- | ---- | -------- | -----------
$userId | string | true | ID of a registered user.
$groupId | string | true | ID of the group to which a registered user belongs.

#### Return type
`String`

## forgetData
Deletes the encrypted data key from blindnet.

```js
function forgetData(string $dataId)
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$dataId | string | true | ID of a data to be deleted.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid token, which further implies invalid `appKey` or `appId`.
BlindnetServiceError | Implies an error in the request to blindnet API.

## revokeAccess
Deletes all encrypted data keys of a given user.

```js
function revokeAccess(string $userId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$userId | string | true | ID of a user to revoke access.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid token, which further implies invalid `appKey` or `appId`.
BlindnetServiceError | Implies an error in the request to blindnet API.

## forgetUser
Deletes a user from blindnet.

```js
function forgetUser(string $userId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$userId | string | true | ID of a user to delete.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid token, which further implies invalid `appKey` or `appId`.
BlindnetServiceError | Implies an error in the request to blindnet API.

## forgetGroup
Deletes all encrypted data keys of a given user.  
Deletes all users that belong to the group and all their encrypted data keys.

```js
function forgetGroup(string $groupId): bool
```

#### Parameters
name | type | required | description
---- | ---- | -------- | -----------
$groupId | string | true | ID of a group to delete.

#### Return type
`bool`

#### Errors
type | description
---- | -----------
AuthenticationError | Implies invalid token, which further implies invalid `appKey` or `appId`.
BlindnetServiceError | Implies an error in the request to blindnet API.
