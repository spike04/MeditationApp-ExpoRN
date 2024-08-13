import React from 'react'
import AppGradient from '@/components/AppGradient'
import { Text, View, ScrollView } from 'react-native'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>

          <View className="mt-8">
            {AFFIRMATION_GALLERY.map((item, index) => (
              <GuidedAffirmationsGallery
                key={item.title}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

export default Affirmations
