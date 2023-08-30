import {
  Container,
  List,
  EmptyContainer,
  MessageBold,
  MessageLight,
} from './styles.ts'

import { Task } from '../Task'

import Clipboard from '../../../assets/clipboard.svg'

interface TaskProps {
  description: string
  status: boolean
}

interface TaskListProps {
  tasks?: TaskProps[]
}
export function TasksList({ tasks }: TaskListProps) {
  return (
    <Container>
      <List
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task description={item.description} completed={item.status} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyContainer>
            <Clipboard />
            <MessageBold>Você ainda não tem terafas cadastradas</MessageBold>
            <MessageLight>
              Crie tarefas e organize seus itens a fazer
            </MessageLight>
          </EmptyContainer>
        }
      />
    </Container>
  )
}
