import { ObjectType, Field, Root, ID } from 'type-graphql';

@ObjectType()
export class Planet {

  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  diameter: number;

  @Field(() => Number)
  circumference(@Root() planet: Planet): number {
    //TODO: Finish this function, hint: circumference is PI * diameter
    return Math.PI * planet.diameter;
  };

  @Field(() => Number)
  surfaceArea(@Root() planet: Planet ): number {
    //TODO: Finish this function, hint: surfaceArea is 4 * PI * radius ^2 
    return 4 * Math.PI * (planet.diameter / 2) ** 2 
  }

}