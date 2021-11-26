import React, {useState} from 'react'
import {SafeAreaView, StyleSheet,
     Button, TextInput,
     View,
      Text} from 'react-native';
import { Octicons, AntDesign , 
    Ionicons, Zocial} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';



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


const SignUp = ({navigation}) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  

  return(
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize:50,
        marginBottom:10}}>Sign up</Text>
    <View style={styles.holder}>
    <Octicons  style={styles.iconHolder} name="person" size={24} color="white" />
      <TextInput
        style={styles.input}
        iconType='MaterialIcons'
        placeholder='Enter your firstname here'
        value={firstname}
        onChangeText={text => setFirstName(text)}/>
      </View>

<View style={styles.holder}>
    <Octicons  style={styles.iconHolder} name="person" size={24} color="white" />
    <TextInput
        style={styles.input}
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter your lastname here'
        value={lastname}
        onChangeText={text => setLastName(text)}
      />
      </View>


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
    <Octicons  style={styles.iconHolder} name="mail" size={24} color="white" />
    <TextInput
        style={styles.input}
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter your email here'
        value={email}
        onChangeText={text => setEmail(text)}
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

      <Button title='Submit'  onPress={() => console.log({
          firstname, lastname, email, username, password
      })}/>

      <Text onPress={()=>{navigation.navigate('login')}}>Already registered?  Click Here</Text>


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
export default SignUp;