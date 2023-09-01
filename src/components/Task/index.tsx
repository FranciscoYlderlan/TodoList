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
  handleRemove: (id: number) => void
  handleChange: (id: number) => void
}

export function Task({ task, handleRemove, handleChange }: TaskComponentProps) {
  return (
    <Container key={task.id}>
      <Checkbox
        description={task.description}
        checked={task.status}
        onPress={() => handleChange(task.id)}
      />
      <Button activeOpacity={0.7} onPress={() => handleRemove(task.id)}>
        <Trash height={42} width={42} />
      </Button>
    </Container>
  )
}
