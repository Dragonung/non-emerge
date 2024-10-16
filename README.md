# non-emerge

## Table of Contents

[Introduction](#introduction) <br/>
[Render] (#render) <br>
[Setup](#setup) <br/>
[Usage](#usage) <br/>



## Introduction

An application to act as a notepad for 311 emergencies.

Users will have an account to write their 311 emergencies to be stored for later, and contacted/resolved by the appropriate agency depending on their information.


## Render 

https://non-emerge.onrender.com


## Setup

- **psql -U postgres** (set up credentials for sql database), 
  **/i schema.sql** (set up database), 
  **\c non_emerge_db** (connect to our database)
- **/i userData.json** (seed default user data/credentials)
- **/i jotData.json** (seed default jot data)
- **node server.js** (activate server and all dependencies)


## Usage

- default handlebar view: `homepage.handlebars`; showing introduction to app and a button to redirect to login homepage
- `login.handlebars`: user will sign up if no username/password, and login if they have username/password
- `jot.handlebars`: view of all current jots & 'Create Jot' button to redirect user to a form to fill out a 311 emergency
  (add to future development plans)
- `profile.handlebars`: fill out information to create new jot and store in server to create new jot in jot.handlebars
  (add to future development plans)


