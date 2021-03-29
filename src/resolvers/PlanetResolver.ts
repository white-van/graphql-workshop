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
    return null;
  }
  @Query(() => Planet, {nullable: true})
  async findPlanet(@Arg("name") name: string) {
    //TODO: finish this function
    return null;
  }

  //Update
  @Mutation(() => Planet, {nullable: true})
  async updatePlanet(@Arg("name") name: string, @Arg("data") data: updatePlanetInput) {
    //TODO: finish this function
    return null;
  }

  // Add
  @Mutation(() => Planet, {nullable: true})
  async addPlanet(@Arg("data") data: addPlanetInput) {
    // TODO: Finish this function
    return null;
  }
}