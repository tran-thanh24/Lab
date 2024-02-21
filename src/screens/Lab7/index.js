import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./HomeScreen";
import User from "./UserScreen";
import Set from "./SettingScreen";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();
const Lab7 = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View>
                                <Image 
                                source={require('../../assets/home.jpg')}
                                resizeMode="contain"
                                style={{width:25}}
                                />
                            </View>
                        )
                    }
                }}
                />
                <Tab.Screen name="Setting" component={Set}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View>
                                <Image
                                source={require('../../assets/setting.jpg')}
                                resizeMode="contain"
                                style={{width:25}}
                                />
                            </View>
                        )
                    }
                }}/>
                <Tab.Screen name="User" component={User}
                options={{
                    tabBarIcon:({forcused}) => {
                        return(
                            <View>
                                <Image 
                                source={require('../../assets/user.jpg')}
                                resizeMode="contain"
                                style={{width:25}}
                                />
                            </View>
                        )
                    }
                }}/>
                    
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Lab7;