import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LimitScreen from './screens/LimitScreen';
import ParentScreen from './screens/ParentScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import RegisterScreen from './screens/RegisterScreen';
import FirstScreen from './screens/FirstScreen';
import FaceoneScreen from './screens/FaceoneScreen';
import FacetwoScreen from './screens/FacetwoScreen';
import FacethreeScreen from './screens/FacethreeScreen';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RooNavigator/>
  );
}

function AuthStack(){
  return (
    <Stack.Navigator >
      < Stack.Screen name ="First" component={FirstScreen} options={{ headerShown : false}}/>
      < Stack.Screen name ="Second" component={SecondScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Third" component={ThirdScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Fourth" component={FourthScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Register" component={RegisterScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Login" component={LoginScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Parent" component={ParentScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Limit" component={LimitScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Face1" component={FaceoneScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Face2" component={FacetwoScreen}  options={{ headerShown : false}} />
      < Stack.Screen name ="Face3" component={FacethreeScreen}  options={{ headerShown : false}} />
    </Stack.Navigator>
  )
}

function RooNavigator(){
  return (
    <NavigationContainer>
      < AuthStack />
    </NavigationContainer>
  )
}
