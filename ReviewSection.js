import React from 'react';
import ram from '../assets/ram.jpg';
import gowtham from '../assets/gowtham.jpg';
import deepak from '../assets/deepak.jpg';
import sukesh from '../assets/sukesh.jpg';
import ms from '../assets/ms.jpg';
import virat from '../assets/virat.jpg';

function ReviewsSection() {
  const reviews = [
    {
      image: ram,
      name: "RAMCHANDRAN",
      text: "I can't say enough good things about FITNESS FUSION. The trainers are exceptional, and the community is so welcoming. I've made incredible progress in my fitness journey here"
    },
    {
      image: gowtham,
      name: "VISHNU",
      text: "rock, the MMA coach, is a true expert. He pushes you to your limits while ensuring safety. I've learned so much and gained newfound confidence"
    },
    {
      image: deepak,
      name: "VIJAY",
      text: "\"Fitness Fusion Gym offers diverse classes and top-notch facilities, but it's the passionate instructors that truly make the difference in achieving your fitness goals.\""
    },
    {
      image: sukesh,
      name: "HRITHIK",
      text: "\"Fitness Fusion Gym rocks! Incredible equipment, motivating instructors, and a welcoming vibe. Whether you're a beginner or a pro, this place has it all. Highly recommend!\""
    },
    {
      image: ms,
      name: "MS DHONI",
      text: "\"Fitness Fusion Gym is a gem! Diverse classes, expert trainers, and a supportive vibe make it a fitness paradise.\""
    },
    {
      image: virat,
      name: "VIRAT",
      text: "\"Fitness Fusion Gym is top-notch! From the cutting-edge facilities to the personalized training, it's a winner. Joining was one of my best health decisions!\""
    }
  ];

  return (
    <section className="section-reviews" id="reviews">
      <div className="container reviews">
        <h2 className="title">Customer Reviews</h2>
        <div className="review">
          {reviews.map((review, index) => (
            <div className="review-info" key={index}>
              <div className="review-image" data-aos="image-rotateIn">
                <img src={review.image} alt="Logo" className="review-icon" width="130" height="130" />
              </div>
              <div className="review-details" data-aos="fade-down">
                <div>{review.name}</div>
                <div>{review.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;