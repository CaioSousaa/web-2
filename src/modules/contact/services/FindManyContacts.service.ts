import { IContactRepository } from '../port/IContactsRepository';
import { Contact } from '../domain/entities/Contact';

export class FindManyContactsService {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(): Promise<Contact[]> {
    const contacts = await this.contactRepository.findManyContacts();

    return contacts;
  }
}
