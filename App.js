import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buchliste from './komponente/screens/buchliste';
import BuchErfassen from './komponente/screens/buch_erfassen';
import ErinnerungSetzen from './komponente/screens/erinnerung_setzen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="BuchListe" component={Buchliste} />
        <Tab.Screen name="BuchErfassen" component={BuchErfassen} />
        <Tab.Screen name="ErinnerungSetzen" component={ErinnerungSetzen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}