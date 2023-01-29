# About Books v2 app

> In version 2 of our books app, we are making the data persist even through reload and relaunching the app with the help of an API server

> so initially we set up an API server using npm packages json-server which can be used for development purposes

> additionally, we added a script to the package.json file to watch the port 3001

> added a local file db.json where all the persistent data in our app is stored

> An additional file of api.http has been created for all the requests we will be using in this app

> I have also added an extension called REST client to view the responses of our requests directly in VSCode client to evaluate further

> updated the code in App.js so that we make use of API calls using axios to our API server to fetch, edit, delete data from our local Json file

> In this project, i have learnt about the useEffect function and implemented it in the initial GET request so that we are not stuck in an infinite loop in the browser(check the code for comments)
