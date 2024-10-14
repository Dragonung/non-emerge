# non-emerge

## Table of Contents

[Introduction](#introduction)
[Setup](#setup)
[Usage](#usage)



## Introduction

An application to act as a notepad for 311 emergencies.

Users will have an account to write their 311 emergencies onto, while 311 agents monitor the app in order to send assistance depending on conditions.


## Setup

- node server.js (activate server and all dependencies)
- psql -U Postgres (set up credentials for sql database) -> \c non_emerge_db (connect to our database)
- /i userData.json (seed default user data/credentials)
- /i jotData.json (seed default jot data)
- type "localhost: 3001" in server or Insomnia and enable back end for functionality


## Usage

- default handlebar view: `homepage.handlebars`; showing introduction to app and a button to redirect to login homepage
- `login.handlebars`: user will sign up if no username/password, and login if they have username/password
- `jot.handlebars`: view of all current jots & 'Create Jot' button to redirect user to a form to fill out a 311 emergency
  (add to future development plans)
- `profile.handlebars`: fill out information to create new jot and store in server to create new jot in jot.handlebars
  (add to future development plans)


