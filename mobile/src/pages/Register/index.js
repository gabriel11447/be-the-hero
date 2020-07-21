import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

import logoImg from "../../assets/logo.png";

import api from "../../services/api";

import styles from "./styles";

export default function Detail() {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  function navigateBack() {
    navigation.goBack();
  }

  async function handleRegister(name, email) {
    try {
      const response = await api.post("users", { name: name, email: email });
      alert(`Cadastrado com sucesso.\nSeu id: ${response.data.id}`);
      navigation.goBack();
    } catch (err) {
      alert("Não foi possível realizar o cadastro.\nTente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Seu nome"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={(name) => onChangeName(name)}
        value={name}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Seu email"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={(email) => onChangeEmail(email)}
        value={email}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRegister(name, email)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <TouchableOpacity style={styles.registerButton} onPress={navigateBack}>
          <Feather name="arrow-left" size={20} color="#e82041" />
          <Text style={styles.registerText}>Já tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
