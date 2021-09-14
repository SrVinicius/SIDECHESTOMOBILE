import React from "react"; 
import { Container, FormRow, Label, TextInput, Title, ButtonText } from "../styles/Login";
import {Image, StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/core";

const styles = StyleSheet.create({
    imagem: {
        width: 60,
        height: 60,
    }
  })

export default function Login() {
   
    const navigation = useNavigation();
    function handleComeco() {
    navigation.navigate("Comeco");
  }
    return (
        <Container>
            <Image style = {styles.imagem}source={require('../img/sidechest60.png')}/>
            <Title>SideChest'o</Title>
            <FormRow>
                <Label>E-mail:</Label>
                <TextInput placeholder="e-mail"></TextInput>
            </FormRow>
            <FormRow>
                <Label>Senha:</Label>
                <TextInput placeholder="senha"></TextInput>
            </FormRow>
            <Button
                onPress={handleComeco}
                title="Login"
                color="#fffff"
             />
            <Button
                onPress={handleComeco}
                title="Cadastrar"
                color="#fffff"
            />
        </Container>
    );
} 

