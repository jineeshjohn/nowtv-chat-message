# NowTV React Interview

![NowTV](./logo.png)

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Please ask before downloading any external libraries, most will be fine.

1. In `service.js`, utilise the 'APIs' provided by `data.js` to create a promise resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```
(Do not modify `data.js` to achieve this, but if you think there's an issue ask the developer helping you!)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:
  - Display the `avatar` where applicable
  - Display the `email` on hover
  - Format the timestamp to be human readable

3. Zip test back up and send it back to recruiter.

4. Bonus Questions:
  - How would you achieve this with Redux?
    - Redux is hooked up with the app.
  - How would you handle an error from the API?
    - A basic version of error handling is done
  - If you were to continue this application, what would you add?
    1. Improve the UI and make it more responsive
  - If you were to deploy this application (or any web application) to production, how would you personally do it?
    1. create a docker instance of the application and run it locally 
    2. Setup a branching strategy in `git` and merge only the pull request that are passing
    3. This can be hooked up in a build pipeline jenkins
  - Finally, what did you think of the test? 😀
    1. Test can be improved by bringing react testing library
    2. Add end to end test 
    3. Add Integration test for different browsers


## Install
 - Unzip to a folder
 - cd in the folder
 - Run `npm install`
 - Run `npm run test` - to see the tests
 - Run `npm run start` - to view tha application and can be accessed from `localhost:3000`

## Screenshot
<img src="snap.png" />