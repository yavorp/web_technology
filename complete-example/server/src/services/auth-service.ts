import jwt from 'jsonwebtoken';
class AuthenticationService {
  private secret: string;
  constructor() {
    this.secret = process.env.SECRET || 'spooky secret';
  }

  public authenticate(username: string, password: string) {
    if(this.validateCredentials(username, password)) {
      return jwt.sign({
        username,
        expiresIn: '10h'
      }, this.secret);
    }
    throw Error('auth error');
  }

  public validateToken(token: string) {
    return jwt.verify(token, this.secret); 
  }

  private validateCredentials(username: string, password: string) {
    return false;
  }
}

export default new AuthenticationService();