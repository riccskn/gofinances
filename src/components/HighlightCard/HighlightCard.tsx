import {Container, Footer, FooterText, Header, HeaderIcon, HeaderText, Title, TitleText, TitleTextValue} from "./style";
import {Text} from "react-native";

interface Props {
    title: string,
    amount: string,
    lastTransaction: string
    type: 'up' | 'down' | 'total',
}

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export default function ({title, amount, lastTransaction, type}: Props) {
    return (
       <Container type={type}>
        <Header>
            <HeaderText type={type}>{title}</HeaderText>
            <HeaderIcon
                        type={type}
                        name={icons[type]}/>
        </Header>

        <Title>
            <TitleText type={type}>R$</TitleText>
            <TitleTextValue type={type}> {amount}</TitleTextValue>
        </Title>

        <Footer>
           <FooterText type={type}>Ultima entrada dia {lastTransaction}</FooterText>
        </Footer>
       </Container>
    )
}
