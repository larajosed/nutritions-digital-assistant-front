

export class User {
    id: number;
    name: string;
    lastName : string;
    email: string;
    password: string;
    gender: number;
    address: string;
    role: number;
    date: Date;
  
    constructor(id: number, 
        name: string, 
        lastName : string, 
        email: string,
        password: string,
        gender: number,
        address: string,
        role: number,
        date: Date,) {
      this.id = id;
      this.name = name;
      this.lastName = lastName
      this.email = email;
      this.password = password;
      this.gender = gender;
      this.address = address;
      this.role = role;
      this.date = date; 
    }
  }