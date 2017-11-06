# Kickstart your Meteor-Angular Project

### Install Meteor

To run and install Meteor -> Node / npm needs to be installed.

```
$ curl https://install.meteor.com | sh
```

### Clone Projekt
```
$ git clone https://gitlab.com/tradebyte/kickstart-project/meteor-angular.git
```
### Install all dependencies of this project
```
$ meteor npm install
```

### Run Project
```
$ meteor
```

### Commands

Run Meteor
``` 
$ meteor run
```
Run Meteor in Production Mode
``` 
$ meteor run --production
```
Reset Meteor including MongoDB
``` 
$ meteor reset
```
Update all Packages
``` 
$ meteor update --all-packages
```
Build Meteor App
```
$ meteor build ./build/
```
Start Tests
```
$ meteor test --driver-package practicalmeteor:mocha
```