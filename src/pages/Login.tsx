import React from "react";
import { Container, FormRow, Button, Label, TextInput, Title, ButtonText } from "../styles/Login";



export default function Login() {
    return (
        <Container>
            <Title>SideChest'o</Title>
            <FormRow>
                <Label>E-mail:</Label>
                <TextInput placeholder="e-mail"></TextInput>
            </FormRow>
            <FormRow>
                <Label>Senha:</Label>
                <TextInput placeholder="senha"></TextInput>
            </FormRow>
            <Button>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
} 