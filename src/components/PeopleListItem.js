import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { capitalizaFirstLetter } from "../util";

const PeopleListItem = (props) => {
    const { people, navigateToPeopleDetail } = props;
    const { first, last } = people.name;
    const { thumbnail } = people.picture;
    return (
        <TouchableOpacity onPress={() => navigateToPeopleDetail({people})}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }} />
                <Text style={styles.lineText}>{`${capitalizaFirstLetter(first)} ${capitalizaFirstLetter(last)
                    }`}</Text>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    line: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;