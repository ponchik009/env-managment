import React from "react";

import { InfiniteList } from "components";
import { Beer } from "types";
import { beerApi } from "api";
import { CardList } from "ui";
import { BeerCard } from "widgets";

export const BeerList = () => {
  const [beers, setBeers] = React.useState<Beer[]>([]);
  const [page, setPage] = React.useState(0);

  const onScrollTrigger = React.useCallback(async () => {
    setPage((prev) => prev + 1);
  }, []);

  React.useEffect(() => {
    if (page >= 1) {
      beerApi
        .getBeers(page)
        .then((beers) => setBeers((prev) => [...prev, ...beers]));
    }
  }, [page]);

  return (
    <InfiniteList callback={onScrollTrigger}>
      <CardList>
        {beers.map((beer) => (
          <BeerCard beer={beer} key={beer.id} />
        ))}
      </CardList>
    </InfiniteList>
  );
};
