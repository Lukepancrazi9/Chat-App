## Chat App

A mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

### Features

- Send and receive messages in real-time
- Share Location
- Take a photo and share
- Choose a photo from library and share
- Customize Color Theme

### Dependencies

- Expo
- React
- React Native
- Firebase
- Gifted Chat library
- Expo ImagePicker
- Expo MediaLibrary
- Expo Location

### Prerequisites
Before installing Expo, ensure you have a suitable version of Node installed. At the time of writing, Expo only supports Node 16.. at max.
Node.js: Download and install Node.js. For this you can use the nvm tool https://github.com/nvm-sh/nvm
```bash
nvm install 16.19.0
nvm use 16.19.0
nvm alias default 16.19.0
```
Sign up for Google Firebase
- Click on Firestore Database and create or add new project.
```bash
npm install firebase@9.13.0 --save
```
- Settings > Project Settings > General tab > Your Apps > Firestore for Web and generate project configurations
- Change Rules:
```
  from allow read, write: if false;
  to allow read, write: if true;
```
- In App.js file copy firebaseConfig variable:
  ```
      const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-authdomain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id",
       };
  ```
- Initialize Firebase
```
  const app = initializeApp(firebaseConfig);
```
## Installation 

- Clone the Repository:
```bash
git clone https://github.com/Lukepancrazi9/chat-app.git
```
- Install Expo and Expo CLI, as this is the platform you’ll use to build your app;
```bash
npm install -g expo-cli
```
- Install Expo Go app on your mobile device, so that you can test your app on your own mobile device;
      Search for the Expo Go app in the relevant app store for your device (iOS or Android)
- Create an Expo account.


## Start the App
- Use the Expo Go App on your mobile device to check the UI
- Initialize the app in your terminal:
```bash
npx expo start
```
or 
```bash
npm start
```
