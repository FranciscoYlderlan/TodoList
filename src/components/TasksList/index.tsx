import { Container, List, InfoStates, Message } from './styles.ts'

import { State } from '../State'
import { Task } from '../Task'

export function TasksList() {
  return (
    <Container>
      <InfoStates>
        <State />
        <State />
      </InfoStates>
      <List
        data={participants}
        keyExtractor={(name) => name}
        renderItem={({ item }) => (
          <Task
            name={item}
            // handleRemove={() => }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Message>
            Você ainda não tem terafas cadastradas Crie tarefas e organize seus
            itens a fazer
          </Message>
        }
      />
    </Container>
  )
}
