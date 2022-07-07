import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buchliste from './screens/buchliste';
import Detailansicht from './screens/detailansicht';

export default function BuchlisteNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Buchliste">
            <Stack.Screen name="Buchliste" component={Buchliste} options={{ headerShown: false }} />
            <Stack.Screen name="Detailansicht" component={Detailansicht} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}