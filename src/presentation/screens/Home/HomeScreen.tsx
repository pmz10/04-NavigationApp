import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../theme/them';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootSctackParams } from '../../routes/StackNavigator';


const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootSctackParams>>();

  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Profile' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Ir a productos</Text>
      </Pressable> */}
      <PrimaryButton
        onPress={() => navigation.navigate('Profile')}
        label="Ir a Perfil"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ir a Ajustes"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Ir a Productos"
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