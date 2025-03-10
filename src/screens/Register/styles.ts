import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {TextInput} from "react-native"

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    padding-bottom: 19px;
    
`

export const TitleHeader = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px
`

export const Fields = styled.View`
`

export const Form = styled.View`

    flex: 1;
    width: 100%;
    padding: 24px;
    
    justify-content: space-between;

`

