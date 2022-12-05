
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function HomeMunicipalWorker({ navigation}) {


  const [name,setName]= useState('');

 
    /*function getname(){
      firestore().collection('user')
      .doc("" + auth().currentUser.uid
      )
      .get()
      .then(doc => {
        setName(doc.data().name)
        //console.log(name)
        //return name
      });}*/

      useEffect(()=>{
        getdata();
      },[])

      function signout(){
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate('welcome')
      }



  function getdata(){    
  firestore()
  .collection('complaint')
  //.doc(auth().currentUser.uid)
  .where('status', '==', false )
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().description);
    });
  });}

    
  return (
    <View>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'#11c09f'}}>
    Municipal Wokrer Portal 
    </Text>

    </View>

    
    <TouchableOpacity
         style={{
            backgroundColor: '#11c09f', 
            borderRadius:25, 
            marginLeft:75, 
            marginRight:75,
            marginBottom:30, 
            alignItems: 'center',
            justifyContent:'center',
            height:35,
            marginTop:30
            
           
           }}
           onPress={() => navigation.navigate('MunicipalCloseComplaints')}
           >
         <Text style={{fontSize:15, color: 'white'}}>Close Complaints</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
            backgroundColor: '#11c09f', 
            borderRadius:25, 
            marginLeft:75, 
            marginRight:75,
            marginBottom:30, 
            alignItems: 'center',
            justifyContent:'center',
            height:35, 
           
           }}
           onPress={() => navigation.navigate('ViewMunicipalClosedComplaints')}
           >
         <Text style={{fontSize:15, color: 'white'}}>View Closed Complaints</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:100, 
           marginRight:110, 
            marginTop:10,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => signout()}
           >
         <Text style={{fontSize:15, color: 'white'}}>Sign Out</Text>
    </TouchableOpacity>

    </View>
  );
}




