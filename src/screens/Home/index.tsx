import { StatusBar } from 'expo-status-bar'

import { Container, BoxLogo, StateLabels } from './styles.ts'

import { Background } from '../../components/Background'
import { ProgressBar } from '../../components/ProgressBar'

import Logo from '../../../assets/logo.svg'

import { Form } from '../../components/Form'
import { State } from '../../components/State'
import { TasksList } from '../../components/TasksList'
import { TaskProps } from '../../components/Task'

import { useState } from 'react'
import { Alert } from 'react-native'
export function Home() {
  // : Array<TaskProps> ou : TaskProps[]
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleAddTasks(newTask: TaskProps) {
    const taskExists = tasks.some(
      (task) => task.description === newTask.description,
    )

    if (taskExists) {
      Alert.alert(
        'Tarefa já cadastrada.',
        'Já existe uma tarefa com essa descrição.',
      )
    } else {
      setTasks([...tasks, newTask])
    }
  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remover', 'Deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleChangeStatusTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status }
        }
        return task
      }),
    )
  }

  function calculatePercentageOfCompletedTasks(tasks: TaskProps[]): number {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.status === true).length

    if (totalTasks === 0) {
      return 0
    }

    return (completedTasks / totalTasks) * 100
  }
  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <Form OnAddTasks={handleAddTasks} />
      <StateLabels>
        <State
          label="Concluídas"
          value={tasks.filter((task) => task.status === true).length}
        />
        <State label="Criadas" value={tasks.length} />
      </StateLabels>
      <ProgressBar progress={calculatePercentageOfCompletedTasks(tasks)} />

      <TasksList
        tasks={tasks}
        handleRemove={handleRemoveTask}
        handleChange={handleChangeStatusTask}
      />
      <Background />
      <StatusBar style="light" translucent />
    </Container>
  )
}
