import { Task } from '@/types/task'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList } from 'react-native'
import { Checkbox, CheckboxIndicator, CheckboxLabel } from '../ui/checkbox'

export default function TaskList({
  data,
  onTaskPressed,
}: {
  data: Task
  onTaskPressed: (id: number) => void
}) {
  const checkIcon = <Ionicons name="checkmark" />

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Checkbox
          size="lg"
          isChecked={item.completed}
          value="true"
          onChange={() => onTaskPressed(item.id)}
          className="mb-2"
        >
          <CheckboxIndicator>
            {item.completed && (
              <Ionicons name="checkmark" className="!text-white" />
            )}
          </CheckboxIndicator>
          <CheckboxLabel>{item.text}</CheckboxLabel>
        </Checkbox>
      )}
    />
  )
}
