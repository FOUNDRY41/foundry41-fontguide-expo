import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExtraExtraLarge from './components/ExtraExtraLarge';
import ExtraLarge from './components/ExtraLarge';
import Large from './components/Large';
import Medium from './components/Medium';
import Small from './components/Small';
import ExtraSmall from './components/ExtraSmall';

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <View style={s.rowContainer}>
          <ExtraExtraLarge>
            Extra Extra Large
          </ExtraExtraLarge>
        </View>
        <View style={s.rowContainer}>
          <ExtraLarge>
            Extra Large
          </ExtraLarge>
        </View>
        <View style={s.rowContainer}>
          <Large>
            Large
          </Large>
        </View>
        <View style={s.rowContainer}>
          <Medium>
            Medium
          </Medium>
        </View>
        <View style={s.rowContainer}>
          <Small>
            Small
          </Small>
        </View>
        <View style={s.rowContainer}>
          <ExtraSmall>
            Extra Small
          </ExtraSmall>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60
  },
});
