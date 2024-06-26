import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {
    getBottomSpace,
    getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    
    
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)};
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    padding: 0 20px;
    
`

export const UserWrapper = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.View`
    flex-direction: row;
    margin-left: 24px;
`

export const User = styled.View`
    flex-direction: column;
    margin-left: 17px;
`

export const Photo = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 10px;
    background-color: antiquewhite;
    
`

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

`

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

`

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 24px;
`

export const HighlightsCard = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
    
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`

export const TransactionsTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_dark};
    font-size: ${RFValue(18)}px;
`



