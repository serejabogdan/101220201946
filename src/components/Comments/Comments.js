import React from 'react';
import './Comments.scss';

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__info">
        <div className="comments__filter">
          <div className="comments__title">Последние отзывы</div>
          <div className="comments__filter-all">Все отзывы</div>
        </div>
        <div className="comments__statistics">
          <div className="comments__likes">
            <div className="like-icon">
              <div className="like-icon-back"></div>
            </div>
            131
          </div>
          <div className="comments__amount">
            <div className="comments-icon">
              <div className="comments-icon-back"></div>
            </div>
            14
          </div>
        </div>
      </div>
      <div className="comments__last">
        <div className="comments__item">
          <div className="person-info">
            <div className="person-name">Самуил</div>
            <div className="comment-date">13 октября 2011</div>
          </div>
          <div className="comments__content">Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</div>
        </div>
        <div className="comments__item">
          <div className="person-info">
            <div className="person-name">Лилия Семёновна</div>
            <div className="comment-date">14 октября 2011</div>
          </div>
          <div className="comments__content">
            Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это
            и есть всемирно известный центр огранки алмазов и торговли бриллиантами?
          </div>
        </div>
        <div className="comments__item">
          <div className="person-info">
            <div className="person-name">Лилия Семёновна</div>
            <div className="comment-date">14 октября 2011</div>
          </div>
          <div className="comments__content">
            Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
