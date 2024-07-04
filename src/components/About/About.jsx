import React from "react";
import s from "./About.module.css";
import Newsletter from "../Newsletter/Newsletter";
import Process from "../Process/Process";
import useResponsive from "../../utils/useResponsive";
import CustomerReviews from "../CustomerReviews/CustomerReviews";

const About = () => {
  const {isDesktop} = useResponsive();
  const reviews = [
    { title: 'Great product!', body: 'I really loved this product. It works as expected.', author: 'John Doe' },
    { title: 'Not bad', body: 'The product is okay, but could be improved.', author: 'Jane Smith' },
    { title: 'Excellent service', body: 'The customer service was fantastic!', author: 'Alice Johnson' }
  ];
 
  return (
    <div className={s.about}>
      <h1 className={s.title}>Connect with AK-Printing</h1>
      <div className={s.aboutSection}><Newsletter></Newsletter></div>
      <div className={s.aboutSection}><CustomerReviews reviews={reviews} /></div>
      {isDesktop &&(<div className={s.aboutSection}><Process></Process></div>)}
    </div>
  );
};

export default About;