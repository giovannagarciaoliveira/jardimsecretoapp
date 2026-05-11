import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não possui uma conta?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 20,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    outlineStyle: "none",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "50%",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  registerText: {
    marginTop: 20,
    textAlign: "center",
  },

  registerLink: {
    color: "#4A5D23",
    fontWeight: "bold",
  },
});