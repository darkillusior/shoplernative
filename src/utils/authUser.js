import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const registerUser = async (user, dispatch,actions) => {
  try {
    const res = await axios.post(`https://rich-cyan-pronghorn-wear.cyclic.app/api/signup`, { user});

    setToken(res.data, dispatch,actions);
  } catch (error) {
    setError(catchErrors(error));
  }
 
};

export const loginUser = async (user,dispatch,actions) => {

  try {

    const res = await axios.post(`https://rich-cyan-pronghorn-wear.cyclic.app/api/auth`, { user });
 
   setToken(res.data, dispatch,actions);
     
  } catch (error) {
    setError(catchErrors(error));
  }
 
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    window.location.href = location;
  }
};

const setToken =async (token,dispatch,actions) => {

  await AsyncStorage.setItem('token',token)
  dispatch(actions.signin(token))
};

export const logoutUser = email => {
  cookie.set("userEmail", email);
  cookie.remove("token");
  window.location.href = "/login";
};
