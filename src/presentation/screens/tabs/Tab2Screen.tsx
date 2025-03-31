import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab2Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab2Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab2Screen;