import { View, Text , Alert} from "react-native";

export default function AleertExample() {
    const showAlert = () => {
        Alert.alert(
            'แจ้งเตือน🚨',
            'Do you want to delete data right?',
            [
                {
                    text: 'cancel', onPress: () => {
                        Alert.alert('cancel')
                    }
                },

                {
                    text: 'confirm' , onPress: () => {
                        Alert.alert('confirm')
                    }
                }
            ]
        );
    }

    return (
        <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <Text onPress={showAlert} style={{fontSize: 18, color: 'blue'}}>
                Press to show Alert Dialog

            </Text>

        </View>
    )
}