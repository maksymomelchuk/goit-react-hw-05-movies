import { fetchActors } from 'services/api';
import { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { StyledActorsList, StyledActorCard } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const func = async () => {
      const data = await fetchActors(id);
      setActors(data);
    };
    func();
  }, [id]);

  if (!actors) {
    return;
  }

  return (
    <div id="box">
      <StyledActorsList>
        {actors.cast.map(({ name, profile_path, character }) => {
          return (
            <StyledActorCard key={name}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://vogue.ua/i/image_720x/upload/inner/482/1416478482.jpg.webp'
                }
                alt=""
                width="150"
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </StyledActorCard>
          );
        })}
      </StyledActorsList>
    </div>
  );
};

export default Cast;
