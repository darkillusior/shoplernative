import React from "react";
import { useState,useEffect } from "react";
import { Button, View, Text, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
function Category({route}) {
  const id = route.params.id;
  console.log(id )
  
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [dr1, setDr] = useState([]);


  useEffect(() => {

    (async () => {
      try {
   
        let token = await AsyncStorage.getItem('token');
   
     
        const res = await axios.get(`https://rich-cyan-pronghorn-wear.cyclic.app/api/shop/${id}`, {
          headers: { Authorization: token },
         
        });
      const {post,user}=res.data
      console.log("1gg",user,post)
setPosts(post)
setDr(user)
      } catch (error) {
       console.log(error)
      }


  })();

  }, []);

  // console.log(dr)
  return (
    <>
      <View className="flex flex-col  p-2 bg-[#e3e6e6] ">
        {id === "Doctor" ? (
          <>
            {dr1.map((post) => (
              <View  className="m-2 bg-white  h-56 flex flex-wrap   shadow-md rounded-md">
                <View className="flex flex-row ">
                  <View className=" mt-1 flex flex-col">
                    <Image
                      className="shadow-md rounded-full w-44 h-44 m-2"
                      source={{
                        uri:post.shopimg
                      }}
                    ></Image>

                      <Text className="text-center font-bold text-stone-800">Name</Text>
                   
                  </View>
                  <View className="ml-6 flex flex-col justify-evenly">
                    <Button
                      title="Enter Clinic"
                 
                    />
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          <>
            {posts.map((post) => (
              <View className="m-2 bg-white w-fit   flex flex-row   shadow-md rounded-md">
           
                  <View className=" mt-1 flex flex-col">
                    <Image
                      className="shadow-md rounded-full w-44 h-44 m-2"
                      source={{
                        uri: post.shopimg
                      }}
                    />
                    <Text className="text-center pb-2 font-bold text-stone-800">
                    {post.shopname}
                    </Text>
                  </View>
                  <View className="ml-4  flex flex-col justify-center">
                <TouchableOpacity 
            onPress={() =>
              navigation.navigate("Product")
            }
            style={{ 
             shadowColor: 'blue',
             elevation: 5,
             shadowOffset: {width: -2, height: 4},
             shadowOpacity: 2,
             shadowRadius: 1,}} className=" m-2  bg-cyan-300 w-24 p-2 rounded-full">
        <Text className="px-1">Enter Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity  className=" bg-blue-300 w-24 p-2 m-2 rounded-full">
        <Text className="px-3">Demand</Text>
      </TouchableOpacity>
                  </View>
  
                {/* <View className='overflow-y-auto ml-4 p-2'>
           <SearchComponent userId={post.user._id}/>
           <Text className='text-xl p-1 text-center font-serif font-semibold'>Product list :</Text>
            {post.product.map((product,index)=> ( <View className='grid grid-cols-2 '>
              <View className='bg-white p-1 w-full border border-solid '><View className='text-lg font-bold w-full '>{index+1}.  </View><Text className='text-base w-full font-serif font-semibold '>{product.name}</Text></View>
            
            </View>  ))}
          </View> */}
              </View>
            ))}
          </>
        )}
      </View>
    </>
  );
}

export default Category;
