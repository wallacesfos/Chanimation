import { Inject, Injectable, HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Users } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { LoginUserDTO } from "./dto/login-user.dto";
import { Token } from "src/utils/token.utils";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private usersRepository: Repository<Users>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { email, username, password } = createUserDto;

      if (!email || !username || !password) {
        throw new HttpException("email, username or password is null", 400);
      }

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const newUser = {
        ...createUserDto,
        password: hashedPassword,
      };

      return this.usersRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async login(loginUserDTO: LoginUserDTO, userIP: string) {
    const user = await this.usersRepository.findOneByOrFail({
      email: loginUserDTO.email,
    });

    if (!user) {
      throw new HttpException("Users Not Found", 404);
    }

    const hashedPassword = await bcrypt.compare(
      loginUserDTO.password,
      user.password
    );

    if (!hashedPassword) {
      throw new HttpException("Wrong email/password", 401);
    }

    // const bearer = await Token.generateToken({
    //   IDUser: user.IDUser,
    //   username: user.username,
    //   email: user.email,
    //   IP: userIP,
    // });

    return ;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    try {
      return await this.usersRepository.findOneByOrFail({ iduser: id });
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.usersRepository.update({ iduser: id }, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  remove(id: string) {
    try {
      return this.usersRepository.delete({ iduser: id });
    } catch (error) {
      throw error;
    }
  }
}
