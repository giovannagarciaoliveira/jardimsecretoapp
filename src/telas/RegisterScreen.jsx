import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import api from "../services/api";

export default function RegisterScreen({ navigation }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleRegister() {

        console.log("Botão de cadastro clicado");

        if (!nome || !email || !password || !confirmPassword) {
            console.log("ERRO: Existem campos vazios.");
            return;
        }

        if (password !== confirmPassword) {
            console.log("ERRO: As senhas não conferem.");
            return;
        }

        try {

            const response = await api.post(
                "/users/register",
                {
                    nome: nome,
                    email: email,
                    password: password,
                }
            );

            console.log("Cadastro realizado com sucesso!");
            console.log(response.data);

            navigation.navigate("Login");

        } catch (error) {

            console.log("Erro no cadastro:", error);

            console.log(
                "Mensagem da API:",
                error.response?.data?.message ||
                "Não foi possível realizar o cadastro."
            );
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Crie sua conta
            </Text>

            <Text style={styles.label}>
                Nome
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>
                E-mail
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>
                Senha
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.label}>
                Confirme sua senha
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha novamente"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
                Já possui uma conta?{" "}

                <Text
                    style={styles.loginLink}
                    onPress={() => navigation.navigate("Login")}
                >
                    Faça o login
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
        marginTop: 15,
    },

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#999",
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
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

    loginText: {
        marginTop: 20,
        textAlign: "center",
    },

    loginLink: {
        color: "#4A5D23",
        fontWeight: "bold",
    },

});

