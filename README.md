# Search-U-Save

## Development server instructions

* Ensure Node.js is installed. This can be downloaded at 'https://nodejs.org/en/download/'
* Navigate to the app directory and install dependencies with `npm install`
* Run the development server with `ng serve`
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase hosting instructions

* Build application for a production environment with `ng build prod`
* Navigate to 'https://console.firebase.google.com/' and create a new Firebase project
* Globally install Firebase CLI tools with `npm install -f firebase-tools`
* Login to Firebase using the CLI with the `firebase login` command
* After authentication, use the `firebase init` to begin configuration
* Select the 'Hosting: Configure and deploy Firebase Hosting site' option and set the 'dist' folder to be depolyed
* Rewrite all URLs to index.html (SPA-specific behaviour)
* Decline option to overwrite index.html
* Deploy with `firebase deploy`