import styled from 'styled-components'

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

export const TextItem = styled.p`
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray[2]};
`
