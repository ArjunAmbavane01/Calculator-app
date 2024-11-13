import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {
  const [expression,setExpression] = useState("")
  const handleBtnClick = (buttonText)=>{
    if(buttonText==='C'){
      setExpression("");
      return;
    }
    if(buttonText==='='){
      setExpression(eval(expression));
      return;
    }
    setExpression(expression+buttonText);
  }
  return (
    <div className={styles.calculator}>
      <Display displayVal={expression} />
      <ButtonsContainer onBtnClick={handleBtnClick} />
    </div>
  )
}

export default App
