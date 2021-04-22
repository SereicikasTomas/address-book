import { Fragment, useRef, useState, useCallback } from 'react';
import useUserFetch from 'api/custom-hooks/useUserFetch';

import Card from './Card';
import Search from './Search';
import Modal from './Modal';

import { User } from 'types/interfaces';
import { ModalState } from 'types/types';

import Loader from 'template-components/Loader';
import Message from 'template-components/Message';

import { ReactComponent as CogLogo } from 'assets/cog-solid.svg';

import * as Styled from './styles';

function List(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [searchlist, setSearchList] = useState<User[]>([]);
  const [modal, setModal] = useState<ModalState>({ open: false, user: null });

  const [loading, error, users, hasMore] = useUserFetch(pageNumber);

  const isSearching = !!search.length;
  const noMatch = !searchlist.length && isSearching;

  const showMessage = noMatch || isSearching || !hasMore || error;
  const messages = {
    noMatch,
    searching: isSearching,
    end: !hasMore,
    error,
  };

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
    array.map((user: User, index: number) => <Card key={user.id} {...user} setModal={setModal} index={index} />);

  return (
    <Fragment>
      <Modal modalState={modal} setModal={setModal} />
      <Styled.Header>
        <Search value={search} setSearch={setSearch} searchUser={searchUser} />
        <Styled.SettingsLink to="/settings">
          <CogLogo />
        </Styled.SettingsLink>
      </Styled.Header>

      <Styled.List>{isSearching ? renderCards(searchlist) : renderCards(users)}</Styled.List>

      {loading && <Loader />}

      {hasMore && !isSearching && <span ref={lastUserCardRef} />}

      {showMessage && <Message types={messages} />}
    </Fragment>
  );
}

export default List;
