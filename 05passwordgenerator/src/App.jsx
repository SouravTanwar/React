import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(()=>{                                      // for optimization to memorize or store in cache
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_-=+"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length,numberAllowed,charAllowed, setpassword])

  useEffect(()=>{                                                                   // called when page is loaded or if any manipulations with the dependencies
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()                                                //current? for optional select means the effect of higlighting over password when copying
    //passwordRef.current?.setSelectionRange(0,4)                               // to select only 4 char from start
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white my-3'> Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' 
            value={password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='password' 
            readOnly 
            ref={passwordRef}/>

          <button 
            className='outline-none bg-blue-600 px-3 py-0.5 shrink-0' 
            onClick={copyPasswordToClipboard}>
              Copy
            </button>
        </div>

        <div className='flex justify-center text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range' 
              min={6} 
              max={100} 
              value={length} 
              className='cursor-pointer' 
              onChange={(e)=>{setlength(e.target.value)}}/>

            <label>length:{length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type ='checkbox' 
              defaultChecked={numberAllowed} 
              id='numberinput' 
              onChange={()=>{setNumberAllowed((prev)=>!prev)}} />

              <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type ='checkbox' 
              defaultChecked={charAllowed} 
              id='numberinput' 
              onChange={()=>{setCharAllowed((prev)=>!prev)}} />

            <label>Special Char</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
