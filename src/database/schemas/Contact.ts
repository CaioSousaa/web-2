import { Schema, model } from 'mongoose';
import { Contact } from '../../modules/contact/domain/entities/Contact';

const ContactSchema = new Schema<Contact>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    numberPhone: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  },
);

export const ContactModel = model<Contact>('Contact', ContactSchema);
