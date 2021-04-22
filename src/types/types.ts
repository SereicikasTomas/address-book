import { ReactNode, Dispatch, SetStateAction } from 'react';
import { User } from './interfaces';

export type SearchProps = {
  value: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchUser: (search: string) => void;
};

export type MessageProps = {
  types: {
    [key: string]: boolean;
  };
};

export type ModalState = {
  open: boolean;
  user: User | null;
};

export type CardProps = {
  index: number;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  picture: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
  phone: string;
  cell: string;
  gradient: string;
  setModal: Dispatch<SetStateAction<ModalState>>;
};

export type ThemeContextProps = {
  children: ReactNode;
};

export type ModalProps = {
  modalState: ModalState;
  setModal: Dispatch<SetStateAction<ModalState>>;
};
