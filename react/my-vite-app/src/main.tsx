import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

const objArr = [
  {
    id: 1,
    color: 'red',
    size: 40
  },
  {
    id: 2,
    color: 'blue',
    size: 60
  },
  {
    id: 3,
    color: 'green',
    size: 80
},
]

const text = 'Lorem ipsum';
const lorem = text.split('')

const ifEven = (text: string, num: number) => {
  if (num % 2 === 0) {
    return text.toUpperCase()
  } else {
    return text.toLowerCase()
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      {objArr.map(el => <div key={el.id} style={{ backgroundColor: el.color, width: el.size, height: el.size }}>{el.color}</div>)}
      <ul>
        {lorem.map((letter, index) => <li key={index}>{ ifEven(letter,index) }</li>)}
      </ul>
    </div>
  </React.StrictMode>,
)
