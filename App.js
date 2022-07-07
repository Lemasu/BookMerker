import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buchliste from './komponente/screens/buchliste';
import BuchErfassen from './komponente/screens/buch_erfassen';
import ErinnerungSetzen from './komponente/screens/erinnerung_setzen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          {
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
            tabBarLabelStyle: {
              fontWeight: "bold",
              flexWrap: "wrap"
            },
            tabBarActiveBackgroundColor: "blue",
            tabBarInactiveBackgroundColor: "skyblue",
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black"
          }
        }
      >
        <Tab.Screen
          name="BuchListe"
          component={Buchliste}
          options={{
            headerShown: false,
            title: "Buchliste"
          }}
        />
        <Tab.Screen
          name="BuchErfassen"
          component={BuchErfassen}
          options={{
            headerShown: false,
            title: "Buch erfassen"
          }}
        />
        <Tab.Screen
          name="ErinnerungSetzen"
          component={ErinnerungSetzen}
          options={{
            headerShown: false,
            title: "Erinnerung setzen"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}