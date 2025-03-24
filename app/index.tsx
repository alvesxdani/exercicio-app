import TaskList from '@/components/TaskList'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'
import { Toast, ToastDescription, useToast } from '@/components/ui/toast'
import { Task } from '@/types/task'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native'

export default function Home() {
  const [tasks, setTasks] = useState<Task>([
    { id: 1, text: 'Estudar Gluestack', completed: false },
    { id: 2, text: 'Estudar React Native', completed: true },
    { id: 3, text: 'Estudar TypeScript', completed: false },
  ])

  const [textTask, setTextTask] = useState<string>('')

  const toast = useToast()

  const toastError = () =>
    toast.show({
      placement: 'top',
      duration: 3000,
      render: () => (
        <Toast action="error" variant="solid" className="mt-4">
          <ToastDescription>
            Digite o texto da tarefa antes de enviar!
          </ToastDescription>
        </Toast>
      ),
    })

  const toastSuccess = () =>
    toast.show({
      placement: 'top',
      duration: 3000,
      render: () => (
        <Toast action="success" variant="solid" className="mt-4">
          <ToastDescription>Tarefa adicionada com sucesso!</ToastDescription>
        </Toast>
      ),
    })

  function handleAddTask() {
    if (textTask === '') toastError()

    if (textTask.length > 0) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: tasks.length + 1,
          text: textTask,
          completed: false,
        },
      ])
      setTextTask(() => '')
      toastSuccess()
    }
  }

  const handleSetTaskCompleted = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }, [])

  const handleDeleleTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }, [])

  return (
    <SafeAreaView className="grid gap-4 p-4">
      <Heading size="xl" bold className="text-center p-4">
        Minhas tarefas
      </Heading>

      <Box className="flex gap-4 flex-row">
        <Input variant="outline" size="lg" className="flex-1">
          <InputField
            value={textTask}
            placeholder="Digite uma tarefa aqui"
            onChangeText={setTextTask}
            onSubmitEditing={() => handleAddTask()}
          />
        </Input>

        <Button size="lg" className="items-center" onPress={handleAddTask}>
          <Ionicons
            name="add"
            className="!text-white !font-semibold"
            size={14}
          />
        </Button>
      </Box>

      <TaskList
        data={tasks}
        onTaskPressed={handleSetTaskCompleted}
        onTaskDelete={handleDeleleTask}
      />
    </SafeAreaView>
  )
}
