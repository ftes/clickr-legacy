# Clickr
An audience Response Systen for schools.
Clickr aims to be cheap to deploy and easy to set up.

**This is a prototype. The build is untested since migrating to a mono-repo!**

## Packages
- server: [![@clickr/server badge](https://img.shields.io/npm/v/@clickr/server.svg)](https://www.npmjs.com/package/@clickr/server)
- teacher: [![@clickr/teacher badge](https://img.shields.io/npm/v/@clickr/teacher.svg)](https://www.npmjs.com/package/@clickr/teacher)
- student: [![@clickr/student badge](https://img.shields.io/npm/v/@clickr/student.svg)](https://www.npmjs.com/package/@clickr/student)
- whiteboard: [![@clickr/whiteboard badge](https://img.shields.io/npm/v/@clickr/whiteboard.svg)](https://www.npmjs.com/package/@clickr/whiteboard)
- common: [![@clickr/common badge](https://img.shields.io/npm/v/@clickr/common.svg)](https://www.npmjs.com/package/@clickr/common)

## Setup
1. `git clone git@github.com:ftes/clickr && cd clickr`
2. `npm install`
3. `npm run build` (delegates to [lerna](https://www.npmjs.com/package/lerna) for mono-repo management)
2. `npm run start`
3. Open clients: http://localhost:4001, http://localhost:4002, http://localhost:4003

## Todo
- [ ] test cordova build for student app
- [ ] fix styling

## Architecture
Clickr consists of:
- one [server](./packages/server)
- multiple clients
  - teacher clients
    - [teacher](./packages/teacher) web app
    - [whiteboard](./packages/whiteboard) web app
  - [student](./packages/student) hybrid web app (cordova)
  - to come: _teacher remote_ client

### Basic Architecture
![basic architecture](docs/diagrams/architecture_basic.mmd.png)

### Student Devices
![basic architecture](docs/diagrams/student_devices.mmd.png)

### Teacher Devices
![basic architecture](docs/diagrams/teacher_devices.mmd.png)
