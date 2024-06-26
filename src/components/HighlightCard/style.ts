import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {css} from "styled-components";
import theme from "../../global/styles/theme";

interface TypeProps {
    type: 'up' | 'down' | 'total',
}

export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    padding: 18px 23px 42px;
    margin-right: 13px;

    ${(props) => props.type == 'up' && css`
      background-color: ${({ theme}) => theme.colors.shape}
    `}

    ${(props) => props.type == 'down' && css`
      background-color: ${({ theme}) => theme.colors.shape}; 
    `}

    ${(props) => props.type == 'total' && css`
      background-color: ${({ theme}) => theme.colors.secondary}; 
    `}

`

export const Header = styled.View`
   flex-direction: row; 
   justify-content: space-between; 
   align-content: center; 
`

export const HeaderText = styled.Text<TypeProps>`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};  
    color: ${({ theme }) => theme.colors.title};

    ${(props) => props.type == 'total' && css`
      color: ${({ theme}) => theme.colors.shape}; 
    `}
`

export const HeaderIcon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.success};
    font-family: ${({ theme }) => theme.fonts.regular};
    
    ${(props) => props.type == 'up' && css`
      color: ${({ theme}) => theme.colors.success}; 
    `}

    ${(props) => props.type == 'down' && css`
      color: ${({ theme}) => theme.colors.attention}; 
    `}

    ${(props) => props.type == 'total' && css`
      color: ${({ theme}) => theme.colors.shape}; 
    `}
`

export const Title = styled.View`
 flex-direction: row;
 margin-top: ${RFValue(55)}px;   
    
`

export const TitleText = styled.Text<TypeProps>`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};

    ${(props) => props.type == 'total' && css`
      color: ${({ theme}) => theme.colors.shape}; 
    `}
`

export const TitleTextValue = styled.Text<TypeProps>`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};

    ${(props) => props.type == 'total' && css`
      color: ${({ theme}) => theme.colors.shape}; 
    `}
`

export const Footer = styled.View`
  flex-direction: row;
`

export const FooterText = styled.Text<TypeProps>`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};

    ${(props) => props.type == 'total' && css`
      color: ${({ theme}) => theme.colors.shape}; 
    `}
`
