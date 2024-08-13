import { GalleryPreviewData } from '@/constants/models/AffirmationCategory'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

interface Props {
  title: string
  previews: GalleryPreviewData[]
}

const GuidedAffirmationsGallery = ({ title, previews }: Props) => {
  return (
    <View className="my-2">
      <View className="mb-4">
        <Text className="text-white text-xl font-bold">{title}</Text>
      </View>

      <View className="space-x-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={previews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="h-full w-full rounded-xl"
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  )
}

export default GuidedAffirmationsGallery
