import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTodoDto, UpdateTodoDto, TodoResponseDto } from './dto';

@ApiTags('Todos')
@Controller()
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOperation({ summary: 'Create a new todo item' })
  @ApiBody({ type: CreateTodoDto, description: 'Todo item data' })
  @ApiCreatedResponse({
    description: 'The created todo item',
    type: TodoResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @ApiOperation({ summary: 'Get all todo items' })
  @ApiOkResponse({
    description: 'Return all todo items.',
    type: TodoResponseDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @ApiOperation({ summary: 'Get a todo item by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the todo item',
    required: true,
  })
  @ApiOkResponse({
    description: 'Return the todo item with the given ID.',
    type: TodoResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Todo item not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a todo item by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the todo item',
    required: true,
  })
  @ApiOkResponse({
    description: 'Return the todo item with the given ID.',
    type: TodoResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Todo item not found.' })
  @ApiBadRequestResponse({
    description: 'Bad request - invalid data provided.',
  })
  @ApiBody({
    type: UpdateTodoDto,
    description: 'The updated data for the todo item',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @ApiOperation({ summary: 'Delete a todo item by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the todo item',
    required: true,
  })
  @ApiOkResponse({
    description: 'Return the todo item with the given ID.',
    type: TodoResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Todo item not found.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
