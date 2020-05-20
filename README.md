# Tacky Notes

A Notes Taking Application that allows you to write and store notes for later use.

## Installation

To get the application up and running on your computer just follow in order these installation instructions.
- Open the command line and navigate to your apps root folder. Then run:
- `npm Install` This creates a _node_modules_ folder and installs all the dependencies that will be nedded to run this application locally on your machine.
- `npm run app` This creates a server which you can use to run the application, After runnin this it usually creates one on the port **http://localhost:8080/** or any available port.

### Example
```
$ npm install
$ npm run app
i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /scripts/
i ｢wds｣: Content not from webpack is served from C:\Users\User\Desktop\Projects\Notes-App\public
```

## Usage
This app is run on the **Browser**. It allows you to create notes, Each note has a Name, Text and date of creation. The _Homepage_ also comes with a search input and filter option that allows you to search for Notes quickly and easily. You can remove a Note by clicking it This will take you to the notes page where you'll see a **Remove Note** button.

## Tools
Tacky Notes is bult mainly with JavaScript and also.
- `Webpack` - This is used to bundle all assests needed to run the application together. 
- `uuid` - This library is used for creation of  **RFC4122 UUIDs** for each note. you can get this library here. [UUID](https://github.com/uuidjs/uuid)
- `MomentJs` - This is used to display **Created Dates** for each note. You can also get this here. [MomentJs](https://github.com/moment/moment)

## License
Tacky Notes Application is created by Daniel Soladoye. &copy; _Dsholz_ 2020 All Rights Reservered.
