# Node Client for ClickUp API

Clickup SDK version 2

## Install

```
npm install clickup-sdk
```

## Usage

### Init SDK

```js
import ClickupSDK from 'clickup-sdk';

ClickupSDK.setToken(`YOUR_TOKEN`);
```

### Get User

```js
await ClickupSDK.getUser(`teamId`, `userId`);
```

### Get Task

```js
await ClickupSDK.getTask(`taskId`);
```


