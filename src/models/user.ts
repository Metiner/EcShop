export class User {
  id: number;
  email: string;
  token: string;


  constructor(id: number, email: string, token: string) {
    this.id = id;
    this.email = email;
    this.token = token;
  }
}
