import { StatusBar } from 'expo-status-bar'
import { Container, BoxLogo, StateLabels } from './styles.ts'
import { Background } from '../../components/Background'

import Logo from '../../../assets/logo.svg'
import { Form } from '../../components/Form'
import { State } from '../../components/State'
export function Home() {
  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <Form />
      <StateLabels>
        <State label="Concluídas" />
        <State label="Criadas" />
      </StateLabels>
      <Background />
      <StatusBar style="light" translucent />
    </Container>
  )
}
