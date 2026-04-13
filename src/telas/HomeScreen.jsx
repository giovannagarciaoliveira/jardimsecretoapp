import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  return (
    <View>
      <Text style={styles.bemVindo}> Olá, visitante! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
   bemVindo: {
    fontWeight: 'bold',
   }
})