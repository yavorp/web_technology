import { User } from '../models/user';

class UserService {
  constructor() {}

  async findByEmail(email: string) {
    return await User.query().findOne({email});
  }

  async authenticate(email: string, password: string) {
    
  }
}

export default new UserService();

