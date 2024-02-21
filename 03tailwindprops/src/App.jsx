
import Card from './component/Card'
import './App.css'

function App() {

  let myObj = {
    username : 'Sourav',
    age : 24
  }

  //let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card user='sourav' btnText='Visit me' someObj={myObj} />                      {/*we need to wrap obs, array in {} as variables to pass as props eg we can also use someArr={newArr} */}
      <Card user='srv' />
    </>
  )
}

export default App
