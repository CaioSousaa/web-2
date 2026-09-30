import { ContactModel } from '../../database/schemas/Contact';
import { Contact } from '../../modules/contact/domain/entities/Contact';
import { IContactRepository } from '../../modules/contact/port/IContactsRepository';
import { UpdateContactDTO } from '../../modules/contact/dto/UpdateContactDTO';

export class MongooseContactRepository implements IContactRepository {
  async create({
    createdAt,
    email,
    firstName,
    lastName,
    numberPhone,
  }: Contact): Promise<Contact> {
    const newContact = await ContactModel.create({
      createdAt,
      email,
      firstName,
      lastName,
      numberPhone,
    });

    return newContact;
  }

  async emailOrNumberPhoneExists(
    numberPhone?: number,
    email?: string,
    ignoreId?: string,
  ): Promise<boolean> {
    const numberPhoneExists = numberPhone
      ? await ContactModel.findOne({ numberPhone, _id: { $ne: ignoreId } })
      : null;

    const emailExists = email
      ? await ContactModel.findOne({ email, _id: { $ne: ignoreId } })
      : null;

    return !!(numberPhoneExists || emailExists);
  }

  async findManyContacts(): Promise<Contact[]> {
    return await ContactModel.find();
  }

  async findContactById(id: string): Promise<Contact | null> {
    return await ContactModel.findById(id);
  }

  async update(id: string, data: UpdateContactDTO): Promise<Contact | null> {
    return await ContactModel.findByIdAndUpdate(id, data, {
      returnDocument: 'after',
    });
  }

  async delete(id: string): Promise<void> {
    await ContactModel.findByIdAndDelete(id);
  }
}
