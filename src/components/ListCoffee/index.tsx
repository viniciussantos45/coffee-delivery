import { useContext } from 'react'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'
import { Grid } from '../Base'
import { CardCoffee } from '../CardCoffee'
import { Container, Title } from './styles'

export const ListCoffee = () => {
  const { coffees } = useContext(ShoppingCartContext)

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <Grid
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginTop: '20px',
        }}
      >
        {coffees.map((coffee) => (
          <CardCoffee
            key={coffee.id}
            id={coffee.id}
            name={coffee.coffee_name}
            additions={coffee.additions}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image_path}
          />
        ))}
      </Grid>
    </Container>
  )
}
