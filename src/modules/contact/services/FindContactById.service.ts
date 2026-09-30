import { isValidObjectId } from 'mongoose';
import { IContactRepository } from '../port/IContactsRepository';
import { Contact } from '../domain/entities/Contact';
import { NotFoundException } from '../../../shared/errors/AppError';

export class FindContactByIdService {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(id: string): Promise<Contact> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('invalid contact id');
    }

    const contact = await this.contactRepository.findContactById(id);

    if (!contact) {
      throw new NotFoundException('contact not found');
    }

    return contact;
  }
}
