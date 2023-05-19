import styled from 'styled-components'
import { Flex } from '../Base'

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 70px 0px;
  overflow: hidden;
`

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  background: url('/public/background.png') no-repeat center;
  background-size: 90% 100%;
  filter: blur(60px);
`

export const Content = styled.div`
  position: relative;
`

export const Title = styled.h1`
  position: relative;
`

export const Subtitle = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.gray[2]};
  padding-block: 20px;
  font-size: 1.2rem;
`

export const CoffeeImage = styled.img`
  position: relative;
  width: 400px;
`

export const RoundedIcon = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`

export const RoundedIconYellow = styled(RoundedIcon)`
  background-color: ${({ theme }) => theme.colors.yellow[1]};
`
export const RoundedIconDarkYellow = styled(RoundedIcon)`
  background-color: ${({ theme }) => theme.colors.yellow[0]};
`
export const RoundedIconGray = styled(RoundedIcon)`
  background-color: ${({ theme }) => theme.colors.gray[2]};
`
export const RoundedIconPurple = styled(RoundedIcon)`
  background-color: ${({ theme }) => theme.colors.purple[1]};
`

export const TextItem = styled.p`
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray[2]};
`
