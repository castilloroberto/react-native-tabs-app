import React from 'react'
import {Text,StyleSheet, Pressable} from 'react-native' 


interface RadioProps {
    method:()=>void,
    text:string
}



export const Radio:React.FC<RadioProps> = ({method,text}) => {

    return (
        <Pressable onPress={method} style={styles.radio}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    radio:{
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:25,
        borderRadius:25,
        backgroundColor:'#dfe6e9',
        elevation:2.5,
        margin:10,
        padding:10
    },
    text:{
        color:'#b2bec3'
    }
})
