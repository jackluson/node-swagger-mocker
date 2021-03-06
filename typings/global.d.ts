import { Code } from '../routers/generateRouterHandler';
import { OpenAPI2SchemaObject } from '@manifoldco/swagger-to-ts/dist-types/types';

type Data = {
  code?: number;
  message?: string;
  data?: Record<string, any>;
  [key: string]: any;
};

declare interface MockResponse {
  code: Code;
  schemaConfig?: OpenAPI2SchemaObject;
  data?: Data;
  [key: string]: any;
}
