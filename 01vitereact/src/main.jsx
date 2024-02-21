import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1> Custom MyApp function!</h1>
    </div>
  )
}

/*const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children : 'click me to visit google'
}*/

const anotherElement = (<a href='https://google.com' target='_blank'>Visit google</a>)           // this is not a function it is a jsx expression  and in javascript it can be converted to const anotherElement = React.createElement('a', { href: 'https://google.com', target: '_blank' }, 'Visit google');

const elementReact = React.createElement('a', { href: 'https://google.com', target: '_blank' }, 'Click Me To Visit google')

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />                                                   // App component (we can do that)
    // <MyApp />                                                   // MyApp function in this file (we can do that)\
    // MyApp()                                                       // works fine calling MyApp() directly
    //ReactElement                                  // can't use as we have build this custom ReactElemet for our customRender function So it will not work here as render() is expecting things that have been defined in it
    //anotherElement                                                // works perfectly fine
    elementReact
  
)
