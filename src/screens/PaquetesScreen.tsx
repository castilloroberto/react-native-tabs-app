import React from 'react'
import { AppProps } from '../components/AppParamList'
import { createStackNavigator } from '@react-navigation/stack'
import { PaquetesParamList } from './PaquetesParamList'
import { SendScreen } from './SendScreen'
import { VistaPaquetes } from './VistaPaquetesScreen';



const Stack = createStackNavigator<PaquetesParamList>()

export function PaquetesScreen({navigation,route}:AppProps<'PaquetesScreen'>){

    
    return (
        <Stack.Navigator>
                <Stack.Screen name='VistaPaquetes' component={VistaPaquetes}/>
                <Stack.Screen name='SendScreen' component={SendScreen}/>
            </Stack.Navigator>
        )
}
    