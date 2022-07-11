/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlumno = /* GraphQL */ `
  query GetAlumno($id: ID!) {
    getAlumno(id: $id) {
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
export const listAlumnos = /* GraphQL */ `
  query ListAlumnos(
    $filter: ModelAlumnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlumnos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAlumnos = /* GraphQL */ `
  query SyncAlumnos(
    $filter: ModelAlumnoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlumnos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
