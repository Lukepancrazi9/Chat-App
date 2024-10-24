import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { useNetInfo }from '@react-native-community/netinfo';
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
import Start from './components/Start';
import Chat from './components/Chat';

LogBox.ignoreLogs([
  "[2024-04-07T20:44:48.130Z]  @firebase/auth: Auth (10.3.1)",
]);
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();
  // useEffect to display an alert popup if no internet connection
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyDw8TE_SxdCw6cv5iwS_LvHVuO2AWN9tYo",
    authDomain: "chat-app-496b0.firebaseapp.com",
    projectId: "chat-app-496b0",
    storageBucket: "chat-app-496b0.appspot.com",
    messagingSenderId: "793455323298",
    appId: "1:793455323298:web:552b40c2b9577d876d0ffb"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen name="Chat" >
          {(props) => <Chat {...props} isConnected={connectionStatus.isConnected} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
