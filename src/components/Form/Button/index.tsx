import {Container, Title} from "./styles";
import {TouchableOpacityProps} from "react-native-gesture-handler";

interface Props extends TouchableOpacityProps {
    title: string
}

export function Button({title}: Props) {
  return (
      <Container>
          <Title>
              {title}
          </Title>
      </Container>
  )
}
