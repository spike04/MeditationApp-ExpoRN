import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA } from '@/constants/meditation-data'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const NatureMeditate = () => {
  const bottomTabBarHeight = useBottomTabBarHeight()
  const router = useRouter()

  return (
    <View className="flex-1">
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Steven
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today.
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            contentContainerStyle={{ paddingBottom: bottomTabBarHeight }}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-2 rounded-2xl overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 justify-center"
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  )
}

export default NatureMeditate
