import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ErinnerungSetzen from './komponente/screens/erinnerung_setzen';
import BuchlisteNavigator from './komponente/buchliste_navigator';
import BuchErfassenNavigator from './komponente/buch_erfassen_navigator';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Booklist"
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
          name="BuchlisteNavigator"
          component={BuchlisteNavigator}
          options={{
            headerShown: false,
            title: "Buchliste",
            unmountOnBlur: true
          }}
        />
        <Tab.Screen
          name="BuchErfassenNavigator"
          component={BuchErfassenNavigator}
          options={{
            headerShown: false,
            title: "Buch erfassen",
            unmountOnBlur: true
          }}
        />
        <Tab.Screen
          name="ErinnerungSetzen"
          component={ErinnerungSetzen}
          options={{
            headerShown: false,
            title: "Erinnerung setzen",
            unmountOnBlur: true
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}