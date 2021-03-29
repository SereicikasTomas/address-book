export interface RandomUser {
  email: string;
  name: { first: string; last: string };
  picture: { thumbnail: string };
  login: {
    uuid: string;
    username: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    postcode: number;
  };
  phone: string;
  cell: string;
}

export interface User {
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
}

export interface CardProps {
  index: number;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  picture: string;
}
