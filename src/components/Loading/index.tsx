import { Flex } from '../Base'
import { Spin } from './styles'

export function Loading() {
  return (
    <Flex
      style={{
        width: '100%',
        height: '50vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin />
    </Flex>
  )
}
