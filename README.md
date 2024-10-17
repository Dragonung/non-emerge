# non-emerge

## Table of Contents

[Problem](#problem)
[Introduction](#introduction) <br/>
[Render](#render) <br>
[Setup](#setup) <br/>
[Usage](#usage)

##Problem 

There is always an extremely long wait time to connect with a 311 operator to report a vehicular non emergencies over $10,000 and the police will not come for any accident under $10,000. Oftentimes you are left waitng on hold for hours. By the time you get a hold of someone, more than likely you would have forgottent the details of your auto accident. That is where our app comes in and allows you to store all of the pertinent information related to your incident in real time, even if you don't have insurance. Oftentimes with the insurance apps, they are not intuitive and and ask for details in a very sparsed way forcing you to navigate multiple pages to include all of the required information in totality. With non-Emerge everything you need to will be on page and you can easily send off to your insurance agency!

## Introduction

A responsive application to act as a notepad for vehicular non emergencies. Better alternative to 311 since 311 often causes long wait times for reporting. 

Users will have an account to write their vehicuular non emergencies to be stored for later, using a very simple form fill that will have all of the needed details on one page. 


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

  ##Issues
  We ran into trouble adding all of the fields for our Accident Jot and was only able to include 4 at this time. We did not have enough time to work on this. In addition, we had difficulties getting our create function to actually create and save the accident Jot.

  ##Future Development

  - Include more non emergency jot forms
  - Add all of the relevant fields
  - Improve UI design
  - Add feedback/survey to enhance user experience
  - Implement option to print Jot Form entries as a PDF
    


