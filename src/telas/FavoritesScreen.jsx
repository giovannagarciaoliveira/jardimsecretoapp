import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View, Text } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1322733761/pt/foto/green-succulent-plants.jpg?s=612x612&w=0&k=20&c=D0N7-EKD5fZ5xx0iEXJF6ehB7Nufdlt-T6XJwoZ9aKE="
           }}
          style={styles.image}
        />
      <View style={styles.infoContainer}>
      <Text style={styles.plantName}>Monstera Deliciosa</Text>
      <Text style={styles.price}>R$ 89,90</Text>
      </View>
      <Ionicons   name="heart"
        size={28}
        color="#4a5d23"/>
      
</View>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

container: {
  flex: 1,
  padding: 20,
  backgoundColor: "#fff",

},


    card:{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: 15,
      padding: 15,
    },

    infoContainer: {
      flex: 1,
      marginLeft: 15,
    },
     
    plantName: {
      fontSize: 18,
      fontWeight: "bold",

    },

    price: {
      marginTop: 5,
      fontSize: 16,
      color: "#4A5D23",
    
    },
});