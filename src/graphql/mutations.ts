/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlumno = /* GraphQL */ `
  mutation CreateAlumno(
    $input: CreateAlumnoInput!
    $condition: ModelAlumnoConditionInput
  ) {
    createAlumno(input: $input, condition: $condition) {
      id
      nombre
      apellido_paterno
      apellido_materno
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAlumno = /* GraphQL */ `
  mutation UpdateAlumno(
    $input: UpdateAlumnoInput!
    $condition: ModelAlumnoConditionInput
  ) {
    updateAlumno(input: $input, condition: $condition) {
      id
      nombre
      apellido_paterno
      apellido_materno
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAlumno = /* GraphQL */ `
  mutation DeleteAlumno(
    $input: DeleteAlumnoInput!
    $condition: ModelAlumnoConditionInput
  ) {
    deleteAlumno(input: $input, condition: $condition) {
      id
      nombre
      apellido_paterno
      apellido_materno
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
