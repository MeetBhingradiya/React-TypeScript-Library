# WorkFlow for Project Management Team

### How it Works ?
+ user Runs yarn or npm command
+ target the command to main script file
+ detect what command shoud be run
+ run the command or template setup
+ exit the process

### What is the main script file ?
this file detect what command should be run
+ Core/index.ts

### How to Add New Command ?
you open Core/Commands.ts and add new command to the list
and add in package.json the new command to the list of commands in the scripts section
+ [Commands.ts](../Core/commands.ts)