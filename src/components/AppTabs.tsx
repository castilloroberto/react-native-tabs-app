import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text } from 'react-native'
import { PaquetesScreen } from '../screens/PaquetesScreen'
import { Recargas } from '../screens/Recargas'
import { AppParamList } from './AppParamList'
import { Center } from './Center'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


interface AppTabsProps {

}
const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
        return (
            <Tabs.Navigator>

                <Tabs.Screen
                    name="Recargas" 
                    options={{
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="phone-classic" size={size} color={color}/>
                        )
                    }} 
                    component={Recargas}/>

                <Tabs.Screen
                    name="PaquetesScreen" 
                    options={{
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="cellphone" size={size} color={color}/>
                        )
                    }}
                    component={PaquetesScreen}/>

                <Tabs.Screen
                    name="AjustesScreen" 
                    options={{
                        tabBarLabel:"Ajustes",
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="tune" size={size} color={color}/>
                        ),
                    }} 
                    component={AjustesScreen}/>

            </Tabs.Navigator>
        )
} 

function AjustesScreen() {
    return(
        <Center>
            <Text>Ajustes</Text>
        </Center>
    )
}

