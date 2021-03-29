import { ObjectType, Field, ID } from 'type-graphql';
import { Planet } from './Planet';

@ObjectType()
export class Rover {

  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  launchDate: Date;

  @Field()
  status: string;

  @Field(() => Planet)
  planetVisited: Planet;

  @Field(() => [String])
  cameras: String[]

}