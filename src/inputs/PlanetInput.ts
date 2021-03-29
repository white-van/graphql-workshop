import { Field, InputType } from 'type-graphql';

@InputType()
export class addPlanetInput {
  @Field()
  diameter: number
  @Field()
  name: string
}

@InputType()
export class updatePlanetInput {
  @Field({nullable: true})
  diameter?: number
  @Field({nullable: true})
  name?: string
}