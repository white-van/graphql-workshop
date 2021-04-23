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
    console.log(planet);
    return 1;
  };

  @Field(() => Number)
  surfaceArea(@Root() planet: Planet ): number {
    //TODO: Finish this function, hint: surfaceArea is 4 * PI * radius ^2 
    console.log(planet);
    return 1;
  }

}