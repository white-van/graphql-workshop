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
    return null;
  }
  @Query(() => Rover, {nullable: true})
  async findRover(@Arg("name") name: string) {
    //TODO: finish this function
    console.log(name);
    console.log(rovers);
    console.log(planets);
    return null;
  }

  //Update
  @Mutation(() => Rover, {nullable: true})
  async updateRover(@Arg("name") name: string, @Arg("data") data: updateRoverInput) {
    //TODO: finish this function
    console.log(name);
    console.log(data);
    return null;
  }

  // Add
  @Mutation(() => Rover, {nullable: true})
  async addRover(@Arg("data") data: addRoverInput) {
    // TODO: Finish this function
    console.log(data);
    return null;
  }

  @FieldResolver()
  async planetVisited(@Root() rover: RoverState){
     //TODO: finish this function
     console.log(rover);
    return null;
  }

}