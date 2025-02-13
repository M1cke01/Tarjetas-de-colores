import React from 'react';
import { StyledCard } from './CardStyle';

interface CardProps {
  bgColor?: string;
  textColor?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ bgColor = 'lightgray', textColor='black', title, description }) => {
  return (
    <StyledCard bgColor={bgColor} textColor={textColor}>
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledCard>
  );
};

export default Card;
