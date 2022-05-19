import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Chair = Node & {
  __typename?: 'Chair';
  arm?: Maybe<Scalars['Boolean']>;
  armmaterial?: Maybe<Scalars['String']>;
  backcolor?: Maybe<Scalars['String']>;
  backmaterial?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  headrest?: Maybe<Scalars['Boolean']>;
  heightadjustable?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  pushback?: Maybe<Scalars['String']>;
  seatcolor?: Maybe<Scalars['String']>;
  seatmaterial?: Maybe<Scalars['String']>;
  stand?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wheel?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Chair` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ChairCondition = {
  /** Checks for equality with the object’s `arm` field. */
  arm?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `armmaterial` field. */
  armmaterial?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `backcolor` field. */
  backcolor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `backmaterial` field. */
  backmaterial?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `color` field. */
  color?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headrest` field. */
  headrest?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `heightadjustable` field. */
  heightadjustable?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `pushback` field. */
  pushback?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `seatcolor` field. */
  seatcolor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `seatmaterial` field. */
  seatmaterial?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `stand` field. */
  stand?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `wheel` field. */
  wheel?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Chair` */
export type ChairInput = {
  arm?: InputMaybe<Scalars['Boolean']>;
  armmaterial?: InputMaybe<Scalars['String']>;
  backcolor?: InputMaybe<Scalars['String']>;
  backmaterial?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  headrest?: InputMaybe<Scalars['Boolean']>;
  heightadjustable?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  pushback?: InputMaybe<Scalars['String']>;
  seatcolor?: InputMaybe<Scalars['String']>;
  seatmaterial?: InputMaybe<Scalars['String']>;
  stand?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wheel?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Chair`. Fields that are set will be updated. */
export type ChairPatch = {
  arm?: InputMaybe<Scalars['Boolean']>;
  armmaterial?: InputMaybe<Scalars['String']>;
  backcolor?: InputMaybe<Scalars['String']>;
  backmaterial?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  headrest?: InputMaybe<Scalars['Boolean']>;
  heightadjustable?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  pushback?: InputMaybe<Scalars['String']>;
  seatcolor?: InputMaybe<Scalars['String']>;
  seatmaterial?: InputMaybe<Scalars['String']>;
  stand?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wheel?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Chair` values. */
export type ChairsConnection = {
  __typename?: 'ChairsConnection';
  /** A list of edges which contains the `Chair` and cursor to aid in pagination. */
  edges: Array<ChairsEdge>;
  /** A list of `Chair` objects. */
  nodes: Array<Maybe<Chair>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Chair` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Chair` edge in the connection. */
export type ChairsEdge = {
  __typename?: 'ChairsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Chair` at the end of the edge. */
  node?: Maybe<Chair>;
};

/** Methods to use when ordering `Chair`. */
export enum ChairsOrderBy {
  ArmmaterialAsc = 'ARMMATERIAL_ASC',
  ArmmaterialDesc = 'ARMMATERIAL_DESC',
  ArmAsc = 'ARM_ASC',
  ArmDesc = 'ARM_DESC',
  BackcolorAsc = 'BACKCOLOR_ASC',
  BackcolorDesc = 'BACKCOLOR_DESC',
  BackmaterialAsc = 'BACKMATERIAL_ASC',
  BackmaterialDesc = 'BACKMATERIAL_DESC',
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  HeadrestAsc = 'HEADREST_ASC',
  HeadrestDesc = 'HEADREST_DESC',
  HeightadjustableAsc = 'HEIGHTADJUSTABLE_ASC',
  HeightadjustableDesc = 'HEIGHTADJUSTABLE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PushbackAsc = 'PUSHBACK_ASC',
  PushbackDesc = 'PUSHBACK_DESC',
  SeatcolorAsc = 'SEATCOLOR_ASC',
  SeatcolorDesc = 'SEATCOLOR_DESC',
  SeatmaterialAsc = 'SEATMATERIAL_ASC',
  SeatmaterialDesc = 'SEATMATERIAL_DESC',
  StandAsc = 'STAND_ASC',
  StandDesc = 'STAND_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WheelAsc = 'WHEEL_ASC',
  WheelDesc = 'WHEEL_DESC'
}

/** All input for the create `Chair` mutation. */
export type CreateChairInput = {
  /** The `Chair` to be created by this mutation. */
  chair: ChairInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Chair` mutation. */
export type CreateChairPayload = {
  __typename?: 'CreateChairPayload';
  /** The `Chair` that was created by this mutation. */
  chair?: Maybe<Chair>;
  /** An edge for our `Chair`. May be used by Relay 1. */
  chairEdge?: Maybe<ChairsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Chair` mutation. */
export type CreateChairPayloadChairEdgeArgs = {
  orderBy?: InputMaybe<Array<ChairsOrderBy>>;
};

/** All input for the create `Migration` mutation. */
export type CreateMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Migration` to be created by this mutation. */
  migration: MigrationInput;
};

/** The output of our create `Migration` mutation. */
export type CreateMigrationPayload = {
  __typename?: 'CreateMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` that was created by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Migration` mutation. */
export type CreateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

/** All input for the `deleteChairById` mutation. */
export type DeleteChairByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteChair` mutation. */
export type DeleteChairInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Chair` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Chair` mutation. */
export type DeleteChairPayload = {
  __typename?: 'DeleteChairPayload';
  /** The `Chair` that was deleted by this mutation. */
  chair?: Maybe<Chair>;
  /** An edge for our `Chair`. May be used by Relay 1. */
  chairEdge?: Maybe<ChairsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedChairId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Chair` mutation. */
export type DeleteChairPayloadChairEdgeArgs = {
  orderBy?: InputMaybe<Array<ChairsOrderBy>>;
};

/** All input for the `deleteMigrationById` mutation. */
export type DeleteMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteMigration` mutation. */
export type DeleteMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Migration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayload = {
  __typename?: 'DeleteMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMigrationId?: Maybe<Scalars['ID']>;
  /** The `Migration` that was deleted by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

export type InstagramMedia = {
  __typename?: 'InstagramMedia';
  data?: Maybe<Array<Maybe<Media>>>;
  pagination?: Maybe<Pagination>;
};

export type Media = {
  __typename?: 'Media';
  id?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  media_url?: Maybe<Scalars['String']>;
};

export type Migration = Node & {
  __typename?: 'Migration';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  runOn: Scalars['Datetime'];
};

/**
 * A condition to be used against `Migration` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MigrationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runOn` field. */
  runOn?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Migration` */
export type MigrationInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  runOn: Scalars['Datetime'];
};

/** Represents an update to a `Migration`. Fields that are set will be updated. */
export type MigrationPatch = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  runOn?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Migration` values. */
export type MigrationsConnection = {
  __typename?: 'MigrationsConnection';
  /** A list of edges which contains the `Migration` and cursor to aid in pagination. */
  edges: Array<MigrationsEdge>;
  /** A list of `Migration` objects. */
  nodes: Array<Maybe<Migration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Migration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Migration` edge in the connection. */
export type MigrationsEdge = {
  __typename?: 'MigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Migration` at the end of the edge. */
  node?: Maybe<Migration>;
};

/** Methods to use when ordering `Migration`. */
export enum MigrationsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RunOnAsc = 'RUN_ON_ASC',
  RunOnDesc = 'RUN_ON_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Chair`. */
  createChair?: Maybe<CreateChairPayload>;
  /** Creates a single `Migration`. */
  createMigration?: Maybe<CreateMigrationPayload>;
  /** Deletes a single `Chair` using its globally unique id. */
  deleteChair?: Maybe<DeleteChairPayload>;
  /** Deletes a single `Chair` using a unique key. */
  deleteChairById?: Maybe<DeleteChairPayload>;
  /** Deletes a single `Migration` using its globally unique id. */
  deleteMigration?: Maybe<DeleteMigrationPayload>;
  /** Deletes a single `Migration` using a unique key. */
  deleteMigrationById?: Maybe<DeleteMigrationPayload>;
  /** Updates a single `Chair` using its globally unique id and a patch. */
  updateChair?: Maybe<UpdateChairPayload>;
  /** Updates a single `Chair` using a unique key and a patch. */
  updateChairById?: Maybe<UpdateChairPayload>;
  /** Updates a single `Migration` using its globally unique id and a patch. */
  updateMigration?: Maybe<UpdateMigrationPayload>;
  /** Updates a single `Migration` using a unique key and a patch. */
  updateMigrationById?: Maybe<UpdateMigrationPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChairArgs = {
  input: CreateChairInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMigrationArgs = {
  input: CreateMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChairArgs = {
  input: DeleteChairInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChairByIdArgs = {
  input: DeleteChairByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationArgs = {
  input: DeleteMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationByIdArgs = {
  input: DeleteMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChairArgs = {
  input: UpdateChairInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChairByIdArgs = {
  input: UpdateChairByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationArgs = {
  input: UpdateMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationByIdArgs = {
  input: UpdateMigrationByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Chair`. */
  allChairs?: Maybe<ChairsConnection>;
  /** Reads and enables pagination through a set of `Migration`. */
  allMigrations?: Maybe<MigrationsConnection>;
  /** Reads a single `Chair` using its globally unique `ID`. */
  chair?: Maybe<Chair>;
  chairById?: Maybe<Chair>;
  instagramMedia?: Maybe<InstagramMedia>;
  /** Reads a single `Migration` using its globally unique `ID`. */
  migration?: Maybe<Migration>;
  migrationById?: Maybe<Migration>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChairsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ChairCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChairsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MigrationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChairArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChairByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInstagramMediaArgs = {
  code: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

/** All input for the `updateChairById` mutation. */
export type UpdateChairByIdInput = {
  /** An object where the defined keys will be set on the `Chair` being updated. */
  chairPatch: ChairPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `updateChair` mutation. */
export type UpdateChairInput = {
  /** An object where the defined keys will be set on the `Chair` being updated. */
  chairPatch: ChairPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Chair` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Chair` mutation. */
export type UpdateChairPayload = {
  __typename?: 'UpdateChairPayload';
  /** The `Chair` that was updated by this mutation. */
  chair?: Maybe<Chair>;
  /** An edge for our `Chair`. May be used by Relay 1. */
  chairEdge?: Maybe<ChairsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Chair` mutation. */
export type UpdateChairPayloadChairEdgeArgs = {
  orderBy?: InputMaybe<Array<ChairsOrderBy>>;
};

/** All input for the `updateMigrationById` mutation. */
export type UpdateMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Migration` being updated. */
  migrationPatch: MigrationPatch;
};

/** All input for the `updateMigration` mutation. */
export type UpdateMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Migration` being updated. */
  migrationPatch: MigrationPatch;
  /** The globally unique `ID` which will identify a single `Migration` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayload = {
  __typename?: 'UpdateMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` that was updated by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

export type ChairDetailsFragment = { __typename?: 'Chair', id: any, name?: string | null, type?: string | null, arm?: boolean | null, armmaterial?: string | null, backcolor?: string | null, backmaterial?: string | null, seatcolor?: string | null, seatmaterial?: string | null, headrest?: boolean | null, heightadjustable?: string | null, price?: number | null, pushback?: string | null, stand?: string | null, wheel?: string | null };

export type ChairLiteFragment = { __typename?: 'Chair', id: any, name?: string | null, type?: string | null };

export type GetAllChairsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllChairsQuery = { __typename?: 'Query', allChairs?: { __typename?: 'ChairsConnection', nodes: Array<{ __typename?: 'Chair', id: any, name?: string | null, type?: string | null, arm?: boolean | null, armmaterial?: string | null, backcolor?: string | null, backmaterial?: string | null, seatcolor?: string | null, seatmaterial?: string | null, headrest?: boolean | null, heightadjustable?: string | null, price?: number | null, pushback?: string | null, stand?: string | null, wheel?: string | null } | null> } | null };

export type CreateChairMutationVariables = Exact<{
  input: CreateChairInput;
}>;


export type CreateChairMutation = { __typename?: 'Mutation', createChair?: { __typename?: 'CreateChairPayload', chair?: { __typename?: 'Chair', id: any, name?: string | null, type?: string | null, arm?: boolean | null, armmaterial?: string | null, backcolor?: string | null, backmaterial?: string | null, seatcolor?: string | null, seatmaterial?: string | null, headrest?: boolean | null, heightadjustable?: string | null, price?: number | null, pushback?: string | null, stand?: string | null, wheel?: string | null } | null } | null };

export type InstagramMediaFragment = { __typename?: 'InstagramMedia', data?: Array<{ __typename?: 'Media', id?: string | null, media_url?: string | null, media_type?: string | null } | null> | null, pagination?: { __typename?: 'Pagination', after?: string | null, before?: string | null } | null };

export type InstagramMediaQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type InstagramMediaQuery = { __typename?: 'Query', instagramMedia?: { __typename?: 'InstagramMedia', data?: Array<{ __typename?: 'Media', id?: string | null, media_url?: string | null, media_type?: string | null } | null> | null, pagination?: { __typename?: 'Pagination', after?: string | null, before?: string | null } | null } | null };

export const ChairDetailsFragmentDoc = gql`
    fragment ChairDetails on Chair {
  id
  name
  type
  arm
  armmaterial
  backcolor
  backmaterial
  seatcolor
  seatmaterial
  headrest
  heightadjustable
  price
  pushback
  stand
  wheel
}
    `;
export const ChairLiteFragmentDoc = gql`
    fragment ChairLite on Chair {
  id
  name
  type
}
    `;
export const InstagramMediaFragmentDoc = gql`
    fragment InstagramMedia on InstagramMedia {
  data {
    id
    media_url
    media_type
  }
  pagination {
    after
    before
  }
}
    `;
export const GetAllChairsDocument = gql`
    query getAllChairs {
  allChairs {
    nodes {
      ...ChairDetails
    }
  }
}
    ${ChairDetailsFragmentDoc}`;

/**
 * __useGetAllChairsQuery__
 *
 * To run a query within a React component, call `useGetAllChairsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllChairsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllChairsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllChairsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllChairsQuery, GetAllChairsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllChairsQuery, GetAllChairsQueryVariables>(GetAllChairsDocument, options);
      }
export function useGetAllChairsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllChairsQuery, GetAllChairsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllChairsQuery, GetAllChairsQueryVariables>(GetAllChairsDocument, options);
        }
export type GetAllChairsQueryHookResult = ReturnType<typeof useGetAllChairsQuery>;
export type GetAllChairsLazyQueryHookResult = ReturnType<typeof useGetAllChairsLazyQuery>;
export type GetAllChairsQueryResult = Apollo.QueryResult<GetAllChairsQuery, GetAllChairsQueryVariables>;
export const CreateChairDocument = gql`
    mutation createChair($input: CreateChairInput!) {
  createChair(input: $input) {
    chair {
      ...ChairDetails
    }
  }
}
    ${ChairDetailsFragmentDoc}`;
export type CreateChairMutationFn = Apollo.MutationFunction<CreateChairMutation, CreateChairMutationVariables>;

/**
 * __useCreateChairMutation__
 *
 * To run a mutation, you first call `useCreateChairMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChairMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChairMutation, { data, loading, error }] = useCreateChairMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChairMutation(baseOptions?: Apollo.MutationHookOptions<CreateChairMutation, CreateChairMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChairMutation, CreateChairMutationVariables>(CreateChairDocument, options);
      }
export type CreateChairMutationHookResult = ReturnType<typeof useCreateChairMutation>;
export type CreateChairMutationResult = Apollo.MutationResult<CreateChairMutation>;
export type CreateChairMutationOptions = Apollo.BaseMutationOptions<CreateChairMutation, CreateChairMutationVariables>;
export const InstagramMediaDocument = gql`
    query instagramMedia($code: String!) {
  instagramMedia(code: $code) {
    ...InstagramMedia
  }
}
    ${InstagramMediaFragmentDoc}`;

/**
 * __useInstagramMediaQuery__
 *
 * To run a query within a React component, call `useInstagramMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstagramMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstagramMediaQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useInstagramMediaQuery(baseOptions: Apollo.QueryHookOptions<InstagramMediaQuery, InstagramMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstagramMediaQuery, InstagramMediaQueryVariables>(InstagramMediaDocument, options);
      }
export function useInstagramMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstagramMediaQuery, InstagramMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstagramMediaQuery, InstagramMediaQueryVariables>(InstagramMediaDocument, options);
        }
export type InstagramMediaQueryHookResult = ReturnType<typeof useInstagramMediaQuery>;
export type InstagramMediaLazyQueryHookResult = ReturnType<typeof useInstagramMediaLazyQuery>;
export type InstagramMediaQueryResult = Apollo.QueryResult<InstagramMediaQuery, InstagramMediaQueryVariables>;