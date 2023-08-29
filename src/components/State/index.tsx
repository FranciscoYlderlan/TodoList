import { Container, Value, Label } from './styles.ts'

interface StateProps {
  label: string
  value?: number
}

export function State({ value = 0, label }: StateProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}
