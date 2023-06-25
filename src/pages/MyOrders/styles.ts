import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray[1]};
  margin-bottom: 10px;
`

export const Content = styled.div`
  border-radius: 5px 40px;
  background-color: ${({ theme }) => theme.colors.gray[6]};
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 2rem 3rem;

  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray[5]};
  }
`

export const ItemTitle = styled.h4`
  color: ${({ theme }) => theme.colors.gray[2]};
  margin-bottom: 5px;
`

export const ItemText = styled.p`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray[3]};
`

export const DeliveryTag = styled.div`
  background-color: #a8f5ad;
  border: 1px solid #2f855a;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
`

export const Label = styled.span`
  margin-left: 10px;
  font-size: 0.75rem;
  color: #2f855a;
  text-transform: uppercase;
`

export const ImgEmptyOrders = styled.img`
  width: 300px;
  object-fit: cover;
`

export const TextEmptyOrders = styled.h3`
  color: ${({ theme }) => theme.colors.purple[0]};
`
