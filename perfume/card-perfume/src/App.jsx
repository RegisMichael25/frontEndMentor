import Perfume from './imgPerfume'
import Conteudo from './conteudo'
import './App.css'

function App() {

  return (
    <>
      <main className='my-4 mx-auto'>
        <div className='w-11/12 rounded-lg mx-auto'>

          <Perfume />
          <div className='bg-[White] rounded-b-xl'>
            <Conteudo />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
