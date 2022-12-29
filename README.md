# Discord bot JS

[![discord.js](https://img.shields.io/github/package-json/dependency-version/apozinn/discord-bot-js/discord.js)](https://discord.js.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/apozinn/discord-bot-js.svg)](https://github.com/apozinn/discord-bot-js/stargazers)
[![Pull Requests](https://img.shields.io/badge/Pull%20Requests-Welcome!-brightgreen)](https://github.com/apozinn/discord-bot-js/pulls)

## Introduction

This is a bot for discord made in discord.js and typescript. The project already has numerous commands and events, but it is up to you to add others. The entire base was made with possible future updates in mind, both in code and in the discord api.

In case of bufs or doubts, and pr, contact me on discord [Discord server](https://discord.gg/Qg3dpcG3bY)!

## Features

- Database connection with mongoDB
- Readers of commands, events and automatic slashCommands.
- Basic integration with express for requests from dashboards.

## Setup

1. Env file:
    - Access the `exemple.env` file and change its name to `.env`.
    - Between the quotation marks, change their values ​​to those described.
    - In case of doubts about how to get the token or mongoDB-url, see a brief help below.
2. Discord bot token:
    - Access [Discord Developer Portal](https://discord.com/developers/applications/) and create a new discord client, and get his token.
    - If you have problems creating the token, see this tutorial [guide to create a new token](https://www.writebots.com/discord-bot-token/).
3. Creating a mongoDB-uri:
    - Access [MongoDB tutorial ](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjcq5GD48T5AhWFuZUCHVNgBz4QFnoECAQQAQ&url=https%3A%2F%2Ftipscode.com.br%2Fmongodb-guia-completo-para-iniciante&usg=AOvVaw2U5mE5UUCZ3QWq4Qd5gYD3).
3. tutorial.
    - Access the configuration files in `config`.
    - In `config.json` change the client settings.
    - In `api.json` change the api settings.
4. Installing depedencies.
    - $ `npm install` in terminal.

## Starting the bot
     $ npm start
##

I hope I can contribute to everyone who is new to javascript, discord.js, or wants a bo to use on their servers. Thanks for listening!