import { Fragment } from 'react';
import useUserFetch from 'api/hooks/useUserFetch';

import Card from './Card';
import { User } from 'types/interfaces';

function List(): JSX.Element {
  const [loading, error, users, hasMore] = useUserFetch(1);
  console.log(loading, error, users, hasMore);
  return (
    <Fragment>
      <ul>
        {users.map((user: User) => (
          <Card key={user.id} {...user} />
        ))}
      </ul>
    </Fragment>
  );
}

export default List;
