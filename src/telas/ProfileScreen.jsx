import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function ProfileScreen () {
    return(
        <View> 
            <View>
                <Ionicons
                name="person-circle"
                size={120}
                color="#8DAA81"
                />
                <Text>Giovanna Garcia</Text>
                <Text>giovannagarciaoliveira6@gmail.com</Text>
            </View>
            <TouchableOpacity>
                <Text>Trocar senha</Text>
            </TouchableOpacity>
        </View>
    )
}