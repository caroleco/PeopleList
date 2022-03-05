import React from "react";
import { FlatList, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';


const PeopleList = (props) => {
    const { people, onPressItem } = props;

    return (
        <FlatList
            style={styles.container}
            data={people}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={item => item.login.uuid}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default PeopleList;