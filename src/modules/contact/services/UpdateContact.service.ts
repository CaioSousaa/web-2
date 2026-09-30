import { isValidObjectId } from 'mongoose';
import { IContactRepository } from '../port/IContactsRepository';
import { Contact } from '../domain/entities/Contact';
import { UpdateContactDTO } from '../dto/UpdateContactDTO';
import {
  NotAcceptableException,
  NotFoundException,
} from '../../../shared/errors/AppError';

export class UpdateContactService {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(id: string, data: UpdateContactDTO): Promise<Contact> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('invalid contact id');
    }

    const contactExists = await this.contactRepository.findContactById(id);

    if (!contactExists) {
      throw new NotFoundException('contact not found');
    }

    const emailOrNumberPhoneAlreadyExists =
      await this.contactRepository.emailOrNumberPhoneExists(
        data.numberPhone,
        data.email,
        id,
      );

    if (emailOrNumberPhoneAlreadyExists) {
      throw new NotAcceptableException(
        'email or number phone has already been registered in another contact',
      );
    }

    const updatedContact = await this.contactRepository.update(id, data);

    return updatedContact as Contact;
  }
}
