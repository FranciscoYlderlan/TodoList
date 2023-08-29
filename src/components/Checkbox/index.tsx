import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import Animated, {
  FadeIn,
  FadeInDown,
  ZoomIn,
  ZoomInDown,
  ZoomOut,
} from 'react-native-reanimated'

interface CheckboxProps extends TouchableOpacityProps {
  title: string
  checked?: boolean
}
export function Checkbox({ title, checked = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <Animated.View
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
          entering={ZoomIn}
          exiting={ZoomOut}
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
      )}

      <Text className="text-white ml-3">{title}</Text>
    </TouchableOpacity>
  )
}
