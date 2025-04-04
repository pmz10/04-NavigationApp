import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../theme/them';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/primaryButton';


const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Profile' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Ir a productos</Text>
      </Pressable> */}
      <PrimaryButton
        onPress={() => navigation.navigate('Profile' as never)}
        label="Ir a productos"
      />

      {/* <PrimaryButton
        onPress={() => navigation.navigate('Profile' as never)}
        label="Settings"
      /> */}
    </View>

  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default HomeScreen;