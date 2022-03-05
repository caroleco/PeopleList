import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import Line from '../components/Line'

export default class PeopleDetail extends React.Component {
    render() {
        const { people } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image style={styles.avatar}
                    source={{ 'uri': people.picture.large }} />
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Tel:" content={people.phone} />
                    <Line label="Cel:" content={people.cell} />
                    <Line label="Nacionalidade:" content={people.nat} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        borderRadius: 200
    },
    container: {
        padding: 15,
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'

    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        //fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold'
    }
});