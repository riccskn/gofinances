import React from "react";
import {Container} from "./styles";
import {TouchableOpacityProps} from "react-native";
import {Title} from "../Button/styles";

interface Props extends TouchableOpacityProps{
    title: string
    type: 'up' | 'down';
}

export function TransactionTypeButton({
             title,
             ...rest
                                      }: Props) {
    return (
        <Container {}>
           <Icon/>
           <Title>{title}</Title>
        </Container>
    )
}
