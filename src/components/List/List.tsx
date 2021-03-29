import { Fragment, useRef, useState, useCallback } from 'react';
import useUserFetch from 'api/hooks/useUserFetch';

import Card from './Card';
import { User } from 'types/interfaces';

import * as Styled from './styles';

function List(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, error, users, hasMore] = useUserFetch(pageNumber);
  console.log(loading, error, users, hasMore);

  const observer = useRef<IntersectionObserver>();
  const lastUserCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevState: number) => prevState + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <Fragment>
      <Styled.List>
        {users.map((user: User, index: number) => (
          <Card key={user.id} {...user} index={index} />
        ))}
      </Styled.List>
      {loading && <div>Loading...</div>}
      {hasMore && <div ref={lastUserCardRef}>Last</div>}
    </Fragment>
  );
}

export default List;
