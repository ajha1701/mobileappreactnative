import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import typography from '../constants/typography';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSURUP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    color: colors.primaryColor,
    fontFamily: 'Rubik-SemiBold',
    fontSize: typography.headingText * 1.5,
    letterSpacing: 2,
  },
});


