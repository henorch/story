import { DrawerContentScrollView,   DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Drawer } from 'react-native-paper';
import { MaterialIcons , Ionicons} from '@expo/vector-icons';
import { AuthContext } from '../../Context';


const styles = StyleSheet.create({
    profileHolder:{
        height:120,
        alignItems:'center',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    profilePicture:{
        backgroundColor:'purple',
        borderRadius:50,
        height:90,
        width:90,
    }
    
})

const CustomDrawer = (props) => {
    const { SignOut } = React.useContext(AuthContext);

    return(
        <DrawerContentScrollView {...props}>
            <Drawer.Section>
                <View style={styles.profileHolder}>
                <View style={styles.profilePicture}/>
        <View>
        <Text style={{fontSize: 20,
        fontWeight:'bold'}}>Oluwaniyi Enoch</Text>
        <View style={{flexDirection:'row',
        alignItems:'center', marginTop:5}}>
        <MaterialIcons name="favorite" size={30} color="purple" />
        <Text style={{fontStyle:'italic'}}>Favourite</Text>
            </View>
            </View>   
                </View>
               </Drawer.Section> 
            
                <DrawerItem
                
                icon={({color, size}) =>(
                    <Ionicons name="home" size={24} color="purple" />
                    )}
                label='Home'/>
                 <DrawerItem
                label='Power'/>
                 <DrawerItem
            
            label = "Sign out"
            onPress={()=> {SignOut()}}  />
        </DrawerContentScrollView>
    )
}
export default CustomDrawer;