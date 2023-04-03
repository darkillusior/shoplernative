
import React, { useState, useEffect } from "react";




import { TextInput,Text,Button,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { loginUser } from "../utils/authUser";
import {  useDispatch } from 'react-redux'
import { actions } from '../store/store'

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");

  const [password, setPassword ] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [formLoading, setFormLoading] = useState(false);
  // const [submitDisabled, setSubmitDisabled] = useState(true);

 console.log(email,password)

  const handleSubmit = async e => {

    e.preventDefault();
let user={
  email:email,
  password:password
}
if(user.email!=""&&user.password!=""){
   await loginUser(user,dispatch,actions);
  setEmail("")
  setPassword("") 
  
  }
    
  };



  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
   
      <View className="">
        <View className="flex p-10 ">
       
            <Image
              source={{uri:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"}}
              className="w-full h-36"
             
            />
       
          <View className="">
       
              <View className="flex py-3  flex-row items-center justify-center lg:justify-start">
                <Text className="text-3xl  text-slate-700 font-medium">Shopler</Text>
              </View>

              <View className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></View>

              <View className="mb-6">
                <TextInput
                  
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextInput2"
                  placeholder="Email address"
                  data-name='email'
                  value={email}
                  onChangeText={setEmail}
                  onSubmitEditing={handleSubmit}
                />
              </View>

              <View className="mb-6">
                <TextInput
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            
                  placeholder="Password"
                  name="password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  onSubmitEditing={handleSubmit}
                />
              </View>

              <View className="flex justify-between items-center mb-6">
               
                <Text className="text-gray-800">
                  Forgot password?
                </Text>
              </View>

              <View className="text-center lg:text-left">
              <Button className=" mb-4  w-1/4 "
                onPress={handleSubmit}
    
                  title="Login"
      style={{ backgroundColor: "#1DA1F2", color: "white" }}
    
/>
                <Text className="text-sm font-semibold mt-2 pt-1 pl-10 mb-0">
                   Have an account ?
                  < TouchableOpacity 
                   onPress={() =>
                    navigation.navigate("Signup")
                  }
                  > 
                  <Text
                   
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition  duration-200 ease-in-out"
                  >
                      Login
                  </Text></TouchableOpacity> 
                </Text>
              </View>
          
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

export default Login;
