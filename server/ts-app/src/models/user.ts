import { Model } from 'objection';

export class User extends Model {
  static tableName = 'users';
  name?: string;
  password?: string;
  email?: string;
}
