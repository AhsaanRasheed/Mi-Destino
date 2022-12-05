
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';

import Signinmethod from './components/tourist auth/signin';
import Signupmethod from './components/tourist auth/signup';
import Main from './components/welcome';
import Homeapp from './components/tourist screens/home';
import EditprofileN from './components/tourist screens/editprofile';
import ComplaintScreen from './components/tourist screens/filecomplaint';
import HomeAdminApp from './components/homeadmin';
import AddproductsA from './components/local product seller/addproducts';
import ClosecomplaintsA from './components/emergency response/closecomplaint';
import ClosecomplainsUser from './components/emergency response/closecomplainsUser';
import ViewcomplainsUser from './components/tourist screens/viewcomplains';
import Localproducts from './components/tourist screens/localproducts';
import SearchLocalP from './components/local product seller/searchlocalproducts';
import MunicipalSigninmethod from './components/emergency response workers/municipal worker/MunicipalWorkerSignIn';
import PoliceSigninmethod from './components/emergency response workers/police officer/PoliceOfficerSignIn';
import RescueSigninmethod from './components/emergency response workers/rescue worker/RescueWorkerSignIn';
import HomeRescueWorker from './components/emergency response workers/rescue worker/HomeRescueWorker';
import HomeMunicipalWorker from './components/emergency response workers/municipal worker/HomeMunicipalWorker';
import HomePoliceOfficer from './components/emergency response workers/police officer/HomePoliceOfficer';
import MunicipalCloseComplaints from './components/emergency response workers/municipal worker/MunicipalCloseComplaints';
import PoliceCloseComplaints from './components/emergency response workers/police officer/PoliceCloseComplaints';
import RescueCloseComplaints from './components/emergency response workers/rescue worker/RescueCloseComplaints';
import ViewRescueClosedComplaints from './components/emergency response workers/rescue worker/ViewRescueClosedComplaints';
import ViewPoliceClosedComplaints from './components/emergency response workers/police officer/ViewPoliceClosedComplaints';
import ViewMunicipalClosedComplaints from './components/emergency response workers/municipal worker/ViewMunicipalClosedComplaints';

const Stack = createNativeStackNavigator();
function App() {
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: true}}>

      <Stack.Screen name="welcome" component={Main}  />
      <Stack.Screen name="signin" component={Signinmethod} />
      <Stack.Screen name="home" component={Homeapp} />
      <Stack.Screen name="signup" component={Signupmethod} options={{ title: 'Sign-Up' }}/>
      <Stack.Screen name="editprofile" component={EditprofileN}/>
      <Stack.Screen name="filecomplaint" component={ComplaintScreen}/>
      <Stack.Screen name="homeadmin" component={HomeAdminApp}/>
      <Stack.Screen name="addproducts" component={AddproductsA}/>
      <Stack.Screen name="closecomplaint" component={ClosecomplaintsA}/>
      <Stack.Screen name="closecomplainsUser" component={ClosecomplainsUser}/>
      <Stack.Screen name="viewcomplains" component={ViewcomplainsUser}/>
      <Stack.Screen name="localproducts" component={Localproducts}/>
      <Stack.Screen name="searchlocalproducts" component={SearchLocalP}/>
      <Stack.Screen name="MunicipalWorkerSignIn" component={MunicipalSigninmethod}/>
      <Stack.Screen name="PoliceOfficerSignIn" component={PoliceSigninmethod}/>
      <Stack.Screen name="RescueWorkerSignIn" component={RescueSigninmethod}/>
      <Stack.Screen name="HomeRescueWorker" component={HomeRescueWorker}/>
      <Stack.Screen name="HomeMunicipalWorker" component={HomeMunicipalWorker}/>
      <Stack.Screen name="HomePoliceOfficer" component={HomePoliceOfficer}/>
      <Stack.Screen name="MunicipalCloseComplaints" component={MunicipalCloseComplaints}/>
      <Stack.Screen name="PoliceCloseComplaints" component={PoliceCloseComplaints}/>
      <Stack.Screen name="RescueCloseComplaints" component={RescueCloseComplaints}/>
      <Stack.Screen name="ViewRescueClosedComplaints" component={ViewRescueClosedComplaints}/>
      <Stack.Screen name="ViewPoliceClosedComplaints" component={ViewPoliceClosedComplaints}/>
      <Stack.Screen name="ViewMunicipalClosedComplaints" component={ViewMunicipalClosedComplaints}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
