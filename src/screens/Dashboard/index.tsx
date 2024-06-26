import {
    Container,
    Header,
    HighlightsCard,
    Icon,
    Photo, Transactions, TransactionsTitle,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper
} from "./styles";
import HighlightCard from "../../components/HighlightCard/HighlightCard";
import {ScrollView} from "react-native";
import React from "react";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export function Dashboard () {
    return (
        <Container>
         <Header>
          <UserWrapper>
             <UserInfo>
                 <Photo source={{uri: 'https://avatars.githubusercontent.com/u/48400561?v=4'}}/>
                 <User>
                  <UserGreeting>Olá</UserGreeting>
                  <UserName>Henricke</UserName>
                 </User>
             </UserInfo>
              <Icon name={"power"}></Icon>
          </UserWrapper>
         </Header>

        <HighlightsCard
        >
            <HighlightCard title={"Entradas"} amount={"17.400,00"} lastTransaction={"24 de abril"} type={'up'}/>
            <HighlightCard  title={"Saidas"} amount={"1.295,00"} lastTransaction={"03 de abril"} type={'down'}/>
            <HighlightCard title={"Total"} amount={"16.141,00"} lastTransaction={"25 de Maio"} type={'total'}/>
        </HighlightsCard>

        <Transactions>
          <TransactionsTitle>Listagem</TransactionsTitle>
            <ScrollView style={{marginTop: 10, marginBottom: 40}} showsVerticalScrollIndicator={false}>
                <TransactionCard amount={"R$ 1.300,00"} date={"17/05/2004"} title={"Aplicativo Ios"} type={'entry'} category={'sell'}/>
                <TransactionCard amount={"R$ 1.300,00"} date={"17/05/2004"} title={"Aplicativo Ios"} type={'leave'} category={'study'}/>
            </ScrollView>
        </Transactions>

        </Container>
    )
}

