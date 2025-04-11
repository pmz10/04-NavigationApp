import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootSctackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/them';

const ProductScreen = () => {

  const params =  useRoute<RouteProp<RootSctackParams, 'Product'>>().params;
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: params.name,
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    });
  }, [navigation, params.name]);

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>
      <Text style={{fontSize:20, textAlign:'center', marginTop:20}}>{params.id} - {params.name}</Text>
    </View>
  );
};


export default ProductScreen;