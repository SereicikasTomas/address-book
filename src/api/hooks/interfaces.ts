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
  first: string;
  last: string;
  username: string;
  picture: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
  phone: string;
  cell: string;
}
