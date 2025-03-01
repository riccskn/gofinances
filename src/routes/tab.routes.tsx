import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Dashboard} from "../screens/Dashboard";
import Register from "../screens/Register";
import { MaterialIcons } from "@expo/vector-icons";


const Tab  = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                    name="format-list-bulleted"
                    size={size}
                    color={color}
                />
            ), headerShown: false,tabBarItemStyle: {flexDirection: 'row', alignItems: 'center'}, tabBarStyle: {backgroundColor: "#FFFFFF"}}}>
          <Tab.Screen
            name="Home"
            component={Dashboard}
          />

            <Tab.Screen
                name="Register"
                component={Register}
            />
        </Tab.Navigator>
    )
}
