import React, {useState} from 'react';
import {getStringDateNow} from '../../utils';
import './CommentForm.scss';

const CommentForm = ({onAddComment}) => {
  const downKeys = [];

  const keysInclude = (e) => {
    const keys = ['Enter', 'ControlLeft'];
    downKeys.push(e.code);
    if (downKeys.length === 2) {
      for (let key of keys) {
        if (!downKeys.includes(key)) {
          return;
        }
      }
    } else {
      return;
    }

    textareaValue.trim() && onSubmitCommentData();
    downKeys.length = 0;
  };

  const [textareaValue, setState] = useState('');
  const onSubmitCommentData = () => {
    const newComment = {
      personName: 'Сергей',
      date: getStringDateNow(),
      filterDate: Date.now(),
      content: textareaValue
    };
    onAddComment(newComment);
    setState('');
  };

  return (
    <form className="comment-area" onKeyDown={keysInclude}>
      <textarea
        className="comment-input"
        name="comment"
        required
        value={textareaValue}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        className="submit"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          textareaValue.trim() && onSubmitCommentData();
        }}
      >
        Написать консультанту
      </button>
    </form>
  );
};

export default CommentForm;
