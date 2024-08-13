import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode
  colors: string[]
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-5 py-3">{children}</View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default AppGradient
