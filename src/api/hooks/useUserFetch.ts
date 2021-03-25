import { useEffect, useState } from 'react';
import axios from 'axios';

import { RandomUser, User } from './interfaces';

/**
 * Custom hook that fetches users
 */
export default function useUserFetch(pageNumber: number): [boolean, boolean, User[], boolean] {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const {
          data: { results },
        } = await axios.get('https://api.randomuser.me/', {
          params: { results: 50, page: pageNumber },
        });

        const aggregatedUsers = results.map((user: RandomUser) => {
          return {
            id: user.login.uuid,
            email: user.email,
            first: user.name.first,
            last: user.name.last,
            username: user.login.username,
            picture: user.picture.thumbnail,
            street: `${user.location.street.number} ${user.location.street.name}`,
            city: user.location.city,
            state: user.location.state,
            postcode: user.location.postcode,
            phone: user.phone,
            cell: user.cell,
          };
        });

        setUsers((prevUsers) => [...prevUsers, ...aggregatedUsers]);
        setLoading(false);
        setHasMore(!(pageNumber > 20 || pageNumber === 20));
      } catch (error) {
        console.error(error.message);
        setError(true);
      }
    })();
  }, [pageNumber]);
  return [loading, error, users, hasMore];
}
