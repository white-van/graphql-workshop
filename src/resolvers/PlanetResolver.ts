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
    return planets;
  }
  @Query(() => Planet, {nullable: true})
  async findPlanet(@Arg("name") name: string) {
    //TODO: finish this function
    return planets.find((planet) => planet.name === name);
  }

  //Update
  @Mutation(() => Planet, {nullable: true})
  async updatePlanet(@Arg("name") name: string, @Arg("data") data: updatePlanetInput) {
    //TODO: finish this function
    const planetIndex = planets.findIndex((planet) => planet.name === name);
    if (planetIndex === -1){
      return null;
    }
    const newPlanet = {...planets[planetIndex], ...data} as PlanetState;
    planets[planetIndex] = newPlanet
    return newPlanet;
  }

  // Add
  @Mutation(() => Planet, {nullable: true})
  async addPlanet(@Arg("data") data: addPlanetInput) {
    // TODO: Finish this function
    if (planets.find(planet => planet.name === data.name)) {
      return null;
    }
    const newPlanet = { id: this.count.toString(), ...data } as PlanetState;
    this.count += 1;
    planets.push(newPlanet);
    return newPlanet
  }
}