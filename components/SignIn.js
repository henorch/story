import React, {useState} from 'react'
import {SafeAreaView, StyleSheet,
     Button, TextInput,
     View,
      Text} from 'react-native';
import { Octicons, AntDesign , 
    Ionicons, Zocial} from '@expo/vector-icons';
import { AuthContext } from '../Context';



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#fff',
        padding:10,
        flex:7,
    },
    holder:{
        backgroundColor:'purple', 
        flexDirection:'row',
        alignItems:'center',
        borderColor:'purple',
        justifyContent:'center',
        borderWidth:1,
        paddingLeft:15,
        borderRadius:5,
        overflow:'hidden',
        width:'90%',
        margin:2,
    },
    iconHolder:{
        flex:1,
        display:'flex',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
    }
    
})


const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
const { SignIn }  = React.useContext(AuthContext)

  return(
    <SafeAreaView style={styles.container}>
     <Text style={{fontSize:50,
        marginBottom:10}}>Sign In</Text>


<View style={styles.holder}>
    <Octicons  style={styles.iconHolder} name="person" size={24} color="white" />
    <TextInput
        style={styles.input}
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter your username here'
        value={username}
        onChangeText={text => setUsername(text)}
      />
</View>



<View style={styles.holder}>
    <Octicons  style={styles.iconHolder} name="lock" size={24} color="white" />
    <TextInput
        style={styles.input}
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter your passsword here'
        value={password}
        onChangeText={text => setPassword(text)}
      />
      
</View>

      <Button title='Submit' onPress={()=> {SignIn(username, password)}}/>

      <Text onPress={()=>{navigation.navigate('register')}}>New to storybox? click here</Text>


<View style={{
marginTop:20
}}>
<Text style={{fontSize:30,
backgroundColor:'purple',
padding:5,
marginBottom:10,
color:'white'}}>Social</Text>
      <View style={{flexDirection:'row',
      justifyContent:'center',
      display:'flex',
      width:'90%',
      alignItems:'center',
        paddingLeft:10}}>
      <AntDesign  style={styles.iconHolder} name="facebook-square" size={70} color="blue" />

<AntDesign  style={styles.iconHolder} name="linkedin-square" size={70} color="purple" />


<Zocial name="youtube" style={styles.iconHolder}  size={70} size={50} color="red" />

<Ionicons name="ios-logo-github"  style={styles.iconHolder} size={50} color="black" />
    </View>
    </View>

    <Text style={{
        alignSelf:'center'
    }}>copyright &copy; 2021</Text>
    </SafeAreaView>
  )
}
export default SignIn