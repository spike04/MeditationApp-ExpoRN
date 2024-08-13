import Colors from '@/constants/Colors'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: 'Affirmations',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
