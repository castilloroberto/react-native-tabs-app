import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type AppParamList = {
    Recargas:undefined
    PaquetesScreen:undefined
    AjustesScreen:undefined
   
}

export type AppProps<T extends keyof AppParamList> ={
    navigation:StackNavigationProp<AppParamList,T>,
    route:RouteProp<AppParamList,T>,
}