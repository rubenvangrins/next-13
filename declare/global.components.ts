export interface TextCompInterface {
  body: string;
}

export interface ComponentInterface extends TextCompInterface {
  __typename: string;
}
