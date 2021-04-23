import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Planet } from '../models';
import { Planets as planets, PlanetState } from '../state';
import { addPlanetInput, updatePlanetInput } from '../inputs';

@Resolver(Planet)
export class PlanetResolver {
  count: number = 1;
  @Query(() => [Planet], { nullable: "items" })
  async getPlanets(){
    // TODO: finish this function
    console.log(planets);
    console.log({} as PlanetState);
    return null;
  }
  @Query(() => Planet, {nullable: true})
  async findPlanet(@Arg("name") name: string) {
    //TODO: finish this function
    console.log(name);
    return null;
  }

  //Update
  @Mutation(() => Planet, {nullable: true})
  async updatePlanet(@Arg("name") name: string, @Arg("data") data: updatePlanetInput) {
    //TODO: finish this function
    console.log(name);
    console.log(data);
    return null;
  }

  // Add
  @Mutation(() => Planet, {nullable: true})
  async addPlanet(@Arg("data") data: addPlanetInput) {
    // TODO: Finish this function
    console.log(data);
    return null;
  }
}