const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}
`;

module.exports = typeDefs;
