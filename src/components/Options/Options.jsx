import s from './Options.module.css';

function Options() {
    return (
       <div className={s.wraper}>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <button>Reset</button>
        </div> 
    );
};

export default Options