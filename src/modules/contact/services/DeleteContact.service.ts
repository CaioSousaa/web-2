import { isValidObjectId } from 'mongoose';
import { IContactRepository } from '../port/IContactsRepository';
import { NotFoundException } from '../../../shared/errors/AppError';

export class DeleteContactService {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(id: string): Promise<void> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('invalid contact id');
    }

    const contactExists = await this.contactRepository.findContactById(id);

    if (!contactExists) {
      throw new NotFoundException('contact not found');
    }

    await this.contactRepository.delete(id);
  }
}
