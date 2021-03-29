import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Query, Resolver } from "type-graphql";

//import { PlanetResolver, RoverResolver, MediaResolver } from './resolvers'; 

@Resolver()
class StubResolver {
  @Query(()=> String)
  hello(){
    return "Hello The Show!"
  }
}
const main = async () => {
  const schema = await buildSchema({
    resolvers: [StubResolver]
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();
