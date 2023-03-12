import FrontPage from '../screens/FrontPage';
import NewsPage from '../screens/NewsPage';
import AdminPage from '../screens/AdminPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front Page" component={FrontPage} />
        <Stack.Screen name="News Page" component={NewsPage} />
        <Stack.Screen name="Admin Page" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}