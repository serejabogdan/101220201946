import React from 'react';
import './CommentForm.scss';

const CommentForm = () => {
  return (
    <form className="comment-area">
      <textarea className="comment-input" name="comment" required></textarea>
      <button className="submit" type="submit">
        Написать консультанту
      </button>
    </form>
  );
};

export default CommentForm;
