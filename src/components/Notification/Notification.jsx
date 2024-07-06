import s from './Notification.module.css';

function Notification({ message }) {
  return (
    <div className={s.wrapper}>
      <p>{message}</p>
    </div>
  );
}

export default Notification;