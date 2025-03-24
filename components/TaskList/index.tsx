import { Task } from '@/types/task'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, ToastAndroid } from 'react-native'
import { Box } from '../ui/box'
import { Button } from '../ui/button'
import { Checkbox, CheckboxIndicator, CheckboxLabel } from '../ui/checkbox'

export default function TaskList({
  data,
  onTaskPressed,
  onTaskDelete,
}: {
  data: Task
  onTaskPressed: (id: number) => void
  onTaskDelete: (id: number) => void
}) {
  const checkIcon = <Ionicons name="checkmark" />

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box className="flex flex-row justify-between mb-2">
          <Checkbox
            size="lg"
            isChecked={item.completed}
            value="true"
            onChange={() => onTaskPressed(item.id)}
          >
            <CheckboxIndicator>
              {item.completed && (
                <Ionicons name="checkmark" className="!text-white" />
              )}
            </CheckboxIndicator>
            <CheckboxLabel>{item.text}</CheckboxLabel>
          </Checkbox>

          <Button
            variant="link"
            size="xl"
            onPress={() => onTaskDelete(item.id)}
            onLongPress={() =>
              ToastAndroid.show('Deletar tarefa', ToastAndroid.SHORT)
            }
          >
            <Ionicons
              name="trash-outline"
              className="!text-xl mr-4 !color-error-500"
            />
          </Button>
        </Box>
      )}
    />
  )
}
