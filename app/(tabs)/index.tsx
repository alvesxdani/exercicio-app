import { verifyInstallation } from 'nativewind'
import { SafeAreaView, View } from 'react-native'

export default function Home() {
  verifyInstallation()
  return (
    <SafeAreaView>
      <View className="w-10 h-10 bg-blue-500" />
    </SafeAreaView>
  )
}
