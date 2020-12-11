import React from 'react';
import './Comments.scss';

const Comments = (props) => {
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
        {props.state.map(({personName, date, content}, index) => (
          <div key={personName + index} className="comments__item comment">
            <div className="comment__person-info">
              <div className="comment__person-name">{personName}</div>
              <div className="comment__date">{date}</div>
            </div>
            <div className="comment__content">{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
