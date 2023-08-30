import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

interface DescriptionProps {
  checked: boolean
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`
export const Check = styled(Animated.View)`
  background-color: #5e60ce;
  height: 24px;
  width: 24px;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`

export const Uncheck = styled.View`
  height: 24px;
  width: 24px;
  border: 2px solid #4ea8de;
  border-radius: 999px;
`

export const Description = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  ${({ checked }: DescriptionProps) =>
    checked
      ? `color:#808080; text-decoration: line-through; font-style:italic;`
      : `color:#F2F2F2;`};
`
