import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import store from './src/store/store'
import Auth from "./auth";
export default function App() {
  return (
   <NavigationContainer>
       <Provider store={store}>
          <Auth/>
 
      </Provider>
    </NavigationContainer>
  );
}
