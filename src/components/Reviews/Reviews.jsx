import { fetchReviews } from 'services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { StyledList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const func = async () => {
      const data = await fetchReviews(id);
      setReviews(data);
    };
    func();
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <div id="box">
      <StyledList>
        {reviews.results.length > 0
          ? reviews.results.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p style={{ fontSize: 24, marginBottom: 10 }}>
                    Author: {author}
                  </p>
                  <p>Content: {content}</p>
                </li>
              );
            })
          : 'Sorry, no reviews for now'}
      </StyledList>
    </div>
  );
};

export default Reviews;
