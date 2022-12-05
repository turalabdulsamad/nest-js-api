import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './user.dto';
import { User } from './user.entity'

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly UserRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.UserRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.UserRepository.findOne<User>({ where: { email } })
    }

    async findOneById(id: number): Promise<User> {
        return await this.UserRepository.findOne<User>({ where: { id } })
    }

}

