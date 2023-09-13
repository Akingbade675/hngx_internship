import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('api')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':user_id')
  async findOne(@Param('user_id', ParseIntPipe) user_id: number) {
    const person = await this.personService.findOne(user_id);

    if (!person) {
      throw new HttpException(
        `Person with id ${user_id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return person;
  }

  @Put(':user_id')
  update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(user_id, updatePersonDto);
  }

  @Delete(':user_id')
  remove(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.personService.remove(user_id);
  }
}
