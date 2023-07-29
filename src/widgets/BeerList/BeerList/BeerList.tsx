import React from "react";

import { InfiniteList } from "components";
import { Beer } from "types";
import { beerApi } from "api";
import { CardList } from "ui";
import { BeerCard } from "widgets";

export const BeerList = () => {
  const [beers, setBeers] = React.useState<Beer[]>([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const onScrollTrigger = React.useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  React.useEffect(() => {
    if (page >= 1) {
      setLoading(true);
      beerApi
        .getBeers(page)
        .then((beers) => setBeers((prev) => [...prev, ...beers]))
        .finally(() => setLoading(false));
    }
  }, [page]);

  return (
    <InfiniteList callback={onScrollTrigger} loading={loading}>
      <CardList>
        {beers.map((beer) => (
          <BeerCard beer={beer} key={beer.id} />
        ))}
      </CardList>
    </InfiniteList>
  );
};
