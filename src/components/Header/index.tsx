import { useSelector, UseSelector } from 'react-redux'
import { RootState } from '../../store'

import * as S from './styles'
import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.items
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
