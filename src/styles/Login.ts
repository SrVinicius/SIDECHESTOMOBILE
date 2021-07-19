import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #4D0958;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: 37px;
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
`
export const FormRow = styled.View`
    flex-direction: row;
    margin-top: 10px;
`
export const Label = styled.Text`
    font-size: 18px;
    color: white;
    padding: 5px;
`
export const TextInput = styled.TextInput`
    border-bottom-width: 3px;
    font-size: 18px;
    padding: 5px;
    margin-left: 5px;
    width: 50%;
`
export const Button = styled.TouchableOpacity`
    background-color: #640A73;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 10px;
    width: 120px;
`
export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 10px;
`
