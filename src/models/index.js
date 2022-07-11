// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Alumno } = initSchema(schema);

export {
  Alumno
};