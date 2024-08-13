import React, { useContext, useEffect, useState } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'

import AppGradient from '@/components/AppGradient'
import CustomButton from '@/components/CustomButton'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { AntDesign } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { router, useLocalSearchParams } from 'expo-router'

import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/meditation-data'
import { TimerContext, TimerContextType } from '@/context/TimerContext'

const Meditate = () => {
  const { id } = useLocalSearchParams()

  const { duration: secondsRemaining, setDuration } =
    useContext<TimerContextType>(TimerContext)

  const [isMeditating, setIsMeditating] = useState(false)

  const [audioSound, setAudioSound] = useState<Audio.Sound>()
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout

    // Exit
    if (secondsRemaining === 0) {
      if (isPlayingAudio) {
        toggleMeditationSessionStatus(true)
      }
      setIsMeditating(false)

      return
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondsRemaining - 1)
      }, 1000)
    }

    return () => clearTimeout(timerId)
  }, [secondsRemaining, isMeditating])

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync()
    }
  }, [audioSound])

  useEffect(() => {
    return () => {
      setDuration(10)
    }
  }, [])

  const toggleMeditationSessionStatus = async (shouldStop = false) => {
    if (secondsRemaining === 0) {
      setDuration(10)
    }
    setIsMeditating((prev) => !prev)

    await toggleSound(shouldStop)
  }

  const toggleSound = async (shouldStop = false) => {
    const sound = audioSound ? audioSound : await initializeSound()

    const status = await sound.getStatusAsync()

    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync()
      setIsPlayingAudio(true)
    } else {
      if (shouldStop) {
        await sound.stopAsync()
      } else {
        await sound.pauseAsync()
      }
      setIsPlayingAudio(false)
    }
  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName])

    setAudioSound(sound)
    return sound
  }

  const handleAdjustMeditationDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus()

    router.push('/adjust-meditation-duration')
  }

  // Format the time left to ensure two digits are displayed
  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60),
  ).padStart(2, '0')
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0')

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
          <Pressable onPress={router.back} className="absolute left-6 z-10">
            <AntDesign name="leftcircle" size={28} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 items-center justify-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustMeditationDuration}
              containerStyles="bg-zinc-200"
            />
            <View className="mt-4">
              <CustomButton
                title={isMeditating ? 'Stop Meditation' : 'Start Meditation'}
                onPress={toggleMeditationSessionStatus}
                containerStyles={isMeditating ? 'bg-red-400' : 'bg-green-400'}
                textStyles={isMeditating ? 'text-white' : 'text-black'}
              />
            </View>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate
