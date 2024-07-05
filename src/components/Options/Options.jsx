import s from './Options.module.css';

function Options({setVotingList}) {
    const handleVote = option => {
        setVotingList(prev => ({ ...prev, [option]: prev[option] + 1 }));
    };
    return (
       <div className={s.wraper}>
          <button onClick={() => handleVote('good')}>Good</button>
          <button onClick={() => handleVote('neutral')}>Neutral</button>
          <button onClick={() => handleVote('bad')}>Bad</button>
          <button>Reset</button>
        </div> 
    );
};

export default Options