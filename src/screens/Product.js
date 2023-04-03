import React from "react";

import { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
// import axios from "axios";
// import baseUrl from "../../utils/baseUrl";
// import { parseCookies } from "nookies";

// import Navbar from '../../components/navbar2'
import ProductCard from "../components/ProductCard";
function Shop() {
  const [showCart, setShowCart] = useState(false);
  const [posts, setPosts] = useState([1,1,1,1]);

  return (
 
      <View className="bg-gray-200 pb-4 ">
        <View className="p-4 flex items-center">
          <Image
            className="w-44 h-44 rounded-full  "
            source={{
              uri: "https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg",
            }}
          />
      
            <Text className="font-semibold text-center  text-indigo-900  p-2 text-xl">Shopname</Text>
          
        </View>
        <ScrollView> 
             <View className="flex flex-wrap mb-12">
          {posts.map((product, index) => (
            <ProductCard
              product={product}
              posts={posts}
              index={index}
              key={index}
            />
          
          ))}
        </View>
        </ScrollView>
      </View>
   
  );
}

export default Shop;
