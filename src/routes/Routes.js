import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import Home from '../screens/Home';
import NewVideo from '../screens/NewVideo';

const Stack = createNativeStackNavigator();

export default function Routes({ videos, newVideo }) {
  const navigation = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home} 
          initialParams={{ videos }}
          options={{
            headerRight: ({ tintColor }) => (
              <TouchableOpacity onPress={() => {
                navigation.navigate("NewVideo")
              }}>
                <MaterialIcons name="video-call" size={30} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="NewVideo" component={NewVideo} initialParams={{ newVideo }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
