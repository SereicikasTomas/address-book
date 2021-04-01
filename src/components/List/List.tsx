import { Fragment, useRef, useState, useCallback } from 'react';
import useUserFetch from 'api/hooks/useUserFetch';

import Card from './Card';
import Search from './Search';
import { User } from 'types/interfaces';
import Loader from 'template-components/Loader';
import { ReactComponent as CogLogo } from 'assets/cog-solid.svg';

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
      <Styled.Header>
        <Search />
        <Styled.SettingsLink to="/settings">
          <CogLogo />
        </Styled.SettingsLink>
      </Styled.Header>
      <Styled.List>
        {users.map((user: User, index: number) => (
          <Card key={user.id} {...user} index={index} />
        ))}
      </Styled.List>
      {loading && <Loader />}
      {hasMore && <div ref={lastUserCardRef}></div>}
    </Fragment>
  );
}

export default List;
