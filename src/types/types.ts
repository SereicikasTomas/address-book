import { ReactNode } from 'react';

export type SearchProps = {
  value: string;
  setSearch: (value: string) => void;
  searchUser: (search: string) => void;
};

export type MessageProps = {
  type: string;
};

export type CardProps = {
  index: number;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  picture: string;
  gradient: string;
};

export type ThemeContextProps = {
  children: ReactNode;
};