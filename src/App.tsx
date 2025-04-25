import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
      <ToastContainer position="bottom-right" />
    </Provider>
  )
}

export default App
