import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { favoritar } from '../store/reducers/favoritos'
import { adicionarAoCarrinho } from '../store/reducers/carrinho'
import { useGetProdutosQuery } from '../services/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const itensFavoritos = useSelector(
    (state: RootState) => state.favoritos.items
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando produtos...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={(produto: ProdutoType) => dispatch(favoritar(produto))}
            aoComprar={(produto: ProdutoType) =>
              dispatch(adicionarAoCarrinho(produto))
            }
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
