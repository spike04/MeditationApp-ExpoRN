import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'

const AffirmationsPractice = () => {
  const router = useRouter()
  const { itemId } = useLocalSearchParams()

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
  const [sentences, setSentences] = useState<string[]>([])

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data

      const affirmationToStart = affirmationsData.find(
        (item) => item.id === Number(itemId),
      )

      if (affirmationToStart) {
        const affirmationsArray = affirmationToStart.text.split('.')

        // Remove last element if it is empty
        if (affirmationsArray[affirmationsArray.length - 1] === '') {
          affirmationsArray.pop()
        }
        setAffirmation(affirmationToStart)
        setSentences(affirmationsArray)

        return
      }
    }
  }, [])

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
          <Pressable onPress={router.back} className="absolute left-6 z-10">
            <AntDesign name="leftcircle" size={28} color="white" />
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false} className="mt-20">
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, index) => (
                  <Text
                    className="text-white text-3xl font-bold text-center mb-8"
                    key={index}
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationsPractice