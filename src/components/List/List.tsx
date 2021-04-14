import { Fragment, useRef, useState, useCallback } from 'react';
import useUserFetch from 'api/custom-hooks/useUserFetch';

import Card from './Card';
import Search from './Search';
import { User } from 'types/interfaces';
import Loader from 'template-components/Loader';
import Message from 'template-components/Message';
import { ReactComponent as CogLogo } from 'assets/cog-solid.svg';

import * as Styled from './styles';

function List(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, error, users, hasMore] = useUserFetch(pageNumber);
  const [search, setSearch] = useState('');
  const [searchlist, setSearchList] = useState<User[]>([]);
  const isSearching = !!search.length;
  const noMatches = !searchlist.length;

  /**
   * Function used for filtering user list with provided search string
   */
  const searchUser = useCallback(
    (search: string) => {
      const filteredUsers = users.filter((user: User) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.includes(search);
      });

      setSearchList(filteredUsers);
    },
    [users],
  );

  /**
   * Function that controls observer
   * When observer is visible it updates page number and
   * Which in result fetches more users with @see useUserFetch
   */
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

  /**
   * Function renders Card components from provided array of users
   * @param array of Users
   * @returns JSX.Element
   */
  const renderCards = (array: User[]) =>
    array.map((user: User, index: number) => <Card key={user.id} {...user} index={index} />);

  return (
    <Fragment>
      <Styled.Header>
        <Search value={search} setSearch={setSearch} searchUser={searchUser} />

        <Styled.SettingsLink to="/settings">
          <CogLogo />
        </Styled.SettingsLink>
      </Styled.Header>

      <Styled.List>{isSearching ? renderCards(searchlist) : renderCards(users)}</Styled.List>

      {loading && <Loader />}
      {hasMore && !isSearching && <span ref={lastUserCardRef} />}
      {isSearching && noMatches && <Message type="noMatch" />}
      {isSearching && <Message type="searching" />}
      {!hasMore && <Message type="end" />}
      {error && <Message type="error" />}
    </Fragment>
  );
}

export default List;
