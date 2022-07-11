import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AlumnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Alumno {
  readonly id: string;
  readonly nombre: string;
  readonly apellido_paterno: string;
  readonly apellido_materno: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Alumno, AlumnoMetaData>);
  static copyOf(source: Alumno, mutator: (draft: MutableModel<Alumno, AlumnoMetaData>) => MutableModel<Alumno, AlumnoMetaData> | void): Alumno;
}