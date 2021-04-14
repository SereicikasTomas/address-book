import { useEffect, useState } from 'react';
import axios from 'axios';

import { Nationalities, RandomUser, User } from 'types/interfaces';
import { generateGradient, getFromLS } from 'helper-functions';

/**
 * Custom hook that fetches users
 */
export default function useUserFetch(pageNumber: number): [boolean, boolean, User[], boolean] {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const nationalities = getFromLS('nationalities') as Nationalities;
    const keysArray = nationalities ? Object.keys(nationalities) : [];
    const filteredArray = keysArray.filter((key: string) => nationalities[key]);

    (async () => {
      try {
        const {
          data: { results },
        } = await axios.get('https://api.randomuser.me/', {
          params: {
            results: 50,
            page: pageNumber,
            inc: 'login, name, picture, location, phone, cell, email',
            nat: filteredArray.join(','),
          },
        });

        const aggregatedUsers = results.map((user: RandomUser) => {
          return {
            id: user.login.uuid,
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.login.username,
            picture: user.picture.thumbnail,
            street: `${user.location.street.number} ${user.location.street.name}`,
            city: user.location.city,
            state: user.location.state,
            postcode: user.location.postcode,
            phone: user.phone,
            cell: user.cell,
            gradient: generateGradient(),
          };
        });

        setUsers((prevUsers) => [...prevUsers, ...aggregatedUsers]);
        setLoading(false);
        setHasMore(!(pageNumber >= 20));
      } catch (error) {
        console.error(error.message);
        setError(true);
      }
    })();
  }, [pageNumber]);
  return [loading, error, users, hasMore];
}
