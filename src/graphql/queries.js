/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getZombie = `query GetZombie($id: ID!) {
  getZombie(id: $id) {
    id
    name
    hit_points
    turn_date
  }
}
`;
export const listZombies = `query ListZombies(
  $filter: ModelZombieFilterInput
  $limit: Int
  $nextToken: String
) {
  listZombies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      hit_points
      turn_date
    }
    nextToken
  }
}
`;
