/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createZombie = `mutation CreateZombie(
  $input: CreateZombieInput!
  $condition: ModelZombieConditionInput
) {
  createZombie(input: $input, condition: $condition) {
    id
    name
    hit_points
    turn_date
  }
}
`;
export const updateZombie = `mutation UpdateZombie(
  $input: UpdateZombieInput!
  $condition: ModelZombieConditionInput
) {
  updateZombie(input: $input, condition: $condition) {
    id
    name
    hit_points
    turn_date
  }
}
`;
export const deleteZombie = `mutation DeleteZombie(
  $input: DeleteZombieInput!
  $condition: ModelZombieConditionInput
) {
  deleteZombie(input: $input, condition: $condition) {
    id
    name
    hit_points
    turn_date
  }
}
`;
