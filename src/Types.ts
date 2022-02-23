export interface IUsers {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location?: Object;
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: { title: string; first: string; last: string };
  nat: String;
  phone: String;
  picture: { large: string; medium: string; thumbnail: string };
  registered: { date: string; age: number };
}

export interface IUser {
  username: string;
  password: string;
}
