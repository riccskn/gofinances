import {TextInputProps} from "react-native-paper";
import {Container} from "./styles";

type Props = TextInputProps

export function Input({...rest}: Props) {
    return <Container {...rest} />
}
