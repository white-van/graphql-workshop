import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from 'type-graphql';
import { Rover } from '../models';
import { Rovers as rovers, RoverState, Planets as planets } from '../state';
import { addRoverInput, updateRoverInput } from '../inputs';

@Resolver(Rover)
export class RoverResolver {
  count: number = 5;
  @Query(() => [Rover], { nullable: "items" })
  async getRovers(){
    // TODO: finish this function
    return rovers;
  }
  @Query(() => Rover, {nullable: true})
  async findRover(@Arg("name") name: string) {
    //TODO: finish this function
    return rovers.find((rover) => rover.name === name);
  }

  //Update
  @Mutation(() => Rover, {nullable: true})
  async updateRover(@Arg("name") name: string, @Arg("data") data: updateRoverInput) {
    //TODO: finish this function
    const roverIndex = rovers.findIndex((rover) => rover.name === name);
    if (roverIndex === -1){
      return null;
    }
    const newRover = {...rovers[roverIndex], ...data} as RoverState;
    rovers[roverIndex] = newRover;
    return newRover;
  }

  // Add
  @Mutation(() => Rover, {nullable: true})
  async addRover(@Arg("data") data: addRoverInput) {
    // TODO: Finish this function
    if (rovers.find(rover => rover.name === data.name)) {
      return null;
    }
    const newRover = { id: this.count.toString(), ...data } as unknown as RoverState;
    this.count += 1;
    rovers.push(newRover);
    return newRover
  }

  @FieldResolver()
  async planetVisited(@Root() rover: RoverState){
    const planet = planets.find(planet => planet.id === rover.planetVisited);
    return planet
  }

}