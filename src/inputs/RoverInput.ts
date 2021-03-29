import { Field, InputType } from 'type-graphql';

@InputType()
export class addRoverInput {
  @Field()
  name: string;

  @Field()
  launchDate: Date;

  @Field()
  status: string;

  @Field()
  planetVisited: string;

  @Field(() => [String])
  cameras: string[];

}

@InputType()
export class updateRoverInput {
  @Field({nullable: true})
  name?: number;

  @Field({nullable:true})
  launchDate?: Date;

  @Field({nullable: true})
  status?: string;

  @Field({nullable: true})
  planetVisited?: string;

  @Field(() => [String], {nullable: "itemsAndList"})
  cameras?: string[];

}