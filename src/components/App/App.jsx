import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import s from '../App/App.module.css';
import { useState, useEffect } from 'react';

function App() {
  // const [votingList, setVotingList] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // });
  const [votingList, setVotingList] = useState(() => {
    const savedVotingList = window.localStorage.getItem('votingList');
    return savedVotingList ? JSON.parse(savedVotingList) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('votingList', JSON.stringify(votingList));
  }, [votingList]);

  const updateFeedback = feedbackType => {
    setVotingList(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    const initialVotingList = { good: 0, neutral: 0, bad: 0 };
    setVotingList(initialVotingList);    
  };

  const totalFeedback = votingList.good + votingList.neutral + votingList.bad;
  const positiveFeedback = totalFeedback ? Math.round((votingList.good / totalFeedback) * 100) : 0;
  
  return (
    <div className={s.wraper}>
      <Description></Description>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}></Options>
      {totalFeedback > 0 ? (
      <Feedback votingList={votingList} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}></Feedback>
      ) : (
        <Notification message="No feedback yet"></Notification>
      )}
    </div>
  )
}

export default App
