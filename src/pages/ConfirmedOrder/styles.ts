import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.yellow[0]};
  margin-bottom: 10px;
`

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.gray[3]};
  margin-bottom: 20px;
`
export const GradientBorderBox = styled.div`
  width: 50%;
  padding: 2.5rem;
  margin-top: 20px;
  position: relative;
  background: white;
  border-radius: 8px 40px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(60deg, #dbac2c, #c47f17, #8047f8, #4b2995);
    border-radius: 9.5px 41.5px; /* Same as container border-radius */
    background-clip: padding-box; /* Don't fill beyond padding */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    margin: -1.5px; /* Negative margin for gradient 'border' */
    padding: 1.5px; /* padding to compensate for negative margin */
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const ItemText = styled.p`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const ItemTextBold = styled.b``

export const Illustration = styled.img``
