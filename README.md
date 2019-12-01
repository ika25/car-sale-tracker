# car-sale-tracker

This project was bootstrapped with Create React App.

# Project uses the Following as Global Dependencies

For running mulitple scripts: Concurrently

Restarting the Server: Nodemon

# To Install App

To Install Dependencies Make Sure You Are In Root Directory And Run Following Command

npm run install-all

To Run Application In Development Mode Run The Following Command

npm run dev

# To open app on heroku

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a mernstackapplication
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a mernstackapplication
