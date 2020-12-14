import React, {useState} from 'react';
import './Comments.scss';

import likeIcon from '../../assets/svg/like.svg';
import commentIcon from '../../assets/svg/comment.svg';

const commentsRender = (comments, isLastComments) => {
  let newComments = comments;
  if (isLastComments) {
    newComments = newComments.filter(({filterDate}) => {
      const month = 2678400000;
      const differenceDate = Date.now() - filterDate;
      return differenceDate < month;
    });
  }
  return newComments.map(({personName, date, content}, index) => (
    <div key={personName + index} className="comments__item comment">
      <div className="comment__person-info">
        <div className="comment__person-name">{personName}</div>
        <div className="comment__date">{date}</div>
      </div>
      <div className="comment__content">{content}</div>
    </div>
  ));
};

const Comments = (props) => {
  const {comments} = props;
  const [state, setState] = useState({isLastComments: true, isLiked: false});
  const {isLastComments, isLiked} = state;

  const onLastComments = () => setState((state) => ({...state, isLastComments: false}));
  const onAllComments = () => setState((state) => ({...state, isLastComments: true}));

  const onChangeLike = () => {
    setState((state) => ({...state, isLiked: !isLiked}));
  };

  return (
    <div className="comments">
      <div className="comments__info">
        <div className="comments__filter">
          <button className={`comments__filter-btn ${isLastComments && 'active'}`} onClick={onLastComments}>
            Последние отзывы
          </button>
          <button className={`comments__filter-btn ${!isLastComments && 'active'}`} onClick={onAllComments}>
            Все отзывы
          </button>
        </div>
        <div className="comments__statistics">
          <div className="comments__likes" onClick={onChangeLike}>
            <img className="like-icon icon-active" src={likeIcon} alt="like icon" />
            {isLiked ? 132 : 131}
          </div>
          <div className="comments__amount">
            <img className="comments-icon" src={commentIcon} alt="comments icon" />
            {comments.length}
          </div>
        </div>
      </div>
      <div className="comments__last">{commentsRender(comments, isLastComments)}</div>
    </div>
  );
};

export default Comments;
