import React, { useState } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { Card } from "../components/Card"
import { Radio } from "../components/Radio"
import { PaquetesProps } from "./PaquetesParamList"
import * as data from '../assets/data.json';

const opciones = [
    {key:"Super Recarga",data:data.paquetes.super},
    {key:"Ilimitados",data:data.paquetes.ilimitados},
    {key:"Llamadas",data:data.paquetes.llamadas},
    {key:"Mensajes",data:data.paquetes.mensajes},
    {key:"Redes",data:data.paquetes.redes},
]


export function VistaPaquetes({navigation,route}:PaquetesProps<'VistaPaquetes'>) {
    // const supers:Paquete[] = data.paquetes.super
    const [categoria, setCategoria] = useState(data.paquetes.super)
    return(
        <View style={styles.body}>
             <FlatList 
                horizontal={true}
                data={opciones}
                renderItem={({item})=> (
                    <Radio method={()=> setCategoria(item.data)} text={item.key}/>
                )}/>
            <FlatList
                style={{height:'100%'}}
                data={categoria}
                renderItem={({item}) => (
                    <Card method={()=> navigation.navigate('SendScreen',item)}  
                        data={item}/>
                )}
                />
            {/* <Nav navigation={navigation}/> */}
            {/* <FlatList data=/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    bottom:{
        position:'absolute',
        bottom:20,
        width:'90%'
    }
})