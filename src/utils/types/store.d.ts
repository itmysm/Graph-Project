export interface storeProcessType {
  app: {} | { name: String; os: String };
  step: Number;
  isValidExtension: Null | Boolean;
  isValidStructure: Null | Boolean;
  status: Null | Boolean;
  loading: Boolean;
}
