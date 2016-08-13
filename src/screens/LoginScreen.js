import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { observer } from 'mobx-react/native';
import { app, counter } from '../stores';

// this is a traditional React component connected wrapped in an observer function
@observer
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.app = app;
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

        <TouchableOpacity onPress={ this.onLoginPress.bind(this) }>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onIncrementPress() {
    this.counter.increment();
  }

  onLoginPress() {
    this.app.login();
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});