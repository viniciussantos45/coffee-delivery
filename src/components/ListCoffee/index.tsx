import { Grid } from '../Base'
import { CardCoffee } from '../CardCoffee'
import { Container, Title } from './styles'

export const ListCoffee = () => {
  const coffees = [
    {
      id: '1',
      additions: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos ',
      price: 9.9,
      image: '/public/coffee-expresso.png',
    },
    {
      id: '2',
      additions: ['TRADICIONAL'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: '/public/coffee-american.png',
    },
    {
      id: '3',
      additions: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: '/public/coffee-expresso-cremoso.png',
    },
    {
      id: '4',
      additions: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: '/public/coffee-gelado.png',
    },
    {
      id: '5',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: '/public/coffee-milk.png',
    },
    {
      id: '6',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: '/public/coffee-late.png',
    },
    {
      id: '7',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: '/public/coffee-capuccino.png',
    },
    {
      id: '8',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: '/public/coffee-machiato.png',
    },
    {
      id: '9',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: '/public/coffee-mocaccino.png',
    },
    {
      id: '10',
      additions: ['ESPECIAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: '/public/coffee-chocolate-quente.png',
    },
    {
      id: '11',
      additions: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: '/public/coffee-cuban.png',
    },
    {
      id: '12',
      additions: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: '/public/coffee-havaiano.png',
    },
    {
      id: '13',
      additions: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: '/public/coffee-arabe.png',
    },
    {
      id: '14',
      additions: ['ESPECIAL', 'ALCOÓLICO'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: '/public/coffee-irlandes.png',
    },
  ]

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
            name={coffee.name}
            additions={coffee.additions}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image}
          />
        ))}
      </Grid>
    </Container>
  )
}
