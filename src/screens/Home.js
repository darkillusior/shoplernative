import React, { useState } from 'react';
import { View, Text,Button,Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Navbar from '../components/Navbar';
const HomeScreen = ({route}) => {
  const navigation = useNavigation();


  return (
    <>
      
      <Navbar/>
      <ScrollView>
   
      <View className='p-2 bg-[#dfdfdf]' >
      
 <TouchableOpacity  onPress={() =>
                    navigation.navigate("Category",{id:"general-store"})
                  }>  
        <View className='  m-2 mt-4 flex flex-wrap  justify-around '>
      
          <View className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-full '>
           
                <View className='flex flex-col justify-center w-full p-5'>
                  <Image className=' h-48 w-full rounded-full'source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
                  <View className='flex flex-row  justify-evenly w-full mt-5 '>
                    <Image className='w-24 h-24 rounded-full' source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
                    <Image className='w-24 h-24 rounded-full '  source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}  />
                  </View>
                </View>
                <View className='mb-2'><Text className=' text-center text-black font-semibold text-xl'>General Store</Text></View>
              
              </View>
              </View>
</TouchableOpacity>
              <View className='  m-2 mt-4 flex flex-wrap  justify-around '>
      
      <View className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-full '>
       
            <View className='flex flex-col justify-center w-full p-5'>
              <Image className=' h-48 w-full rounded-full'source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
              <View className='flex flex-row  justify-evenly w-full mt-5 '>
                <Image className='w-24 h-24 rounded-full' source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
                <Image className='w-24 h-24 rounded-full '  source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}  />
              </View>
            </View>
            <View className='mb-2'><Text className=' text-center text-black font-semibold text-xl'>General Store</Text></View>
          
          </View>
          </View>
          <View className='  m-2 mt-4 flex flex-wrap  justify-around '>
      
      <View className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-full '>
       
            <View className='flex flex-col justify-center w-full p-5'>
              <Image className=' h-48 w-full rounded-full'source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
              <View className='flex flex-row  justify-evenly w-full mt-5 '>
                <Image className='w-24 h-24 rounded-full' source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}   />
                <Image className='w-24 h-24 rounded-full '  source={{ uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg" }}  />
              </View>
            </View>
            <View className='mb-2'><Text className=' text-center text-black font-semibold text-xl'>General Store</Text></View>
          
          </View>
          </View>

              </View>
              </ScrollView>
    </>
  );
};



export default HomeScreen;
