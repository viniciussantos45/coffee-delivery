import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  padding: 3rem 6rem;
  gap: 35px;
`

export const TitleSession = styled.h3`
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[6]};
  border-radius: 5px;
  margin-top: 10px;
  padding: 2.5rem;
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`
export const ContentHeaderTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[1]};
`

export const ContentHeaderDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray[3]};
`

export const IconYellow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.yellow[0]};
`

export const IconPurple = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.purple[1]};
`

export const FormContainer = styled.form``
