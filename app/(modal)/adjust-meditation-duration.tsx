import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import { TimerContext, TimerContextType } from '@/context/TimerContext'

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext<TimerContextType>(TimerContext)

  const handlePress = (duration: number) => {
    setDuration(duration)
    router.back()
  }

  return (
    <View className="flex-1 relative">
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable onPress={router.back} className="absolute top-6 left-6 z-10">
          <AntDesign name="closecircle" size={28} color="white" />
        </Pressable>
        <View className="justify-center h-full">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust your meditation duration
          </Text>

          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="1 minutes"
              onPress={() => handlePress(1 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration
