import { Container, Button } from './styles.ts'
import { Checkbox } from '../Checkbox'
import Trash from '../../../assets/trash.svg'
interface TaskProps {
  description: string
}

export function Task({ description }: TaskProps) {
  return (
    <Container>
      <Checkbox description={description} checked />
      <Button>
        <Trash height={40} width={40} />
      </Button>
    </Container>
  )
}
