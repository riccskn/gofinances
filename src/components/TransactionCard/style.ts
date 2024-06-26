import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {css} from "styled-components";

interface Props {
    type: 'entry' | 'leave' | 'total',
}

export const Container = styled.View`
    margin-top: ${RFPercentage(2)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 2px 24px;
    border-radius: 5px;
`

export const TitleTransaction = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0 18px;
    margin-top: ${RFPercentage(2)}px;
    font-size: ${RFValue(14)}px;
`

export const TitleAmount = styled.Text<Props>`
    color: ${({ theme }) => theme.colors.success};

    ${(props) => props.type == 'leave' && css`
      color: ${({ theme}) => theme.colors.attention}; 
    `}
    
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0 18px;
    margin-top: ${RFPercentage(1)}px;
    font-size: ${RFValue(20)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFPercentage(3)}px;
    margin-bottom: ${RFPercentage(3)}px;
    margin-left: ${RFPercentage(1)}px;
    
`

export const TitleCategory = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0 18px;
    font-size: ${RFValue(14)}px;
`

export const DateCategory = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0 18px;
    font-size: ${RFValue(14)}px;
`

export const Category = styled.View`
   flex-direction: row;
   align-items: center; 
`
