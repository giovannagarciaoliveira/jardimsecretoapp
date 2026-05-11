import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../telas/SplashScreen";
import TabNavigation from "./tabNavigation";
import RegisterScreen from "../telas/RegisterScreen";
import LoginScreen from "../telas/LoginScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cadastro"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="tabs"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                 name="Login"
                 component={LoginScreen}
                  options={{ headerShown: false }}
                ></Stack.Screen>

        </Stack.Navigator>


    )
}
