import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ProductScreen({ route, navigation }) {

  return (
    <ScrollView style={styles.container}>

      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvaOAkyxl-ZKAKfHtl8PIvkPj1DhdbESvMOpkJ9_0A&s=10" }}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.name}>
          Rosa do Deserto
        </Text>

        <Text style={styles.price}>
          R$87.99
        </Text>

        <Text style={styles.title}>
          Planta bonita, que precisa ser cuidada muito bem.
        </Text>

        <Text style={styles.description}>
          Cor: Rosa
        </Text>

        <Text style={styles.title}>
          Aguar uma vez ao dia.
        </Text>

        <Text style={styles.description}>
           Necessita de bastante luz solar.

        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Produto adicionado ao carrinho!")}
        >
          <Text style={styles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 350,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 25,
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#4A5D23",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

});