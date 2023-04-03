import { createStackNavigator } from "@react-navigation/stack";
import React, { useState,useEffect } from 'react'


import Home from "./src/screens/Home";
import Login  from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Category  from "./src/screens/Category";
import Product from "./src/screens/Product";
const Stack = createStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useSelector } from 'react-redux'
export default function Auth() {
  const value = useSelector((state) => state.value)
  const [user, setuser] = useState()
  const [authtrue, setAuthtrue] = useState(false)
 
  useEffect(() => {

    (async () => {

       let token = await AsyncStorage.getItem('token');


  
    if (!token ) {
  
      setAuthtrue(false)
    }
    
    else { 
      
      try {
     
    
        const res = await axios.get(`https://rich-cyan-pronghorn-wear.cyclic.app/api/auth`, {
          headers: { Authorization: token},
       
        });
  
        const { user } = res.data;
  console.log("00",user._id) 
        setuser(user);
     setAuthtrue(true)
       if(!user){
        setAuthtrue(false)
        await AsyncStorage.removeItem('token')
       }
        
     
       
      } catch (error) {
    
        await AsyncStorage.removeItem('token')
      }
    }


  })();

  }, [value]);


  return (


      <Stack.Navigator screenOptions={{ headerTitle: "Shopler" }}>
     { authtrue? (
  <>
      
       <Stack.Screen name="Home" component={Home}   initialParams={{user:user._id}} />
       <Stack.Screen name="Category" component={Category} />
       <Stack.Screen name="Product" component={Product} />
  
  </>
) : (
  <>
   <Stack.Screen name="Login" component={Login}  /> 
   <Stack.Screen name="Signup" component={Signup}  /> 
  </>
)
}
      </Stack.Navigator>
     
    
  );
}
