import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'
import { toast } from 'react-toastify'

type CarrinhoState = {
  itens: Game[]
  nome: string
}

const initialState: CarrinhoState = {
  itens: [],
  nome: ''
}

const carrinhoSlice = createSlice({
  name: 'carrinho', // Corrigido de 'nome' para 'name'
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        toast.warning('Item já adicionado ao carrinho')
      } else {
        state.itens.push(jogo)
        state.nome = jogo.titulo
        toast.success('Item adicionado ao carrinho!')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
      toast.success('Item removido do carrinho!')
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
