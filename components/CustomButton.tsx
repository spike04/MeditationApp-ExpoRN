import { View, Text, TouchableOpacity } from 'react-native'

interface Props {
  onPress: () => void
  title: string
  textStyles?: string
  containerStyles?: string
}

const CustomButton = ({
  onPress,
  title,
  textStyles = '',
  containerStyles = '',
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} transition-colors`}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
