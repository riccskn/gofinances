import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
    border-radius: 5px;


    background-color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.Text`
    
    padding: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.shape};
    
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`
