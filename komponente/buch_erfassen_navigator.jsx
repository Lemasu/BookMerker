import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuchErfassen from './screens/buch_erfassen';
import Detailansicht from './screens/detailansicht';

export default function BuchErfassenNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="BuchErfassen">
            <Stack.Screen name="BuchErfassen" component={BuchErfassen} options={{ headerShown: false }} />
            <Stack.Screen name="Detailansicht" component={Detailansicht} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}