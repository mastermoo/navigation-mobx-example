import React, {Component, PropTypes} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { counter } from '../stores';


@observer
export default class SecondTabScreen extends Component {
  constructor(props) {
    super(props);
    this.buttonsCounter = 0;

    this.counter = counter;
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 20}}>
          <Text style={styles.text}>
            <Text style={{fontWeight: '500'}}>Here Too: </Text> {this.counter.count}
          </Text>

          <TouchableOpacity onPress={ this.onIncrementPress.bind(this) }>
            <Text style={styles.button}>Increment Counter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  onIncrementPress() {
    this.counter.increment();
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});