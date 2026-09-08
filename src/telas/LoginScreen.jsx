
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>

     
      <Text style={styles.logo}>Jardim Secreto</Text>

 
      <Text style={styles.title}>Bem-vindo de volta!</Text>

      <Text style={styles.subtitle}>
        Entre na sua conta para continuar.
      </Text>

    
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>


      <View style={styles.form}>
        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

  
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Ainda não possui uma conta?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.registerLink}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#EEF5ED",
  },

  logo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#527D4D",
    marginBottom: 8,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#294A27",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: 15,
    marginBottom: 35,
  },

  form: {
    width: "100%",
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#355C32",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D4DFD1",

    borderRadius: 10,

    paddingHorizontal: 15,
    fontSize: 15,

    color: "#333",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    color: "#527D4D",
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    height: 52,

    backgroundColor: "#527D4D",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,

    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 25,
  },

  registerText: {
    color: "#777",
    fontSize: 14,
  },

  registerLink: {
    color: "#527D4D",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },

});
