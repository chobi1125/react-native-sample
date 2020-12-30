import React, { ReactNode, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';

export default function Actibity() {
  return(
    <>
      <View>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
});