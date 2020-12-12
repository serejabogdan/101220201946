import React, {useState} from 'react';
import './CommentForm.scss';

const month = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря'
};

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
    const date = new Date();
    onAddComment({
      personName: 'Сергей',
      date: `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`,
      content: textareaValue
    });
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
