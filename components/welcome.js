
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Main({ navigation }) {

  return (
    <View >
    <View style={{backgroundColor: '#11c09f',justifyContent: 'center', alignItems: 'center'}}>

    <Text style={{paddingTop:70,fontSize:30,fontWeight:'bold',color:'white'}}>
    Welcome!  
    </Text>
    <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold',color:'white'}}>
    Mi Destino is here to help you.
    </Text>
    </View>

    <View style={{backgroundColor: '#11c09f'}}>
    <TouchableOpacity
         style={{
           backgroundColor: '#fce468', 
           borderRadius:25, 
           marginLeft:75, 
           marginRight:75,
           marginBottom:30, 
           alignItems: 'center',
           justifyContent:'center',
           height:35,
           marginTop:40
           
           }}
           onPress={() => navigation.navigate('signin')}
           >

         <Text style={{fontSize:15, color: '#49440c'}}> Tourist Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#fce468', 
           borderRadius:25, 
           marginLeft:75, 
           marginRight:75,
           marginBottom:30, 
           alignItems: 'center',
           justifyContent:'center',
           height:35,
           
           
           }}
           onPress={() => navigation.navigate('RescueWorkerSignIn')}
           >

         <Text style={{fontSize:15, color: '#49440c'}}> Rescue Worker Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#fce468', 
           borderRadius:25, 
           marginLeft:75, 
           marginRight:75,
           marginBottom:30, 
           alignItems: 'center',
           justifyContent:'center',
           height:35,
           
           
           }}
           onPress={() => navigation.navigate('MunicipalWorkerSignIn')}
           >

         <Text style={{fontSize:15, color: '#49440c'}}> Municipal Worker Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#fce468', 
           borderRadius:25, 
           marginLeft:75, 
           marginRight:75,
           marginBottom:30, 
           alignItems: 'center',
           justifyContent:'center',
           height:35,
           
           
           }}
           onPress={() => navigation.navigate('PoliceOfficerSignIn')}
           >

         <Text style={{fontSize:15, color: '#49440c'}}> Police Officer Sign In</Text>
    </TouchableOpacity>

    <View style={{borderTopRightRadius:60,borderTopLeftRadius:60, backgroundColor:'white',height:200}}>
    </View>
        
        </View>
  
    </View>
  );
}






