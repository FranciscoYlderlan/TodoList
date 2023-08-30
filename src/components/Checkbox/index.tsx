import { TouchableOpacityProps } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { ZoomIn, ZoomOut } from 'react-native-reanimated'

import { Container, Check, Uncheck, Description } from './styles'

interface CheckboxProps extends TouchableOpacityProps {
  description: string
  checked?: boolean
}
export function Checkbox({
  description,
  checked = false,
  ...rest
}: CheckboxProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {checked ? (
        <Check entering={ZoomIn} exiting={ZoomOut}>
          <Feather name="check" size={20} color="#f2f2f2" />
        </Check>
      ) : (
        <Uncheck />
      )}

      <Description checked={checked}>{description}</Description>
    </Container>
  )
}
