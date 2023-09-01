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
  onRemove: (id: number) => void
}
export function TasksList({ tasks, onRemove }: TaskListProps) {
  return (
    <Container>
      <List
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task task={item} onRemove={onRemove} />}
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
