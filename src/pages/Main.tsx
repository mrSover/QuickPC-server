import { FC } from 'react'
import "../styles/Main.scss"
import 'keen-slider/keen-slider.min.css'



const Main: FC = ({ }) => {


  return (
    <>
      <div className='firstpage'>
        <div className='firstpage__item first'></div>
        <div className='firstpage__item'></div>
        <div className='firstpage__item'></div>
        <div className='firstpage__item last'></div>
      </div>
    </>
  )
}
export default Main;