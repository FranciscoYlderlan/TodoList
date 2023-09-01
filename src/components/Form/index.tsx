import { Container, Button, Input } from './styles.ts'
import { AntDesign } from '@expo/vector-icons'
import { generateRandomId } from '../../utils/math.ts'
import { TaskProps } from '../Task/'

import { useState } from 'react'

interface FormProps {
  OnAddTasks: (newTask: TaskProps) => void
}

export function Form({ OnAddTasks }: FormProps) {
  const [newDescriptionTask, setNewDescriptionTask] = useState<string>('')

  function handleNewTask() {
    const id: number = generateRandomId()
    const formattedTask: TaskProps = {
      id,
      description: newDescriptionTask,
      status: false,
    }

    OnAddTasks(formattedTask)
  }

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={(text: string) => setNewDescriptionTask(text)}
      />
      <Button activeOpacity={0.7} onPress={() => handleNewTask()}>
        <AntDesign name="pluscircleo" size={18} color="white" />
      </Button>
    </Container>
  )
}
