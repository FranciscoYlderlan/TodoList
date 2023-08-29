import { Container, Button, Input } from './styles.ts'
import { AntDesign } from '@expo/vector-icons'
export function Form() {
  return (
    <Container>
      <Input placeholder="Adicione uma nova tarefa" />
      <Button>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </Button>
    </Container>
  )
}
