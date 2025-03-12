import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#c774ff',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="compass" color={color} />,
        }}
      />
    </Tabs>
  )
}
