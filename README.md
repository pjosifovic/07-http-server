![cf](https://i.imgur.com/7v5ASc8.png) Lab 07: Vanilla HTTP Server
======

## Building HTTP server
* Basic HTTP server that is displaying data for users and is able to receive data from users using POST route.

## Code Style
* Javascript + ES6


## Tech / framework used
* [npm package faker](https://www.npmjs.com/package/faker) to generate random user names.
* [npm package winston](https://www.npmjs.com/package/winston) as a logging library.
* [npm package jest](http://facebook.github.io/jest/) used for testing.
* [npm package dotenv](https://www.npmjs.com/package/dotenv) for loading env variables.
* [npm package cowsay](https://www.npmjs.com/package/cowsay) as a configurable talking cow.
* [httpie](https://httpie.org/) to communicate with server using POST method

## Installation and How To Use

Fork and clone this repo to you computer.

Run `npm install`

Run local server using this command `npm start` and make sure that env port is set to `3000` (add .env folder to repo and insert `PORT=3000`)

Once server is running, proceed to your internet browser and in command line write `http://localhost:3000`.

Browse through the displayed page and click on `cowsay` link. This link takes you to cowsay page and here modifying url you can display different messages that will display on your page. Simply edit `<message>` part of the url

 When a client makes a POST request to /api/cowsay it should send JSON that includes `{"text": "<message>"}`. Make sure that httpie is installed on your computer first. `brew install httpie` for MaxOS users

 run this command in CLI and new `message` to update what cow is saying

 `echo '{"text": "<message>"}' | http POST localhost:3000/api/cowsay`


## Licence
MIT © Pedja Josifovic
