import { Container, Button } from './styles.ts'
import { Checkbox } from '../Checkbox'
import Trash from '../../../assets/trash.svg'

export interface TaskProps {
  id: number
  description: string
  status?: boolean
}

interface TaskComponentProps {
  task: TaskProps
  onRemove: (id: number) => void
}

export function Task({ task, onRemove }: TaskComponentProps) {
  return (
    <Container key={task.id}>
      <Checkbox description={task.description} checked={task.status} />
      <Button activeOpacity={0.7} onPress={() => onRemove(task.id)}>
        <Trash height={42} width={42} />
      </Button>
    </Container>
  )
}
