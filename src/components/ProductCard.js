import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
function ProductCard() {
  return (
    
    <View className="w-11/12 mx-4 my-2 flex flex-row  max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
      <Image
        className="w-32 m-2 h-32  rounded-full"
        source={{
          uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg",
        }}
    
      />

      <View className="mx-2 my-5">
        <View className="flex flex-row  justify-between">
          <Text className="text-bs font-medium   text-green-300">
           Choclate
          </Text>
          <View className="flex justify-center items-center">
            {/* <Icon
         size='large'
          name="heart"
         color={isLiked ? "red" : "grey"}
         style={{ cursor: "pointer" }}
         onClick={() =>
           likePost(product._id, posts.user._id, user._id, setLikes, isLiked ? false : true)
         }
       /> */}
            <View className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            <Text>  1{" "}</Text>
            </View>
          </View>
        </View>

        <View className="flex  ">

          <Text  className="text-bs font-medium    text-green-300">&#8377;2000</Text>
 
          <Text className="text-base font-medium  tracking-tight  text-green-300">
            qt:1200
          </Text>
          <Text >
           
          </Text>
          <TouchableOpacity style={{ 
             shadowColor: 'blue',
             elevation: 5,
             shadowOffset: {width: -2, height: 4},
             shadowOpacity: 2,
             shadowRadius: 1,}} className=" bg-blue-700   rounded-lg px-5 py-2.5  ">
        <Text className="px-1 font-medium text-center text-white"> Add to cart</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductCard;
