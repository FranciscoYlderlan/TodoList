import { Container, Button, Input } from './styles.ts'
import { AntDesign } from '@expo/vector-icons'

export function Form() {
  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <Button>
        <AntDesign name="pluscircleo" size={18} color="white" />
      </Button>
    </Container>
  )
}
