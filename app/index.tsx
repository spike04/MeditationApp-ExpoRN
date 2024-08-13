import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View } from 'react-native'

import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

import beachImage from '@/assets/meditation-images/beach.webp'
import AppGradient from '@/components/AppGradient'

const App = () => {
  const router = useRouter()

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <View className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-xl mt-3">
                Simplifying Meditation for everyone.
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push('/nature-meditate')}
                title="Get Started"
              />
            </View>
          </View>
          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App