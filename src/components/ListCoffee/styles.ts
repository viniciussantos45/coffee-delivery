import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 6rem;
  background-color: ${({ theme }) => theme.colors.gray[7]};
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray[1]};
`
