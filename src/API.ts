/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlumnoInput = {
  id?: string | null,
  nombre: string,
  apellido_paterno: string,
  apellido_materno: string,
  _version?: number | null,
};

export type ModelAlumnoConditionInput = {
  nombre?: ModelStringInput | null,
  apellido_paterno?: ModelStringInput | null,
  apellido_materno?: ModelStringInput | null,
  and?: Array< ModelAlumnoConditionInput | null > | null,
  or?: Array< ModelAlumnoConditionInput | null > | null,
  not?: ModelAlumnoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Alumno = {
  __typename: "Alumno",
  id: string,
  nombre: string,
  apellido_paterno: string,
  apellido_materno: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAlumnoInput = {
  id: string,
  nombre?: string | null,
  apellido_paterno?: string | null,
  apellido_materno?: string | null,
  _version?: number | null,
};

export type DeleteAlumnoInput = {
  id: string,
  _version?: number | null,
};

export type ModelAlumnoFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  apellido_paterno?: ModelStringInput | null,
  apellido_materno?: ModelStringInput | null,
  and?: Array< ModelAlumnoFilterInput | null > | null,
  or?: Array< ModelAlumnoFilterInput | null > | null,
  not?: ModelAlumnoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAlumnoConnection = {
  __typename: "ModelAlumnoConnection",
  items:  Array<Alumno | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateAlumnoMutationVariables = {
  input: CreateAlumnoInput,
  condition?: ModelAlumnoConditionInput | null,
};

export type CreateAlumnoMutation = {
  createAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAlumnoMutationVariables = {
  input: UpdateAlumnoInput,
  condition?: ModelAlumnoConditionInput | null,
};

export type UpdateAlumnoMutation = {
  updateAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAlumnoMutationVariables = {
  input: DeleteAlumnoInput,
  condition?: ModelAlumnoConditionInput | null,
};

export type DeleteAlumnoMutation = {
  deleteAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetAlumnoQueryVariables = {
  id: string,
};

export type GetAlumnoQuery = {
  getAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAlumnosQueryVariables = {
  filter?: ModelAlumnoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlumnosQuery = {
  listAlumnos?:  {
    __typename: "ModelAlumnoConnection",
    items:  Array< {
      __typename: "Alumno",
      id: string,
      nombre: string,
      apellido_paterno: string,
      apellido_materno: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAlumnosQueryVariables = {
  filter?: ModelAlumnoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAlumnosQuery = {
  syncAlumnos?:  {
    __typename: "ModelAlumnoConnection",
    items:  Array< {
      __typename: "Alumno",
      id: string,
      nombre: string,
      apellido_paterno: string,
      apellido_materno: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAlumnoSubscription = {
  onCreateAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAlumnoSubscription = {
  onUpdateAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAlumnoSubscription = {
  onDeleteAlumno?:  {
    __typename: "Alumno",
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
