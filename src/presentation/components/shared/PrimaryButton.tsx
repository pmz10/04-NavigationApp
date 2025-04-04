import { View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { globalStyles } from '../../theme/them';

interface Props {
    onPress: () => void;
    label: string;

}

export const PrimaryButton = ({ onPress, label }: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
