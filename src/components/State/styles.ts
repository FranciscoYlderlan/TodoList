import styled from 'styled-components/native'
interface labelProps {
  label: string
  theme?: string
}
export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Label = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  color: ${({ label }: labelProps) =>
    label === 'Criadas' ? '#8284FA' : '#4EA8DE'};
`

export const Circle = styled.View`
  border-radius: 999px;
  background-color: #333333;

  padding: 0 8px;
  justify-content: center;
  align-items: center;
`
export const Value = styled.Text`
  color: white;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;

  text-align: center;
  width: fit-content;
  height: fit-content;
`
