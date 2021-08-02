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

### Update Task

```js
const payload = {
    "name": "Updated Task Name",
    "description": "Updated Task Content",
    "status": "in progress",
    "priority": 1,
    "time_estimate": 8640000,
    "assignees": {
        "add": [
            182
        ],
        "rem": [
            183
        ]
    },
    "archived": false
};
await ClickupSDK.updateTaskStatus(`taskId`, 'DONE');
```

### Update task status

```js
await ClickupSDK.upda(`taskId`);
```

