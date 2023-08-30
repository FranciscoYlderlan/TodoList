import { StatusBar } from 'expo-status-bar'
import { Container, BoxLogo, StateLabels } from './styles.ts'
import { Background } from '../../components/Background'

import Logo from '../../../assets/logo.svg'
import { Form } from '../../components/Form'
import { State } from '../../components/State'
import { ProgressBar } from '../../components/ProgressBar'
import { Task } from '../../components/Task'

export function Home() {
  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <Form />
      <StateLabels>
        <State label="Concluídas" value={5} />
        <State label="Criadas" value={10} />
      </StateLabels>
      <ProgressBar progress={50} />
      <Task description="Dançar macarena daquele jeitão" />
      <Background />
      <StatusBar style="light" translucent />
    </Container>
  )
}
