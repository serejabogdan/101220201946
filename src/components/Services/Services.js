import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">Услуги</div>
      <div className="services__wrapper">
        <div className="services__statistics statistics">
          <div className="statistics__item">
            <div className="progress progress-one"></div>
            <div className="statistics__title">Ручное бронирование</div>
            <div className="statistics__quantity">11</div>
          </div>
          <div className="statistics__item">
            <div className="progress progress-two"></div>
            <div className="statistics__title">Пакетные туры</div>
            <div className="statistics__quantity">3</div>
          </div>
          <div className="statistics__item">
            <div className="progress progress-three"></div>
            <div className="statistics__title">Отели</div>
            <div className="statistics__quantity">1</div>
          </div>
        </div>
      </div>

      <div className="services__amount">
        <div className="services__amount-title">Всего</div>
        <div className="services__amount-total">15</div>
      </div>
    </div>
  );
};

export default Services;
