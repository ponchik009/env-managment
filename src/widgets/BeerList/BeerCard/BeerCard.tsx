import React from "react";

import { Beer } from "types";

import {
  Card,
  CardAdditional,
  CardImage,
  CardTitle,
  ICardProps,
  Typography,
} from "ui";

interface IBeerCardProps extends ICardProps {
  beer: Beer;
}

export const BeerCard: React.FC<IBeerCardProps> = ({ beer, ...props }) => {
  return (
    <Card {...props}>
      <CardImage src={beer.image_url} alt={beer.name} />
      <CardTitle>
        <Typography variant="h4">{beer.name}</Typography>
        <Typography variant="span">{beer.tagline}</Typography>
      </CardTitle>
      <CardAdditional>
        <Typography variant="p">{beer.description}</Typography>
      </CardAdditional>
    </Card>
  );
};
