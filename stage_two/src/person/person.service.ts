import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

interface FindPersonParams {
  id: number;
  name: string;
}

@Injectable()
export class PersonService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPersonDto: CreatePersonDto) {
    return this.prismaService.person.create({
      data: {
        name: createPersonDto.name,
      },
    });
  }

  async findAll() {
    return this.prismaService.person.findMany();
  }

  findOne(id: number) {
    return this.prismaService.person.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prismaService.person.update({
      where: { id },
      data: { ...updatePersonDto },
    });
  }

  remove(id: number) {
    return this.prismaService.person.delete({
      where: { id },
    });
  }
}
