# OnlineNewspaper

#### The app to read news online. 06/08/2018

#### By **Azamat Bekmuratov**

## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5. This app is to provide readers with up-to-date news and events.

### Link to Firebase Deployment of application

* https://newspaper-4e75d.firebaseapp.com


## Current features:

* User can read news and events.

* User can type his name to see how webpage appeals to him on welcome page.

* Admin can update, delete existing news and events, and add new stories to the list

## Future features:
* Create user authentication page with email and password with the ability to create user account, login to existing account and log out from the account
* Share news with other users and interact with them
* Add ability to comment under news and articles

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the root of the clone project in a terminal
* Run '$npm install'
* Create a database for this project on Google Firebase account
* Import the 'sample-articles.json' file from the project directory to your database
* Create a 'api-keys.ts' file at 'online-newspaper/src/app' directory
* In this file, input api-keys from Firebase in following format:
    * export var masterFirebaseConfig = {
          apiKey: [your api key],
          authDomain: [your authDomain],
          databaseURL: [your databaseURL],
          projectId: [your projectId],
          storageBucket: [your storageBucket],
          messagingSenderId: [your messagingSenderId]
      }
* Run `$ng serve` for a dev server
* Navigate to `http://localhost:4200/`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

No known bugs at this time.

## Support and contact details

Please feel free to contact at azaege@gmail.com with any suggestions or feedback.

## Technologies Used

* Angular
* Node Pack Manager
* Firebase
* Bootstrap
* HTML
* CSS

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Azamat Bekmuratov**
