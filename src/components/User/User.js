import React from 'react';
import './User.scss';
import photo from '../../assets/images/photo.png';

const User = () => {
  return (
    <div className="user">
      <div className="user__photo-wrapper">
        <img className="user__photo" src={photo} alt="" />
      </div>
      <div className="user__info">
        <h1 className="user__name">Вероника Ростова</h1>
        <div className="user__job-title">Менеджер по продажам</div>
        <div className="user__current-info">
          Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
        </div>
      </div>
    </div>
  );
};

export default User;
