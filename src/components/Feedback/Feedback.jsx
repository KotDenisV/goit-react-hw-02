import s from './Feedback.module.css';

function Feedback({ votingList, totalFeedback, positiveFeedback }) {
    
    return (
       <div className={s.wraper}>
          <ul className={s.list}>
            <li className={s.listItem}>Good: {votingList.good}</li>
            <li className={s.listItem}>Neutral: {votingList.neutral}</li>
            <li className={s.listItem}>Bad: {votingList.bad}</li>
            <li className={s.listItem}>Total: {totalFeedback}</li>
            <li className={s.listItem}>Positiv: {positiveFeedback} % </li>
          </ul>
        </div> 
    );
};

export default Feedback