import styled from 'styled-components'

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

export const ItemCoffeeName = styled.p`
  font-size: 1.1rem;
`

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
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow[0]};
  }
`
