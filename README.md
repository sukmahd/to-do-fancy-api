# to-do-fancy-api

ToDo List app REST API
with facebook login API

## REST API ToDo

List of todo routes:

| Route              | HTTP          | Description      |
| -------------      |:-------------:| :----------------|
| /todo/signin       |POST           | Login   |
| /todo/signup       |POST           | Register with new user info   |
| /todo/user        |GET            | Get all todo list on authen user|
| /todo/user/:id    |GET            | Get specify todo info on authen user|
| /todo/user        |POST           | post new todo task|
| /todo/user/:id    |DELETE         | delete todo task|
| /todo/user/:id    |PUT            | edit task info|


| /todo/task        |GET            | Get all todo list    |
| /todo/task/:id    |GET            | Get specify todo info     |
| /todo/task        |POST           | post new todo task|
| /todo/task/:id    |DELETE         | delete todo task|
| /todo/task/:id    |PUT            | edit task info|


##how to run

```bash
npm install

npm start
```

need mongo service
