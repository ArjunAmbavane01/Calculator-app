import styles from './ButtonsContainer.module.css'

const ButtonsContainer=({onBtnClick})=>{

    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

    return <>
    <div className={styles.buttonsContainer}>

        {buttonNames.map((buttonName,index)=>{
            return  <button onClick={()=>onBtnClick(buttonName)} key={index} className={styles.button}>{buttonName}</button>
   
        })}
      </div>
    </>
}

export default ButtonsContainer;