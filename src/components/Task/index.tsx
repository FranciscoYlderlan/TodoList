import { Container, Button } from './styles.ts'
import { Checkbox } from '../Checkbox'
import Trash from '../../../assets/trash.svg'
interface TaskProps {
  id: int
  description: string
  completed?: boolean
}

export function Task({ id, description, completed = false }: TaskProps) {
  return (
    <Container key={id}>
      <Checkbox description={description} checked={completed} />
      <Button>
        <Trash height={42} width={42} />
      </Button>
    </Container>
  )
}
