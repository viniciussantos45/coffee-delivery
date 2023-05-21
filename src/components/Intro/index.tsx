import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Box,
  Flex,
  Grid,
  RoundedIconDarkYellow,
  RoundedIconGray,
  RoundedIconPurple,
  RoundedIconYellow,
} from '../Base'
import {
  BackgroundImage,
  CoffeeImage,
  Container,
  Content,
  Subtitle,
  TextItem,
  Title,
} from './styles'

export const Intro = () => {
  return (
    <Container>
      <BackgroundImage />{' '}
      <Content>
        <Flex
          style={{
            justifyContent: 'space-between',
            paddingInline: '6rem',
          }}
        >
          <Box style={{ width: '600px' }}>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
            <Grid style={{ marginTop: '40px', gap: '10px' }}>
              <Flex style={{ alignItems: 'center' }}>
                <RoundedIconDarkYellow>
                  <ShoppingCart size={15} weight="fill" color="#fff" />
                </RoundedIconDarkYellow>
                <TextItem style={{ marginLeft: '10px' }}>
                  Compra simples e segura
                </TextItem>
              </Flex>
              <Flex style={{ alignItems: 'center' }}>
                <RoundedIconGray>
                  <Package size={15} weight="fill" color="#fff" />
                </RoundedIconGray>
                <TextItem style={{ marginLeft: '10px' }}>
                  Embalagem mantém o café intacto
                </TextItem>
              </Flex>
              <Flex style={{ alignItems: 'center' }}>
                <RoundedIconYellow>
                  <Timer size={15} weight="fill" color="#fff" />
                </RoundedIconYellow>
                <TextItem style={{ marginLeft: '10px' }}>
                  Entrega rápida e rastreada
                </TextItem>
              </Flex>
              <Flex style={{ alignItems: 'center' }}>
                <RoundedIconPurple>
                  <Coffee size={15} weight="fill" color="#fff" />
                </RoundedIconPurple>
                <TextItem style={{ marginLeft: '10px' }}>
                  O café chega fresquinho até você
                </TextItem>
              </Flex>
            </Grid>
          </Box>
          <Box>
            <CoffeeImage src="./img-coffe.png" />
          </Box>
        </Flex>
      </Content>
    </Container>
  )
}
