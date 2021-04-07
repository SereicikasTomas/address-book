import * as Styled from './styles';

import { SearchProps } from 'types/types';

function Search({ value, setSearch, searchUser }: SearchProps): JSX.Element {
  return (
    <Styled.Search
      value={value}
      type="text"
      placeholder="Search for..."
      onChange={(e) => {
        setSearch(e?.target?.value);
        searchUser(e?.target?.value);
      }}
    />
  );
}

export default Search;
