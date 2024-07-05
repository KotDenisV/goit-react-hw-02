import s from './Feedback.module.css';

function Feedback() {
    return (
       <div className={s.wraper}>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
            <li>Total:</li>
            <li>Positiv:</li>
          </ul>
        </div> 
    );
};

export default Feedback