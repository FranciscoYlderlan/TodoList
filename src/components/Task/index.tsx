import { Container, Button, Description } from './styles.ts'

interface TaskProps {
  description: string
}

export function Task({ description }: TaskProps) {
  return (
    <Container>
      <Description>{description}</Description>
      <Button />
    </Container>
  )
}
