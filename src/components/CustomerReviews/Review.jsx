import React from 'react';
import s from './CustomerReviews.module.css';

const Review = ({ review }) => {
  return (
    <div className={s.review}>
      <h3 className={s.reviewTitle}>{review.title}</h3>
      <p className={s.reviewBody}>{review.body}</p>
      <div className={s.reviewAuthor}>
        - {review.author}
      </div>
    </div>
  );
};

export default Review;
