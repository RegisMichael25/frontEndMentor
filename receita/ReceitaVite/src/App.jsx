import './App.css'
import Header from './Header'
import PreparationTime from './PreparationTime'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import Nutritions from './Nutritions'

function App() {
  return (
    <>
      <main className='w-1/2 bg-whiteTail p-5 rounded-xl'>
        <Header />
        <PreparationTime />
        <Ingredients />
        <hr />
        <Instructions />
        <hr />
        <Nutritions />
      </main>
    </>
  )
}
export default App
