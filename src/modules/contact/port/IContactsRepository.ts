import { Contact } from '../domain/entities/Contact';
import { UpdateContactDTO } from '../dto/UpdateContactDTO';

export interface IContactRepository {
  create(contact: Contact): Promise<Contact>;
  emailOrNumberPhoneExists(
    numberPhone?: number,
    email?: string,
    ignoreId?: string,
  ): Promise<boolean>;
  findManyContacts(): Promise<Contact[]>;
  findContactById(id: string): Promise<Contact | null>;
  update(id: string, data: UpdateContactDTO): Promise<Contact | null>;
  delete(id: string): Promise<void>;
}
