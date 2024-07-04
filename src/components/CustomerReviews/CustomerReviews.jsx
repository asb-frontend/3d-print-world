import React from 'react';
import s from './CustomerReviews.module.css';
import Review from './Review';

const CustomerReviews = ({ reviews }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Customer Reviews</h2>
      <div className={s.reviewsList}>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
