import {
  Container,
  List,
  EmptyContainer,
  MessageBold,
  MessageLight,
} from './styles.ts'

import { Task, TaskProps } from '../Task'

import Clipboard from '../../../assets/clipboard.svg'

interface TaskListProps {
  tasks?: TaskProps[]
  handleRemove: (id: number) => void
  handleChange: (id: number) => void
}
export function TasksList({
  tasks,
  handleRemove,
  handleChange,
}: TaskListProps) {
  return (
    <Container>
      <List
        data={tasks}
        keyExtractor={(item: TaskProps) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item}
            handleRemove={handleRemove}
            handleChange={handleChange}
          />
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
