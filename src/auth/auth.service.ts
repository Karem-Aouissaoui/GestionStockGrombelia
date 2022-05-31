import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const userDB = await this.usersService.findByUsername(username);
    if (userDB) {
      const matched = comparePasswords(pass, userDB.password);
      if (matched) {
        console.log('user validation success');
        return userDB;
      } else {
        console.log('wrong password!');
      }
    }
    console.log('user validation failed');
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
