import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export interface Paquete {
    key:string
    description:string
    duration:string
    price:number
    title:string
} 

export type PaquetesParamList = {
    VistaPaquetes:undefined
    SendScreen:Paquete
}


export type PaquetesProps<T extends keyof PaquetesParamList> ={
    navigation:StackNavigationProp<PaquetesParamList,T>,
    route:RouteProp<PaquetesParamList,T>,
}