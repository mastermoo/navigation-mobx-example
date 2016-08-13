import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import { observer } from 'mobx-react/native';
import { counter } from '../stores';

@observer
export default class PushedScreen extends Component {
  constructor(props) {
    super(props);

    this.counter = counter;
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text style={styles.text}>
          <Text style={{fontWeight: '500'}}>Counter: </Text> {this.counter.count}
        </Text>

        <TouchableOpacity onPress={ this.onIncrementPress.bind(this) }>
          <Text style={styles.button}>Increment Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushPress.bind(this) }>
          <Text style={styles.button}>Push Another</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onIncrementPress() {
    this.counter.increment();
  }

  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen",
    });
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});