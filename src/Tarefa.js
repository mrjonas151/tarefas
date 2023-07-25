import React from "react";
import { View, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa( {data, deleteItem} ){
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={deleteItem}>
            <FontAwesome name="trash" size={20} color='#22272E' />
            </TouchableOpacity>
            <Text style = {styles.texto}>
                { data.item }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 196, 196, 0.25)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
    },
    texto: {
        marginLeft: 9,
        alignItems: 'center',
    },  
})