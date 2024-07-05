import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import s from '../App/App.module.css';

function App() {
  
  return (
    <div className={s.wraper}>
      <Description></Description>
      <Options></Options>
      <Feedback></Feedback>
    </div>
  )
}

export default App
