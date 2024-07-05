import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import s from '../App/App.module.css';
import { useState } from 'react';

function App() {
  const [votingList, setVotingList] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  
  return (
    <div className={s.wraper}>
      <Description></Description>
      <Options setVotingList={setVotingList}></Options>
      <Feedback votingList={votingList}></Feedback>
    </div>
  )
}

export default App
