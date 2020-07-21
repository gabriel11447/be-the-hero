import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

import logoImg from "../../assets/logo.png";

import api from "../../services/api";

import styles from "./styles";

export default function Detail() {
  const [id, onChangeText] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  async function handleLogin(id) {
    try {
      const response = await api.post("/usersession", { id: id });

      navigation.navigate("Incidents", { user: response.data.name });
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Sua ID"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={id}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLogin(id)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={navigateToRegister}
        >
          <Feather name="log-in" size={20} color="#e82041" />
          <Text style={styles.registerText}>Não tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
