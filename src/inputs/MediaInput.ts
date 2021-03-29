import { Field, InputType } from 'type-graphql';

@InputType()
export class MediaFilterInput {
  @Field({nullable: true})
  sol?: number
  @Field({nullable: true})
  camera?: string
  @Field({nullable: true})
  earth_date?: string
}
