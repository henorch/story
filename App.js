import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, ActivityIndicator} from 'react-native';
import SignIn from './components/SignIn';
import AuthNav from './components/AuthNav';

//import the context
import { AuthContext } from './Context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './assets/mainScreen/Drawer';
import HomeScreen from './assets/mainScreen/HomeScreen';


const Drawer = createDrawerNavigator();



function App(props) {
  //const [isloading, setIsLoading] = useState(true);
  //const [isAuth, setIsAuth] = useState(false)

  //defining the initial state to see if the app is loading, loggedin or signup
  const initialState = {
    isLoading: true,
    username: null,
    userToken: null,
  }


  //defiining the reducer to check with case of the application state
  const authReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE TOKEN':
        return{
          ...prevState,
          isLoading: false,
          userToken: action.token
        };
        case 'LOGIN':
          return{
            ...prevState,
            isLoading:false,
            userToken: action.token,
            username: action.id
          };
        case 'REGISTER':
          return{
            ...prevState,
            username: action.id,
            userToken: action.token,
            isLoading: false,
          };
          case 'LOGOUT':
            return{
              ...prevState,
              userToken: null,
              username: null,
              isLoading: false
            }

    }
  }

  //using the useReducer to verify the state of the app
  const [loginState, dispatch] = React.useReducer(authReducer, initialState)


  //populating the context of react 
  const authContext = React.useMemo(() => ({
    SignIn: async (username, password) =>{
      let userToken;
      userToken = null;
      if(username === 'user' && password ==='pass'){
        try {
          userToken = 'poewer';
          await AsyncStorage.setItem('userToken', userToken)
        } catch (error) {
          console.log(error);
        }
      }
      dispatch({
        type: 'LOGIN',
        id: username,
        token: userToken
      })
    },

    SignOut: async () =>{
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (error) {
        console.log(e);
      }
      dispatch({
        type: 'LOGOUT'
      })
    },

    signUp: () => {

    },
  }), [])

  useEffect(()=>{
    setTimeout( async () => {
     let userToken;
     userToken =null;
     try {
       userToken = await AsyncStorage.getItem('userToken')
     } catch (error) {
       console.log(error);
     }
     
     dispatch({ type: 'REGISTER', token: userToken})
    }, 3000);
  }, [])

  console.log({authContext});

if(loginState.isLoading){
  return(
    <View style={{flex:1, justifyContent:'center',
    alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
    )
  }

  return (
  <AuthContext.Provider value={ authContext }>
    <NavigationContainer>
    <View style={{flex:1}}>
      {loginState.userToken !== null ? ( 
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
          <Drawer.Screen name='Home' component={HomeScreen}/>
        </Drawer.Navigator>
     
     ):  <AuthNav/>}
     </View>
     </NavigationContainer>
     </AuthContext.Provider>
     
  );
}

export default App;