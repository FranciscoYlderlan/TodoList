import { StatusBar } from 'expo-status-bar'
import { Container, BoxLogo, StateLabels } from './styles.ts'
import { Background } from '../../components/Background'

import Logo from '../../../assets/logo.svg'
import { Form } from '../../components/Form'
import { State } from '../../components/State'
import { ProgressBar } from '../../components/ProgressBar'
import { TasksList } from '../../components/TasksList'

export function Home() {
  // : Array<TaskProps> ou : TaskProps[]
  const tasks = [
    { id: 1, description: 'Andar de skate e fazer um 360º', status: true },
    { id: 2, description: 'Dançar um forrozin com a morena', status: true },
    { id: 3, description: 'Comer um churrasco com a rapaziada', status: true },
    { id: 4, description: 'Fazer um sumpley de guitarra', status: true },
    { id: 5, description: 'Pegar uma febre de paixão', status: false },
    { id: 6, description: 'Dançar de rosto coladinho', status: true },
  ]

  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <Form />
      <StateLabels>
        <State label="Concluídas" value={5} />
        <State label="Criadas" value={6} />
      </StateLabels>
      <ProgressBar progress={90} />
      <TasksList tasks={tasks} />
      <Background />
      <StatusBar style="light" translucent />
    </Container>
  )
}
