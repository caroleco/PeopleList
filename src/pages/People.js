import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=150')
        .then(response => {
          const { results } = response.data;
          this.setState({
            people: results,
            loading: false
          })
        }).catch(error => {
          this.setState({
            error: true,
            loading: false
          })
        })
    }, 1500)
  }

  renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }
    if (this.state.error) {
      return <Text style={styles.error}>Algo deu errado :(</Text>
    }
    return (
      <PeopleList people={this.state.people}
        onPressItem={(pageParams) => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }} />
    )
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderPage()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
})
