# Ciboulot app

## Branches

Three branches:

* master: everything tested
* dev: TDD implementation underway
* exp: exploration/experimentation branch
    * pretty much evertying is there right now ;-)

## Folders

* app: Angular.js app
* config: config files
* content: default content folder
* scripts: to compile coffeescripts, run tests, and extrat the static html
* server: Python tornado server
* test

## Set-up

To compile coffeescript sources

    sh scripts/app/coffee_all.sh

To launch server in debug mode (port 8888)

    python server/launch_debug.py

Visit here to get an idea of the intent:

    localhost:8888/example/01

## Technology

* Angular.js
* Coffeescript
* Python server (tornado)
