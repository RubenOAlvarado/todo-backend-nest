import { ApiProperty } from '@nestjs/swagger';

export class TodoResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the todo item',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The title of the todo item',
    example: 'Buy groceries',
  })
  title: string;

  @ApiProperty({
    description: 'Whether the todo item is completed',
    example: false,
    default: false,
  })
  completed: boolean;

  @ApiProperty({
    description: 'The order of the todo item in the list',
    example: 1,
  })
  order: number;

  @ApiProperty({
    description: 'The date when the todo item was created',
    example: '2023-07-15T10:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date when the todo item was last updated',
    example: '2023-07-15T10:30:00Z',
  })
  updatedAt: Date;
}
