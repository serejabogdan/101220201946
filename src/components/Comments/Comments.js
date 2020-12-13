import React from 'react';
import './Comments.scss';

import likeIcon from '../../assets/svg/like.svg';
import commentIcon from '../../assets/svg/comment.svg';

const Comments = (props) => {
  const {state} = props;
  return (
    <div className="comments">
      <div className="comments__info">
        <div className="comments__filter">
          <div className="comments__title">Последние отзывы</div>
          <div className="comments__filter-all">Все отзывы</div>
        </div>
        <div className="comments__statistics">
          <div className="comments__likes">
            <img className="like-icon icon" src={likeIcon} alt="like icon" />
            131
          </div>
          <div className="comments__amount">
            <img className="comments-icon icon" src={commentIcon} alt="comments icon" />
            {state.length}
          </div>
        </div>
      </div>
      <div className="comments__last">
        {state.map(({personName, date, content}, index) => (
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
