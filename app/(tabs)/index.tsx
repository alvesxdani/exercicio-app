import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-purple-500 font-notosans">Página inicial</Text>
    </SafeAreaView>
  )
}
