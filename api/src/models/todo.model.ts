import {Entity, property, model} from '@loopback/repository';

@model({
  name: 'todo',
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
    name: 'is_complete',
  })
  isComplete: boolean;

  getId() {
    return this.id;
  }
}
