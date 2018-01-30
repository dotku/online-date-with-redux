Guidelines
=========
A sample page has been provided for you. Run `npm install` followed by `npm start` to display the current page. Your goal is to populate the `#searchResults` div with a list of potential matches.
These matches can then be filtered through the `#userPreferences` pane.
Each match lists the candidate's photo, name, and age.
Clicking on a match's contact button should display a dialog listing the match's phone number, cell number, and e-mail.

A web API is available to retrieve raw user information. Sample API usage can be found at [Random User API](https://randomuser.me/documentation#howto).
This raw information will need to be transformed to match the display requirements below.

A single match can be obtained via: <https://randomuser.me/api/?nat=US>

This API's data can be used to retrieve all relevant match details.

These results should be displayed, unfiltered, to the user. The user can then filter these returned results by both gender and age.
If you are applying for a role involving a specific framework, please implement your solution for the search results using that framework.
You are free to refactor the existing filtering controls to use this framework as well, but are not required to do so.

Further Instructions
===================
A basic package.json file has been provided, which you are free to modify or completely overwrite. If using React, we've provided a more complete version with `package.react.json`. This file will allow you to use `npm install` to scaffold the application and `npm start` to launch the application. If you use your own build pipeline, please include documentation on how your application should be run and/or tested.

This project requires Node 6.11+.

NOTE: Consider the scaffolding provided as a rough approximation of what the client is looking for. Feel free to modify (or completely rewrite) the markup or functionality in whatever ways you see fit.

User Stories
============
* As a user, when no filter is selected, I should see 10 matches
* As a user, I expect each match to display:
    * User Photo
    * Full Name (`firstName lastName`)
    * Age
    * Contact Link
* As a user, I want to be able to filter the matches by age range, inclusive
* As a user, I want to be able to filter the matches by gender
* As a user, I want to be able to view a match's contact details. Contact Details contain:
    * Phone #
    * Cell #
    * E-mail
* As a user, I should be able to reset the matchlist to ignore the current filter and display the original 10 results
* As a user, I expect the actual number of matching records to be displayed above the matches themselves, as "{X} Matches Found"
* As a user, I expect the number of displayed matches to change in response to the filtering criteria.