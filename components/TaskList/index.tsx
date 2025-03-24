import { Task } from '@/types/task'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRef } from 'react'
import { Animated, FlatList } from 'react-native'
import {
  Directions,
  FlingGestureHandler,
  FlingGestureHandlerEventPayload,
  HandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler'
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
  const swipeValues = useRef(new Map<number, Animated.Value>()).current

  const getSwipeValue = (id: number) => {
    if (!swipeValues.has(id)) {
      swipeValues.set(id, new Animated.Value(0))
    }
    return swipeValues.get(id)!
  }

  const handleFling = (
    event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>,
    id: number,
  ) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Animated.timing(getSwipeValue(id), {
        toValue: 500,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onTaskDelete(id)
        swipeValues.delete(id)
      })
    }
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <FlingGestureHandler
          direction={Directions.RIGHT}
          onHandlerStateChange={(event) => handleFling(event, item.id)}
        >
          <Animated.View
            className={`mb-2 bg-white p-3`}
            style={{
              elevation: 3,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 1.41,
              transform: [{ translateX: getSwipeValue(item.id) }],
            }}
          >
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
          </Animated.View>
        </FlingGestureHandler>
      )}
    />
  )
}
