import { Request, Response } from 'express';
import { CreateContactService } from '../../services/CreateContact.service';
import { FindManyContactsService } from '../../services/FindManyContacts.service';
import { FindContactByIdService } from '../../services/FindContactById.service';
import { UpdateContactService } from '../../services/UpdateContact.service';
import { DeleteContactService } from '../../services/DeleteContact.service';

export class ContactController {
  constructor(
    private createContactService: CreateContactService,
    private findManyContactsService: FindManyContactsService,
    private findContactByIdService: FindContactByIdService,
    private updateContactService: UpdateContactService,
    private deleteContactService: DeleteContactService,
  ) {}

  create = async (req: Request, res: Response) => {
    const contact = await this.createContactService.execute(req.body);

    return res.status(201).json(contact);
  };

  findMany = async (req: Request, res: Response) => {
    const contacts = await this.findManyContactsService.execute();

    return res.json(contacts);
  };

  findById = async (req: Request<{ id: string }>, res: Response) => {
    const contact = await this.findContactByIdService.execute(req.params.id);

    return res.json(contact);
  };

  update = async (req: Request<{ id: string }>, res: Response) => {
    const contact = await this.updateContactService.execute(
      req.params.id,
      req.body,
    );

    return res.json(contact);
  };

  delete = async (req: Request<{ id: string }>, res: Response) => {
    await this.deleteContactService.execute(req.params.id);

    return res.status(204).send();
  };
}
