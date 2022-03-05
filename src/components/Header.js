import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6ca2f7',
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});