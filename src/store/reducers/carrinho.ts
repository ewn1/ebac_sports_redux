import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type CarrinhoState = {
  items: Produto[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (state.items.find((p) => p.id === produto.id)) {
        alert('Este produto já foi adicionado ao carrinho')
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
