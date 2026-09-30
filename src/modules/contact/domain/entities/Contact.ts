export class Contact {
  id?: string;
  firstName: string;
  lastName: string;
  numberPhone: number;
  email: string;
  createdAt: Date;

  constructor({ createdAt, email, firstName, lastName, numberPhone }: Contact) {
    Object.assign(this, {
      createdAt,
      email,
      firstName,
      lastName,
      numberPhone,
    });
  }

  static create({ email, firstName, lastName, numberPhone }: Contact) {
    const contact = new Contact({
      email,
      firstName,
      lastName,
      numberPhone,
      createdAt: new Date(),
    });

    return contact;
  }
}
