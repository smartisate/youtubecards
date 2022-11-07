import Link from 'next/link';

const User = () => {
  return (
    <div className="ycUserOptionsContainer">
      <a href=''><div className="bi bi-camera-video ydUserOptionsIcon"></div></a>
      <a id="userOptionNotifications" href=''><div className="bi bi-bell p-10 ydUserOptionsIcon" alt="Notificaciones"></div></a>
      <a href=''><div className="bi bi-3-circle-fill p-10 ydUserOptionsIcon"></div></a>
    </div>
  );
}

export default User;