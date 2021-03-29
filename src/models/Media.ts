import { ObjectType, Field, ID } from 'type-graphql';
import { Rover, Planet } from './index';

@ObjectType()
export class Media {

  @Field(() => ID)
  id: string;

  @Field(() => Planet)
  planet: Planet;

  @Field(() => Rover)
  rover: Rover;

  @Field(() => [Photo], {nullable: "items"})
  photos: Photo[]
}
@ObjectType()
export class Photo {
  @Field(() => ID)
  id: String;

  @Field()
  cameraName: string

  @Field()
  dateTaken: string

  @Field()
  url: String
}