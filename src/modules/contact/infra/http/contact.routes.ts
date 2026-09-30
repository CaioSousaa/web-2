import { Router } from 'express';
import { MongooseContactRepository } from '../../../../external/repositories/MongooseContactRepository';
import { CreateContactService } from '../../services/CreateContact.service';
import { FindManyContactsService } from '../../services/FindManyContacts.service';
import { FindContactByIdService } from '../../services/FindContactById.service';
import { UpdateContactService } from '../../services/UpdateContact.service';
import { DeleteContactService } from '../../services/DeleteContact.service';
import { ContactController } from './contact.controller';
import { validateDTO } from '../../../../shared/http/middleware/validate-dto-middleware';
import { CreateContactDTO } from '../../dto/CreateContactDTO';
import { UpdateContactDTO } from '../../dto/UpdateContactDTO';

const contactRepository = new MongooseContactRepository();

const contactController = new ContactController(
  new CreateContactService(contactRepository),
  new FindManyContactsService(contactRepository),
  new FindContactByIdService(contactRepository),
  new UpdateContactService(contactRepository),
  new DeleteContactService(contactRepository),
);

export const contactRoutes = Router();

contactRoutes.post('/', validateDTO(CreateContactDTO), contactController.create);
contactRoutes.get('/', contactController.findMany);
contactRoutes.get('/:id', contactController.findById);
contactRoutes.put('/:id', validateDTO(UpdateContactDTO), contactController.update);
contactRoutes.delete('/:id', contactController.delete);
