import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen({navigation}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Crie sua conta</Text>

            <Text style={styles.label}>Nome</Text>

            <TextInput style={styles.input} placeholder="Digite seu nome" />

            <Text style={styles.label}>E-mail</Text>

            <TextInput style={styles.input} placeholder="Digite seu e-mail" />

            <Text style={styles.label}>Senha</Text>

            <TextInput style={styles.input} placeholder="Digite sua senha" />

            <Text style={styles.label}>Confirme sua senha</Text>

            <TextInput style={styles.input} placeholder="Digite sua senha novamente" />

            <TouchableOpacity
            style={styles.input}
                onPress={() => navigation.navigate("Tabs")}
            >
                <Text>Acessar</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>
                Já possui uma conta? {""}
                
                <Text style={styles.loginLink}
                onPress={()=> navigation.navigate("Login")}>
                    Faça o login
                </Text>
               
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 20
    },

title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
},

label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 20,
},

input: {
    width:"100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    outlineStyle: "none"
},

button: {
    marginTop: 30,
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "50%"
},

  buttonText: {
    color:"#fff",
    fontWeight: "bold",
    textAlign: "center"
  },

  loginText: {
    marginTop:20,
    textAlign:"center",
  },

  loginLink: {
    color: "#4A5D23",
    fontWeight: "bold",
  }

});

