export class CustomUserDetails {
    id: number;
    firstName: string;
    lastName: string;
    country: string;
    email: string;
  
    constructor(id: number, firstName: string, lastName: string, country: string, email: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.email = email;
    }
  }
  