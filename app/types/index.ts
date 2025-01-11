export type Codes = {
  name: string;
} & ({ code: string; link?: never } | { code?: never; link: string });

export type Config = {
  username: string;
  codes?: Codes[];
};
