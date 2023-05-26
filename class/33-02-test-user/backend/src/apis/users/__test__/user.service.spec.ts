import { Test } from '@nestjs/testing';
import { UserService } from '../user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { ConflictException } from '@nestjs/common';

class MockUserRepository {
  myDb = [{ email: 'aaa@aaa', password: 'aaa', name: '짱구', age: 13 }];
  findOne({ email }) {
    const users = this.myDb.filter((el) => el.email === email);
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }

  save({ email, password, name, age }) {
    this.myDb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('userService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const userModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUserRepository,
        },
      ],
    }).compile();

    userService = userModule.get<UserService>(UserService);
  });
  describe('create', () => {
    it('이미 존재하는 이메일?', async () => {
      const myData = {
        email: 'aaa@aaa',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await userService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }
    });
    it('회원 등록 되는지', async () => {
      const myData = {
        email: 'bbb@bbb',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };

      const myResultData = {
        email: 'bbb@bbb',
        password: '1234',
        name: '철수',
        age: 13,
      };

      const result = await userService.create({ ...myData });
      expect(result).toStrictEqual(myResultData);
    });
  });
  describe('findOne', () => {});
});
