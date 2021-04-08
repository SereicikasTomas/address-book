export type SearchProps = {
  value: string;
  setSearch: (value: string) => void;
  searchUser: (search: string) => void;
};

export type MessageProps = {
  type: string;
};