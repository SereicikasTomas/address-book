import { Fragment } from 'react';
import useUserFetch from '../../api/hooks/useUserFetch';

import { User } from '../../api/hooks/interfaces';

function List(): JSX.Element {
  const [loading, error, users, hasMore] = useUserFetch(1);
  console.log(loading, error, users, hasMore);
  return (
    <Fragment>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.first}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default List;
