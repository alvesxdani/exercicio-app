import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css'

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode="light">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}
