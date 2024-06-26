import {Category, Container, DateCategory, Footer, Icon, TitleAmount, TitleCategory, TitleTransaction} from "./style";
import React from "react";

interface Props {
    title: string,
    amount: string,
    date: string,
    type: 'entry' | 'leave' | 'total',
    category: 'sell' | 'food' | 'self_care' | 'study'
}

const icons = {
    food: 'food-sign',
    sell: 'dollar-sign',
    self_care: 'barbell-outline',
    study: 'book',
}

const category_name = {
    food: 'Alimentação',
    sell: 'Venda',
    self_care: 'Cuidado pessoal',
    study: 'Estudos',
}

export default function TransactionCard({title, amount, date, type, category}: Props) {

    return (
        <Container>
           <TitleTransaction>{title}</TitleTransaction>
            <TitleAmount type={type}>{amount}</TitleAmount>
            <Footer>
             <Category>
              <Icon name={icons[category]}/>
              <TitleCategory>{category_name[category]}</TitleCategory>
             </Category>
             <DateCategory>{date}</DateCategory>
            </Footer>
        </Container>
    )
}
