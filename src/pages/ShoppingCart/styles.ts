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

export const SelectedCoffees = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[6]};
  border-radius: 5px 40px;
  margin-top: 10px;
  padding: 2.5rem;
`

export const ItemCoffee = styled.div`
  width: 100%;
  padding: 20px 5px;
  display: flex;
  gap: 20px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray[5]};
`

export const ItemCoffeeImage = styled.img`
  width: 70px;
`

export const ItemCoffeeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ItemCoffeeNameAndAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemCoffeeAction = styled.div`
  display: flex;
  gap: 10px;
`

export const ItemCoffeeName = styled.p``

export const ItemCoffeePrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const ItemCoffeeRemoveButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme }) => theme.colors.gray[5]};
  padding: 5px 10px;
  border-radius: 5px;
  gap: 5px;
`

export const ItemCoffeeRemoveText = styled.p`
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const ResumeOrder = styled.div`
  width: 100%;
  padding: 20px 0px;
`
export const ResumeOrderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.gray[2]};
`

export const ResumeOrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.gray[1]};

  font-size: 1.3rem;
  font-weight: bold;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 15px 0px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.yellow[1]};
  color: #fff;
  /* font-weight: bold; */
  text-transform: uppercase;
`
