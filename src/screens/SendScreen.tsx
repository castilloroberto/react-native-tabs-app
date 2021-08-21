import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import Icon from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from "../components/Card";
import { Paquete, PaquetesProps } from "./PaquetesParamList";



export function SendScreen({route}:PaquetesProps<'SendScreen'>) {

    const data:Paquete = route.params
    return (
        <View style={styles.body}>
            {/* <Text>{data.duration}</Text> */}
            <Card method={()=>''} data={data}></Card>

            <View style={styles.inputs}>
                <View style={styles.numero} >
                    <TextInput 
                    style={styles.num}
                    textAlign={'center'}
                    onChangeText={()=>''}
                    keyboardType="numeric"
                    placeholder="Numero"/>
                        
                     <Pressable onPress={()=> ''}>
                        {/* <Icon name="times" color="gray" size={20}/> */}
                        <Text>X</Text>
                     </Pressable>
                </View>
                
                
                <TouchableOpacity
                    onPress={()=> ''} 
                    style={styles.btn}>
                    {/* <Icon 
                    color="#ffff" 
                    name="arrow-right" 
                    size={20} 
                    /> */}
                    <Text >{'->'}</Text>
                </TouchableOpacity>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        backgroundColor:'#00a8ff',
        elevation:5
    },
    numero:{
        padding:10,
        width:'80%',
        height:'100%',
        backgroundColor:'#ffff',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    num:{
        fontSize:20,
        width:'90%',
        height:'100%'
    },
    inputs:{
        position:'absolute',
        bottom:20,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
})