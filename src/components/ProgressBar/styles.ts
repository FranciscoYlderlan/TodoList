import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 18px;
  border-radius: 12px;

  background-color: #41427d;
`

export const InternalBar = styled(Animated.View)`
  height: 18px;
  border-radius: 12px;
  background-color: #4ea8de;
`
