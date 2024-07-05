import s from './Feedback.module.css';

function Feedback({votingList}) {
    return (
       <div className={s.wraper}>
          <ul className={s.list}>
            <li className={s.listItem}>Good: {votingList.good}</li>
            <li className={s.listItem}>Neutral: {votingList.neutral}</li>
            <li className={s.listItem}>Bad: {votingList.bad}</li>
            <li className={s.listItem}>Total:</li>
            <li className={s.listItem}>Positiv:</li>
          </ul>
        </div> 
    );
};

export default Feedback