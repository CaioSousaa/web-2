import { IContactRepository } from '../port/IContactsRepository';
import { Contact } from '../domain/entities/Contact';
import { CreateContactDTO } from '../dto/CreateContactDTO';
import { NotAcceptableException } from '../../../shared/errors/AppError';

export class CreateContactService {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute({
    email,
    firstName,
    lastName,
    numberPhone,
  }: CreateContactDTO): Promise<Contact> {
    const emailOrNumberPhoneAlreadyExists =
      await this.contactRepository.emailOrNumberPhoneExists(numberPhone, email);

    if (emailOrNumberPhoneAlreadyExists) {
      throw new NotAcceptableException(
        'email or number phone has already been registered in another contact',
      );
    }

    const staticContact: Contact = Contact.create({
      createdAt: new Date(),
      email,
      firstName,
      lastName,
      numberPhone,
    });

    const newContact = await this.contactRepository.create(staticContact);

    return newContact;
  }
}
