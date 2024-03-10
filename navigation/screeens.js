import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Home_screen/Home_screen";
const screens=()=>{
    const stack = createStackNavigator()

    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown : false}}
            initialRouteName="HomeScreen">
                <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default screens 