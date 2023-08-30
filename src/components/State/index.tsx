import { Container, Value, Circle, Label } from './styles.ts'

interface StateProps {
  label: string
  value?: number
}

export function State({ value = 0, label }: StateProps) {
  return (
    <Container>
      <Label label={label}>{label}</Label>
      <Circle>
        <Value>{value}</Value>
      </Circle>
    </Container>
  )
}
