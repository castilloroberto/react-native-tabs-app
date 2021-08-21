import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AppTabs } from './components/AppTabs'

interface RoutesProps {

}
export const Routes: React.FC<RoutesProps> = ({}) => {
        return (
            <NavigationContainer>
                <AppTabs />
            </NavigationContainer>
        )
}