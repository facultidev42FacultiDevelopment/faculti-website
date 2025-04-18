
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model Writer
 * 
 */
export type Writer = $Result.DefaultSelection<Prisma.$WriterPayload>
/**
 * Model CategoryToPost
 * 
 */
export type CategoryToPost = $Result.DefaultSelection<Prisma.$CategoryToPostPayload>
/**
 * Model TagToPost
 * 
 */
export type TagToPost = $Result.DefaultSelection<Prisma.$TagToPostPayload>
/**
 * Model InstitutionToPost
 * 
 */
export type InstitutionToPost = $Result.DefaultSelection<Prisma.$InstitutionToPostPayload>
/**
 * Model WriterToPost
 * 
 */
export type WriterToPost = $Result.DefaultSelection<Prisma.$WriterToPostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoryType: {
  PARENT: 'PARENT',
  DAUGHTER: 'DAUGHTER',
  SUB: 'SUB'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]

}

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writer`: Exposes CRUD operations for the **Writer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Writers
    * const writers = await prisma.writer.findMany()
    * ```
    */
  get writer(): Prisma.WriterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryToPost`: Exposes CRUD operations for the **CategoryToPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryToPosts
    * const categoryToPosts = await prisma.categoryToPost.findMany()
    * ```
    */
  get categoryToPost(): Prisma.CategoryToPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagToPost`: Exposes CRUD operations for the **TagToPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagToPosts
    * const tagToPosts = await prisma.tagToPost.findMany()
    * ```
    */
  get tagToPost(): Prisma.TagToPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institutionToPost`: Exposes CRUD operations for the **InstitutionToPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionToPosts
    * const institutionToPosts = await prisma.institutionToPost.findMany()
    * ```
    */
  get institutionToPost(): Prisma.InstitutionToPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writerToPost`: Exposes CRUD operations for the **WriterToPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WriterToPosts
    * const writerToPosts = await prisma.writerToPost.findMany()
    * ```
    */
  get writerToPost(): Prisma.WriterToPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    Category: 'Category',
    Tag: 'Tag',
    Institution: 'Institution',
    Writer: 'Writer',
    CategoryToPost: 'CategoryToPost',
    TagToPost: 'TagToPost',
    InstitutionToPost: 'InstitutionToPost',
    WriterToPost: 'WriterToPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "category" | "tag" | "institution" | "writer" | "categoryToPost" | "tagToPost" | "institutionToPost" | "writerToPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      Writer: {
        payload: Prisma.$WriterPayload<ExtArgs>
        fields: Prisma.WriterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WriterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WriterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          findFirst: {
            args: Prisma.WriterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WriterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          findMany: {
            args: Prisma.WriterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>[]
          }
          create: {
            args: Prisma.WriterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          createMany: {
            args: Prisma.WriterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WriterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>[]
          }
          delete: {
            args: Prisma.WriterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          update: {
            args: Prisma.WriterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          deleteMany: {
            args: Prisma.WriterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WriterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WriterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>[]
          }
          upsert: {
            args: Prisma.WriterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          aggregate: {
            args: Prisma.WriterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWriter>
          }
          groupBy: {
            args: Prisma.WriterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WriterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WriterCountArgs<ExtArgs>
            result: $Utils.Optional<WriterCountAggregateOutputType> | number
          }
        }
      }
      CategoryToPost: {
        payload: Prisma.$CategoryToPostPayload<ExtArgs>
        fields: Prisma.CategoryToPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryToPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryToPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          findFirst: {
            args: Prisma.CategoryToPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryToPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          findMany: {
            args: Prisma.CategoryToPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>[]
          }
          create: {
            args: Prisma.CategoryToPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          createMany: {
            args: Prisma.CategoryToPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryToPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>[]
          }
          delete: {
            args: Prisma.CategoryToPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          update: {
            args: Prisma.CategoryToPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          deleteMany: {
            args: Prisma.CategoryToPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryToPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryToPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>[]
          }
          upsert: {
            args: Prisma.CategoryToPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryToPostPayload>
          }
          aggregate: {
            args: Prisma.CategoryToPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryToPost>
          }
          groupBy: {
            args: Prisma.CategoryToPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryToPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryToPostCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryToPostCountAggregateOutputType> | number
          }
        }
      }
      TagToPost: {
        payload: Prisma.$TagToPostPayload<ExtArgs>
        fields: Prisma.TagToPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagToPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagToPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          findFirst: {
            args: Prisma.TagToPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagToPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          findMany: {
            args: Prisma.TagToPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>[]
          }
          create: {
            args: Prisma.TagToPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          createMany: {
            args: Prisma.TagToPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagToPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>[]
          }
          delete: {
            args: Prisma.TagToPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          update: {
            args: Prisma.TagToPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          deleteMany: {
            args: Prisma.TagToPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagToPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagToPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>[]
          }
          upsert: {
            args: Prisma.TagToPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagToPostPayload>
          }
          aggregate: {
            args: Prisma.TagToPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTagToPost>
          }
          groupBy: {
            args: Prisma.TagToPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagToPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagToPostCountArgs<ExtArgs>
            result: $Utils.Optional<TagToPostCountAggregateOutputType> | number
          }
        }
      }
      InstitutionToPost: {
        payload: Prisma.$InstitutionToPostPayload<ExtArgs>
        fields: Prisma.InstitutionToPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionToPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionToPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          findFirst: {
            args: Prisma.InstitutionToPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionToPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          findMany: {
            args: Prisma.InstitutionToPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>[]
          }
          create: {
            args: Prisma.InstitutionToPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          createMany: {
            args: Prisma.InstitutionToPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionToPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>[]
          }
          delete: {
            args: Prisma.InstitutionToPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          update: {
            args: Prisma.InstitutionToPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionToPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionToPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionToPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionToPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionToPostPayload>
          }
          aggregate: {
            args: Prisma.InstitutionToPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitutionToPost>
          }
          groupBy: {
            args: Prisma.InstitutionToPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionToPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionToPostCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionToPostCountAggregateOutputType> | number
          }
        }
      }
      WriterToPost: {
        payload: Prisma.$WriterToPostPayload<ExtArgs>
        fields: Prisma.WriterToPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WriterToPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WriterToPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          findFirst: {
            args: Prisma.WriterToPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WriterToPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          findMany: {
            args: Prisma.WriterToPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>[]
          }
          create: {
            args: Prisma.WriterToPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          createMany: {
            args: Prisma.WriterToPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WriterToPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>[]
          }
          delete: {
            args: Prisma.WriterToPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          update: {
            args: Prisma.WriterToPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          deleteMany: {
            args: Prisma.WriterToPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WriterToPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WriterToPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>[]
          }
          upsert: {
            args: Prisma.WriterToPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterToPostPayload>
          }
          aggregate: {
            args: Prisma.WriterToPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWriterToPost>
          }
          groupBy: {
            args: Prisma.WriterToPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<WriterToPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.WriterToPostCountArgs<ExtArgs>
            result: $Utils.Optional<WriterToPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    category?: CategoryOmit
    tag?: TagOmit
    institution?: InstitutionOmit
    writer?: WriterOmit
    categoryToPost?: CategoryToPostOmit
    tagToPost?: TagToPostOmit
    institutionToPost?: InstitutionToPostOmit
    writerToPost?: WriterToPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    categories: number
    tags: number
    institutions: number
    writers: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    institutions?: boolean | PostCountOutputTypeCountInstitutionsArgs
    writers?: boolean | PostCountOutputTypeCountWritersArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryToPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagToPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountInstitutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionToPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountWritersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterToPostWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    daughters: number
    subs: number
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daughters?: boolean | CategoryCountOutputTypeCountDaughtersArgs
    subs?: boolean | CategoryCountOutputTypeCountSubsArgs
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDaughtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryToPostWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagToPostWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    posts: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | InstitutionCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionToPostWhereInput
  }


  /**
   * Count Type WriterCountOutputType
   */

  export type WriterCountOutputType = {
    posts: number
  }

  export type WriterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | WriterCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterCountOutputType
     */
    select?: WriterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterToPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    menuOrder: number | null
  }

  export type PostSumAggregateOutputType = {
    menuOrder: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    excerpt: string | null
    imageUrl: string | null
    date: Date | null
    dateGmt: Date | null
    modified: Date | null
    modifiedGmt: Date | null
    slug: string | null
    status: string | null
    commentStatus: string | null
    pingStatus: string | null
    guid: string | null
    menuOrder: number | null
    vimeoVideoId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    excerpt: string | null
    imageUrl: string | null
    date: Date | null
    dateGmt: Date | null
    modified: Date | null
    modifiedGmt: Date | null
    slug: string | null
    status: string | null
    commentStatus: string | null
    pingStatus: string | null
    guid: string | null
    menuOrder: number | null
    vimeoVideoId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    excerpt: number
    imageUrl: number
    date: number
    dateGmt: number
    modified: number
    modifiedGmt: number
    slug: number
    status: number
    commentStatus: number
    pingStatus: number
    guid: number
    menuOrder: number
    vimeoVideoId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    menuOrder?: true
  }

  export type PostSumAggregateInputType = {
    menuOrder?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    excerpt?: true
    imageUrl?: true
    date?: true
    dateGmt?: true
    modified?: true
    modifiedGmt?: true
    slug?: true
    status?: true
    commentStatus?: true
    pingStatus?: true
    guid?: true
    menuOrder?: true
    vimeoVideoId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    excerpt?: true
    imageUrl?: true
    date?: true
    dateGmt?: true
    modified?: true
    modifiedGmt?: true
    slug?: true
    status?: true
    commentStatus?: true
    pingStatus?: true
    guid?: true
    menuOrder?: true
    vimeoVideoId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    excerpt?: true
    imageUrl?: true
    date?: true
    dateGmt?: true
    modified?: true
    modifiedGmt?: true
    slug?: true
    status?: true
    commentStatus?: true
    pingStatus?: true
    guid?: true
    menuOrder?: true
    vimeoVideoId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    excerpt: string | null
    imageUrl: string | null
    date: Date
    dateGmt: Date
    modified: Date | null
    modifiedGmt: Date | null
    slug: string
    status: string
    commentStatus: string
    pingStatus: string
    guid: string | null
    menuOrder: number
    vimeoVideoId: string | null
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    imageUrl?: boolean
    date?: boolean
    dateGmt?: boolean
    modified?: boolean
    modifiedGmt?: boolean
    slug?: boolean
    status?: boolean
    commentStatus?: boolean
    pingStatus?: boolean
    guid?: boolean
    menuOrder?: boolean
    vimeoVideoId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    institutions?: boolean | Post$institutionsArgs<ExtArgs>
    writers?: boolean | Post$writersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    imageUrl?: boolean
    date?: boolean
    dateGmt?: boolean
    modified?: boolean
    modifiedGmt?: boolean
    slug?: boolean
    status?: boolean
    commentStatus?: boolean
    pingStatus?: boolean
    guid?: boolean
    menuOrder?: boolean
    vimeoVideoId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    imageUrl?: boolean
    date?: boolean
    dateGmt?: boolean
    modified?: boolean
    modifiedGmt?: boolean
    slug?: boolean
    status?: boolean
    commentStatus?: boolean
    pingStatus?: boolean
    guid?: boolean
    menuOrder?: boolean
    vimeoVideoId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    imageUrl?: boolean
    date?: boolean
    dateGmt?: boolean
    modified?: boolean
    modifiedGmt?: boolean
    slug?: boolean
    status?: boolean
    commentStatus?: boolean
    pingStatus?: boolean
    guid?: boolean
    menuOrder?: boolean
    vimeoVideoId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "excerpt" | "imageUrl" | "date" | "dateGmt" | "modified" | "modifiedGmt" | "slug" | "status" | "commentStatus" | "pingStatus" | "guid" | "menuOrder" | "vimeoVideoId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    institutions?: boolean | Post$institutionsArgs<ExtArgs>
    writers?: boolean | Post$writersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$CategoryToPostPayload<ExtArgs>[]
      tags: Prisma.$TagToPostPayload<ExtArgs>[]
      institutions: Prisma.$InstitutionToPostPayload<ExtArgs>[]
      writers: Prisma.$WriterToPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      excerpt: string | null
      imageUrl: string | null
      date: Date
      dateGmt: Date
      modified: Date | null
      modifiedGmt: Date | null
      slug: string
      status: string
      commentStatus: string
      pingStatus: string
      guid: string | null
      menuOrder: number
      vimeoVideoId: string | null
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    institutions<T extends Post$institutionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$institutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    writers<T extends Post$writersArgs<ExtArgs> = {}>(args?: Subset<T, Post$writersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly date: FieldRef<"Post", 'DateTime'>
    readonly dateGmt: FieldRef<"Post", 'DateTime'>
    readonly modified: FieldRef<"Post", 'DateTime'>
    readonly modifiedGmt: FieldRef<"Post", 'DateTime'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'String'>
    readonly commentStatus: FieldRef<"Post", 'String'>
    readonly pingStatus: FieldRef<"Post", 'String'>
    readonly guid: FieldRef<"Post", 'String'>
    readonly menuOrder: FieldRef<"Post", 'Int'>
    readonly vimeoVideoId: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    where?: CategoryToPostWhereInput
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    cursor?: CategoryToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryToPostScalarFieldEnum | CategoryToPostScalarFieldEnum[]
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    where?: TagToPostWhereInput
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    cursor?: TagToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagToPostScalarFieldEnum | TagToPostScalarFieldEnum[]
  }

  /**
   * Post.institutions
   */
  export type Post$institutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    where?: InstitutionToPostWhereInput
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    cursor?: InstitutionToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionToPostScalarFieldEnum | InstitutionToPostScalarFieldEnum[]
  }

  /**
   * Post.writers
   */
  export type Post$writersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    where?: WriterToPostWhereInput
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    cursor?: WriterToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WriterToPostScalarFieldEnum | WriterToPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    url: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    url: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    url: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    url?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    url?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    url?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string | null
    url: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    url?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    url?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    url?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    url?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "url" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string | null
      url: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly slug: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly url: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.CategoryType | null
    parentId: string | null
    daughterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.CategoryType | null
    parentId: string | null
    daughterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    type: number
    parentId: number
    daughterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    parentId?: true
    daughterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    parentId?: true
    daughterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    parentId?: true
    daughterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId: string | null
    daughterId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    parentId?: boolean
    daughterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughters?: boolean | Category$daughtersArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
    subs?: boolean | Category$subsArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    parentId?: boolean
    daughterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    parentId?: boolean
    daughterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    parentId?: boolean
    daughterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "type" | "parentId" | "daughterId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughters?: boolean | Category$daughtersArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
    subs?: boolean | Category$subsArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    daughter?: boolean | Category$daughterArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      daughters: Prisma.$CategoryPayload<ExtArgs>[]
      daughter: Prisma.$CategoryPayload<ExtArgs> | null
      subs: Prisma.$CategoryPayload<ExtArgs>[]
      posts: Prisma.$CategoryToPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      type: $Enums.CategoryType
      parentId: string | null
      daughterId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    daughters<T extends Category$daughtersArgs<ExtArgs> = {}>(args?: Subset<T, Category$daughtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daughter<T extends Category$daughterArgs<ExtArgs> = {}>(args?: Subset<T, Category$daughterArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subs<T extends Category$subsArgs<ExtArgs> = {}>(args?: Subset<T, Category$subsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly daughterId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.daughters
   */
  export type Category$daughtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.daughter
   */
  export type Category$daughterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.subs
   */
  export type Category$subsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    where?: CategoryToPostWhereInput
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    cursor?: CategoryToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryToPostScalarFieldEnum | CategoryToPostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      posts: Prisma.$TagToPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    where?: TagToPostWhereInput
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    cursor?: TagToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagToPostScalarFieldEnum | TagToPostScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Institution$postsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Institution$postsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      posts: Prisma.$InstitutionToPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Institution$postsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'String'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly slug: FieldRef<"Institution", 'String'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
    readonly updatedAt: FieldRef<"Institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.posts
   */
  export type Institution$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    where?: InstitutionToPostWhereInput
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    cursor?: InstitutionToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionToPostScalarFieldEnum | InstitutionToPostScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model Writer
   */

  export type AggregateWriter = {
    _count: WriterCountAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  export type WriterMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WriterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WriterCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    imgUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WriterMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WriterMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WriterCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WriterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writer to aggregate.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Writers
    **/
    _count?: true | WriterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WriterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WriterMaxAggregateInputType
  }

  export type GetWriterAggregateType<T extends WriterAggregateArgs> = {
        [P in keyof T & keyof AggregateWriter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWriter[P]>
      : GetScalarType<T[P], AggregateWriter[P]>
  }




  export type WriterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterWhereInput
    orderBy?: WriterOrderByWithAggregationInput | WriterOrderByWithAggregationInput[]
    by: WriterScalarFieldEnum[] | WriterScalarFieldEnum
    having?: WriterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WriterCountAggregateInputType | true
    _min?: WriterMinAggregateInputType
    _max?: WriterMaxAggregateInputType
  }

  export type WriterGroupByOutputType = {
    id: string
    name: string
    slug: string
    imgUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: WriterCountAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  type GetWriterGroupByPayload<T extends WriterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WriterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WriterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WriterGroupByOutputType[P]>
            : GetScalarType<T[P], WriterGroupByOutputType[P]>
        }
      >
    >


  export type WriterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Writer$postsArgs<ExtArgs>
    _count?: boolean | WriterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writer"]>

  export type WriterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["writer"]>

  export type WriterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["writer"]>

  export type WriterSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WriterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "imgUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["writer"]>
  export type WriterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Writer$postsArgs<ExtArgs>
    _count?: boolean | WriterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WriterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WriterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WriterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Writer"
    objects: {
      posts: Prisma.$WriterToPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      imgUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["writer"]>
    composites: {}
  }

  type WriterGetPayload<S extends boolean | null | undefined | WriterDefaultArgs> = $Result.GetResult<Prisma.$WriterPayload, S>

  type WriterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WriterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WriterCountAggregateInputType | true
    }

  export interface WriterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Writer'], meta: { name: 'Writer' } }
    /**
     * Find zero or one Writer that matches the filter.
     * @param {WriterFindUniqueArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WriterFindUniqueArgs>(args: SelectSubset<T, WriterFindUniqueArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Writer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WriterFindUniqueOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WriterFindUniqueOrThrowArgs>(args: SelectSubset<T, WriterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Writer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WriterFindFirstArgs>(args?: SelectSubset<T, WriterFindFirstArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Writer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WriterFindFirstOrThrowArgs>(args?: SelectSubset<T, WriterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Writers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Writers
     * const writers = await prisma.writer.findMany()
     * 
     * // Get first 10 Writers
     * const writers = await prisma.writer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writerWithIdOnly = await prisma.writer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WriterFindManyArgs>(args?: SelectSubset<T, WriterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Writer.
     * @param {WriterCreateArgs} args - Arguments to create a Writer.
     * @example
     * // Create one Writer
     * const Writer = await prisma.writer.create({
     *   data: {
     *     // ... data to create a Writer
     *   }
     * })
     * 
     */
    create<T extends WriterCreateArgs>(args: SelectSubset<T, WriterCreateArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Writers.
     * @param {WriterCreateManyArgs} args - Arguments to create many Writers.
     * @example
     * // Create many Writers
     * const writer = await prisma.writer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WriterCreateManyArgs>(args?: SelectSubset<T, WriterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Writers and returns the data saved in the database.
     * @param {WriterCreateManyAndReturnArgs} args - Arguments to create many Writers.
     * @example
     * // Create many Writers
     * const writer = await prisma.writer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Writers and only return the `id`
     * const writerWithIdOnly = await prisma.writer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WriterCreateManyAndReturnArgs>(args?: SelectSubset<T, WriterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Writer.
     * @param {WriterDeleteArgs} args - Arguments to delete one Writer.
     * @example
     * // Delete one Writer
     * const Writer = await prisma.writer.delete({
     *   where: {
     *     // ... filter to delete one Writer
     *   }
     * })
     * 
     */
    delete<T extends WriterDeleteArgs>(args: SelectSubset<T, WriterDeleteArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Writer.
     * @param {WriterUpdateArgs} args - Arguments to update one Writer.
     * @example
     * // Update one Writer
     * const writer = await prisma.writer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WriterUpdateArgs>(args: SelectSubset<T, WriterUpdateArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Writers.
     * @param {WriterDeleteManyArgs} args - Arguments to filter Writers to delete.
     * @example
     * // Delete a few Writers
     * const { count } = await prisma.writer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WriterDeleteManyArgs>(args?: SelectSubset<T, WriterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Writers
     * const writer = await prisma.writer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WriterUpdateManyArgs>(args: SelectSubset<T, WriterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Writers and returns the data updated in the database.
     * @param {WriterUpdateManyAndReturnArgs} args - Arguments to update many Writers.
     * @example
     * // Update many Writers
     * const writer = await prisma.writer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Writers and only return the `id`
     * const writerWithIdOnly = await prisma.writer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WriterUpdateManyAndReturnArgs>(args: SelectSubset<T, WriterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Writer.
     * @param {WriterUpsertArgs} args - Arguments to update or create a Writer.
     * @example
     * // Update or create a Writer
     * const writer = await prisma.writer.upsert({
     *   create: {
     *     // ... data to create a Writer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Writer we want to update
     *   }
     * })
     */
    upsert<T extends WriterUpsertArgs>(args: SelectSubset<T, WriterUpsertArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterCountArgs} args - Arguments to filter Writers to count.
     * @example
     * // Count the number of Writers
     * const count = await prisma.writer.count({
     *   where: {
     *     // ... the filter for the Writers we want to count
     *   }
     * })
    **/
    count<T extends WriterCountArgs>(
      args?: Subset<T, WriterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WriterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WriterAggregateArgs>(args: Subset<T, WriterAggregateArgs>): Prisma.PrismaPromise<GetWriterAggregateType<T>>

    /**
     * Group by Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WriterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WriterGroupByArgs['orderBy'] }
        : { orderBy?: WriterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WriterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Writer model
   */
  readonly fields: WriterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Writer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WriterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Writer$postsArgs<ExtArgs> = {}>(args?: Subset<T, Writer$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Writer model
   */
  interface WriterFieldRefs {
    readonly id: FieldRef<"Writer", 'String'>
    readonly name: FieldRef<"Writer", 'String'>
    readonly slug: FieldRef<"Writer", 'String'>
    readonly imgUrl: FieldRef<"Writer", 'String'>
    readonly createdAt: FieldRef<"Writer", 'DateTime'>
    readonly updatedAt: FieldRef<"Writer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Writer findUnique
   */
  export type WriterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer findUniqueOrThrow
   */
  export type WriterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer findFirst
   */
  export type WriterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writers.
     */
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer findFirstOrThrow
   */
  export type WriterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writers.
     */
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer findMany
   */
  export type WriterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writers to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer create
   */
  export type WriterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The data needed to create a Writer.
     */
    data: XOR<WriterCreateInput, WriterUncheckedCreateInput>
  }

  /**
   * Writer createMany
   */
  export type WriterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Writers.
     */
    data: WriterCreateManyInput | WriterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Writer createManyAndReturn
   */
  export type WriterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * The data used to create many Writers.
     */
    data: WriterCreateManyInput | WriterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Writer update
   */
  export type WriterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The data needed to update a Writer.
     */
    data: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
    /**
     * Choose, which Writer to update.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer updateMany
   */
  export type WriterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Writers.
     */
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyInput>
    /**
     * Filter which Writers to update
     */
    where?: WriterWhereInput
    /**
     * Limit how many Writers to update.
     */
    limit?: number
  }

  /**
   * Writer updateManyAndReturn
   */
  export type WriterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * The data used to update Writers.
     */
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyInput>
    /**
     * Filter which Writers to update
     */
    where?: WriterWhereInput
    /**
     * Limit how many Writers to update.
     */
    limit?: number
  }

  /**
   * Writer upsert
   */
  export type WriterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The filter to search for the Writer to update in case it exists.
     */
    where: WriterWhereUniqueInput
    /**
     * In case the Writer found by the `where` argument doesn't exist, create a new Writer with this data.
     */
    create: XOR<WriterCreateInput, WriterUncheckedCreateInput>
    /**
     * In case the Writer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
  }

  /**
   * Writer delete
   */
  export type WriterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter which Writer to delete.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer deleteMany
   */
  export type WriterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writers to delete
     */
    where?: WriterWhereInput
    /**
     * Limit how many Writers to delete.
     */
    limit?: number
  }

  /**
   * Writer.posts
   */
  export type Writer$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    where?: WriterToPostWhereInput
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    cursor?: WriterToPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WriterToPostScalarFieldEnum | WriterToPostScalarFieldEnum[]
  }

  /**
   * Writer without action
   */
  export type WriterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
  }


  /**
   * Model CategoryToPost
   */

  export type AggregateCategoryToPost = {
    _count: CategoryToPostCountAggregateOutputType | null
    _min: CategoryToPostMinAggregateOutputType | null
    _max: CategoryToPostMaxAggregateOutputType | null
  }

  export type CategoryToPostMinAggregateOutputType = {
    postId: string | null
    categoryId: string | null
  }

  export type CategoryToPostMaxAggregateOutputType = {
    postId: string | null
    categoryId: string | null
  }

  export type CategoryToPostCountAggregateOutputType = {
    postId: number
    categoryId: number
    _all: number
  }


  export type CategoryToPostMinAggregateInputType = {
    postId?: true
    categoryId?: true
  }

  export type CategoryToPostMaxAggregateInputType = {
    postId?: true
    categoryId?: true
  }

  export type CategoryToPostCountAggregateInputType = {
    postId?: true
    categoryId?: true
    _all?: true
  }

  export type CategoryToPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryToPost to aggregate.
     */
    where?: CategoryToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryToPosts to fetch.
     */
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryToPosts
    **/
    _count?: true | CategoryToPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryToPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryToPostMaxAggregateInputType
  }

  export type GetCategoryToPostAggregateType<T extends CategoryToPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryToPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryToPost[P]>
      : GetScalarType<T[P], AggregateCategoryToPost[P]>
  }




  export type CategoryToPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryToPostWhereInput
    orderBy?: CategoryToPostOrderByWithAggregationInput | CategoryToPostOrderByWithAggregationInput[]
    by: CategoryToPostScalarFieldEnum[] | CategoryToPostScalarFieldEnum
    having?: CategoryToPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryToPostCountAggregateInputType | true
    _min?: CategoryToPostMinAggregateInputType
    _max?: CategoryToPostMaxAggregateInputType
  }

  export type CategoryToPostGroupByOutputType = {
    postId: string
    categoryId: string
    _count: CategoryToPostCountAggregateOutputType | null
    _min: CategoryToPostMinAggregateOutputType | null
    _max: CategoryToPostMaxAggregateOutputType | null
  }

  type GetCategoryToPostGroupByPayload<T extends CategoryToPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryToPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryToPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryToPostGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryToPostGroupByOutputType[P]>
        }
      >
    >


  export type CategoryToPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryToPost"]>

  export type CategoryToPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryToPost"]>

  export type CategoryToPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryToPost"]>

  export type CategoryToPostSelectScalar = {
    postId?: boolean
    categoryId?: boolean
  }

  export type CategoryToPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "categoryId", ExtArgs["result"]["categoryToPost"]>
  export type CategoryToPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryToPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryToPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryToPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryToPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      categoryId: string
    }, ExtArgs["result"]["categoryToPost"]>
    composites: {}
  }

  type CategoryToPostGetPayload<S extends boolean | null | undefined | CategoryToPostDefaultArgs> = $Result.GetResult<Prisma.$CategoryToPostPayload, S>

  type CategoryToPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryToPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryToPostCountAggregateInputType | true
    }

  export interface CategoryToPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryToPost'], meta: { name: 'CategoryToPost' } }
    /**
     * Find zero or one CategoryToPost that matches the filter.
     * @param {CategoryToPostFindUniqueArgs} args - Arguments to find a CategoryToPost
     * @example
     * // Get one CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryToPostFindUniqueArgs>(args: SelectSubset<T, CategoryToPostFindUniqueArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryToPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryToPostFindUniqueOrThrowArgs} args - Arguments to find a CategoryToPost
     * @example
     * // Get one CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryToPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryToPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryToPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostFindFirstArgs} args - Arguments to find a CategoryToPost
     * @example
     * // Get one CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryToPostFindFirstArgs>(args?: SelectSubset<T, CategoryToPostFindFirstArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryToPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostFindFirstOrThrowArgs} args - Arguments to find a CategoryToPost
     * @example
     * // Get one CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryToPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryToPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryToPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryToPosts
     * const categoryToPosts = await prisma.categoryToPost.findMany()
     * 
     * // Get first 10 CategoryToPosts
     * const categoryToPosts = await prisma.categoryToPost.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const categoryToPostWithPostIdOnly = await prisma.categoryToPost.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends CategoryToPostFindManyArgs>(args?: SelectSubset<T, CategoryToPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryToPost.
     * @param {CategoryToPostCreateArgs} args - Arguments to create a CategoryToPost.
     * @example
     * // Create one CategoryToPost
     * const CategoryToPost = await prisma.categoryToPost.create({
     *   data: {
     *     // ... data to create a CategoryToPost
     *   }
     * })
     * 
     */
    create<T extends CategoryToPostCreateArgs>(args: SelectSubset<T, CategoryToPostCreateArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryToPosts.
     * @param {CategoryToPostCreateManyArgs} args - Arguments to create many CategoryToPosts.
     * @example
     * // Create many CategoryToPosts
     * const categoryToPost = await prisma.categoryToPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryToPostCreateManyArgs>(args?: SelectSubset<T, CategoryToPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryToPosts and returns the data saved in the database.
     * @param {CategoryToPostCreateManyAndReturnArgs} args - Arguments to create many CategoryToPosts.
     * @example
     * // Create many CategoryToPosts
     * const categoryToPost = await prisma.categoryToPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryToPosts and only return the `postId`
     * const categoryToPostWithPostIdOnly = await prisma.categoryToPost.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryToPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryToPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryToPost.
     * @param {CategoryToPostDeleteArgs} args - Arguments to delete one CategoryToPost.
     * @example
     * // Delete one CategoryToPost
     * const CategoryToPost = await prisma.categoryToPost.delete({
     *   where: {
     *     // ... filter to delete one CategoryToPost
     *   }
     * })
     * 
     */
    delete<T extends CategoryToPostDeleteArgs>(args: SelectSubset<T, CategoryToPostDeleteArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryToPost.
     * @param {CategoryToPostUpdateArgs} args - Arguments to update one CategoryToPost.
     * @example
     * // Update one CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryToPostUpdateArgs>(args: SelectSubset<T, CategoryToPostUpdateArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryToPosts.
     * @param {CategoryToPostDeleteManyArgs} args - Arguments to filter CategoryToPosts to delete.
     * @example
     * // Delete a few CategoryToPosts
     * const { count } = await prisma.categoryToPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryToPostDeleteManyArgs>(args?: SelectSubset<T, CategoryToPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryToPosts
     * const categoryToPost = await prisma.categoryToPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryToPostUpdateManyArgs>(args: SelectSubset<T, CategoryToPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryToPosts and returns the data updated in the database.
     * @param {CategoryToPostUpdateManyAndReturnArgs} args - Arguments to update many CategoryToPosts.
     * @example
     * // Update many CategoryToPosts
     * const categoryToPost = await prisma.categoryToPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryToPosts and only return the `postId`
     * const categoryToPostWithPostIdOnly = await prisma.categoryToPost.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryToPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryToPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryToPost.
     * @param {CategoryToPostUpsertArgs} args - Arguments to update or create a CategoryToPost.
     * @example
     * // Update or create a CategoryToPost
     * const categoryToPost = await prisma.categoryToPost.upsert({
     *   create: {
     *     // ... data to create a CategoryToPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryToPost we want to update
     *   }
     * })
     */
    upsert<T extends CategoryToPostUpsertArgs>(args: SelectSubset<T, CategoryToPostUpsertArgs<ExtArgs>>): Prisma__CategoryToPostClient<$Result.GetResult<Prisma.$CategoryToPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostCountArgs} args - Arguments to filter CategoryToPosts to count.
     * @example
     * // Count the number of CategoryToPosts
     * const count = await prisma.categoryToPost.count({
     *   where: {
     *     // ... the filter for the CategoryToPosts we want to count
     *   }
     * })
    **/
    count<T extends CategoryToPostCountArgs>(
      args?: Subset<T, CategoryToPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryToPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryToPostAggregateArgs>(args: Subset<T, CategoryToPostAggregateArgs>): Prisma.PrismaPromise<GetCategoryToPostAggregateType<T>>

    /**
     * Group by CategoryToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryToPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryToPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryToPostGroupByArgs['orderBy'] }
        : { orderBy?: CategoryToPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryToPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryToPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryToPost model
   */
  readonly fields: CategoryToPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryToPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryToPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryToPost model
   */
  interface CategoryToPostFieldRefs {
    readonly postId: FieldRef<"CategoryToPost", 'String'>
    readonly categoryId: FieldRef<"CategoryToPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryToPost findUnique
   */
  export type CategoryToPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter, which CategoryToPost to fetch.
     */
    where: CategoryToPostWhereUniqueInput
  }

  /**
   * CategoryToPost findUniqueOrThrow
   */
  export type CategoryToPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter, which CategoryToPost to fetch.
     */
    where: CategoryToPostWhereUniqueInput
  }

  /**
   * CategoryToPost findFirst
   */
  export type CategoryToPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter, which CategoryToPost to fetch.
     */
    where?: CategoryToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryToPosts to fetch.
     */
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryToPosts.
     */
    cursor?: CategoryToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryToPosts.
     */
    distinct?: CategoryToPostScalarFieldEnum | CategoryToPostScalarFieldEnum[]
  }

  /**
   * CategoryToPost findFirstOrThrow
   */
  export type CategoryToPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter, which CategoryToPost to fetch.
     */
    where?: CategoryToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryToPosts to fetch.
     */
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryToPosts.
     */
    cursor?: CategoryToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryToPosts.
     */
    distinct?: CategoryToPostScalarFieldEnum | CategoryToPostScalarFieldEnum[]
  }

  /**
   * CategoryToPost findMany
   */
  export type CategoryToPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter, which CategoryToPosts to fetch.
     */
    where?: CategoryToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryToPosts to fetch.
     */
    orderBy?: CategoryToPostOrderByWithRelationInput | CategoryToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryToPosts.
     */
    cursor?: CategoryToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryToPosts.
     */
    skip?: number
    distinct?: CategoryToPostScalarFieldEnum | CategoryToPostScalarFieldEnum[]
  }

  /**
   * CategoryToPost create
   */
  export type CategoryToPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryToPost.
     */
    data: XOR<CategoryToPostCreateInput, CategoryToPostUncheckedCreateInput>
  }

  /**
   * CategoryToPost createMany
   */
  export type CategoryToPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryToPosts.
     */
    data: CategoryToPostCreateManyInput | CategoryToPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryToPost createManyAndReturn
   */
  export type CategoryToPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryToPosts.
     */
    data: CategoryToPostCreateManyInput | CategoryToPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryToPost update
   */
  export type CategoryToPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryToPost.
     */
    data: XOR<CategoryToPostUpdateInput, CategoryToPostUncheckedUpdateInput>
    /**
     * Choose, which CategoryToPost to update.
     */
    where: CategoryToPostWhereUniqueInput
  }

  /**
   * CategoryToPost updateMany
   */
  export type CategoryToPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryToPosts.
     */
    data: XOR<CategoryToPostUpdateManyMutationInput, CategoryToPostUncheckedUpdateManyInput>
    /**
     * Filter which CategoryToPosts to update
     */
    where?: CategoryToPostWhereInput
    /**
     * Limit how many CategoryToPosts to update.
     */
    limit?: number
  }

  /**
   * CategoryToPost updateManyAndReturn
   */
  export type CategoryToPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * The data used to update CategoryToPosts.
     */
    data: XOR<CategoryToPostUpdateManyMutationInput, CategoryToPostUncheckedUpdateManyInput>
    /**
     * Filter which CategoryToPosts to update
     */
    where?: CategoryToPostWhereInput
    /**
     * Limit how many CategoryToPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryToPost upsert
   */
  export type CategoryToPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryToPost to update in case it exists.
     */
    where: CategoryToPostWhereUniqueInput
    /**
     * In case the CategoryToPost found by the `where` argument doesn't exist, create a new CategoryToPost with this data.
     */
    create: XOR<CategoryToPostCreateInput, CategoryToPostUncheckedCreateInput>
    /**
     * In case the CategoryToPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryToPostUpdateInput, CategoryToPostUncheckedUpdateInput>
  }

  /**
   * CategoryToPost delete
   */
  export type CategoryToPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
    /**
     * Filter which CategoryToPost to delete.
     */
    where: CategoryToPostWhereUniqueInput
  }

  /**
   * CategoryToPost deleteMany
   */
  export type CategoryToPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryToPosts to delete
     */
    where?: CategoryToPostWhereInput
    /**
     * Limit how many CategoryToPosts to delete.
     */
    limit?: number
  }

  /**
   * CategoryToPost without action
   */
  export type CategoryToPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryToPost
     */
    select?: CategoryToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryToPost
     */
    omit?: CategoryToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryToPostInclude<ExtArgs> | null
  }


  /**
   * Model TagToPost
   */

  export type AggregateTagToPost = {
    _count: TagToPostCountAggregateOutputType | null
    _min: TagToPostMinAggregateOutputType | null
    _max: TagToPostMaxAggregateOutputType | null
  }

  export type TagToPostMinAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type TagToPostMaxAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type TagToPostCountAggregateOutputType = {
    postId: number
    tagId: number
    _all: number
  }


  export type TagToPostMinAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type TagToPostMaxAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type TagToPostCountAggregateInputType = {
    postId?: true
    tagId?: true
    _all?: true
  }

  export type TagToPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagToPost to aggregate.
     */
    where?: TagToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagToPosts to fetch.
     */
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagToPosts
    **/
    _count?: true | TagToPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagToPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagToPostMaxAggregateInputType
  }

  export type GetTagToPostAggregateType<T extends TagToPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTagToPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagToPost[P]>
      : GetScalarType<T[P], AggregateTagToPost[P]>
  }




  export type TagToPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagToPostWhereInput
    orderBy?: TagToPostOrderByWithAggregationInput | TagToPostOrderByWithAggregationInput[]
    by: TagToPostScalarFieldEnum[] | TagToPostScalarFieldEnum
    having?: TagToPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagToPostCountAggregateInputType | true
    _min?: TagToPostMinAggregateInputType
    _max?: TagToPostMaxAggregateInputType
  }

  export type TagToPostGroupByOutputType = {
    postId: string
    tagId: string
    _count: TagToPostCountAggregateOutputType | null
    _min: TagToPostMinAggregateOutputType | null
    _max: TagToPostMaxAggregateOutputType | null
  }

  type GetTagToPostGroupByPayload<T extends TagToPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagToPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagToPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagToPostGroupByOutputType[P]>
            : GetScalarType<T[P], TagToPostGroupByOutputType[P]>
        }
      >
    >


  export type TagToPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagToPost"]>

  export type TagToPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagToPost"]>

  export type TagToPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagToPost"]>

  export type TagToPostSelectScalar = {
    postId?: boolean
    tagId?: boolean
  }

  export type TagToPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["tagToPost"]>
  export type TagToPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TagToPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TagToPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TagToPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagToPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      tagId: string
    }, ExtArgs["result"]["tagToPost"]>
    composites: {}
  }

  type TagToPostGetPayload<S extends boolean | null | undefined | TagToPostDefaultArgs> = $Result.GetResult<Prisma.$TagToPostPayload, S>

  type TagToPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagToPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagToPostCountAggregateInputType | true
    }

  export interface TagToPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagToPost'], meta: { name: 'TagToPost' } }
    /**
     * Find zero or one TagToPost that matches the filter.
     * @param {TagToPostFindUniqueArgs} args - Arguments to find a TagToPost
     * @example
     * // Get one TagToPost
     * const tagToPost = await prisma.tagToPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagToPostFindUniqueArgs>(args: SelectSubset<T, TagToPostFindUniqueArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TagToPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagToPostFindUniqueOrThrowArgs} args - Arguments to find a TagToPost
     * @example
     * // Get one TagToPost
     * const tagToPost = await prisma.tagToPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagToPostFindUniqueOrThrowArgs>(args: SelectSubset<T, TagToPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagToPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostFindFirstArgs} args - Arguments to find a TagToPost
     * @example
     * // Get one TagToPost
     * const tagToPost = await prisma.tagToPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagToPostFindFirstArgs>(args?: SelectSubset<T, TagToPostFindFirstArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagToPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostFindFirstOrThrowArgs} args - Arguments to find a TagToPost
     * @example
     * // Get one TagToPost
     * const tagToPost = await prisma.tagToPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagToPostFindFirstOrThrowArgs>(args?: SelectSubset<T, TagToPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TagToPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagToPosts
     * const tagToPosts = await prisma.tagToPost.findMany()
     * 
     * // Get first 10 TagToPosts
     * const tagToPosts = await prisma.tagToPost.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const tagToPostWithPostIdOnly = await prisma.tagToPost.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends TagToPostFindManyArgs>(args?: SelectSubset<T, TagToPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TagToPost.
     * @param {TagToPostCreateArgs} args - Arguments to create a TagToPost.
     * @example
     * // Create one TagToPost
     * const TagToPost = await prisma.tagToPost.create({
     *   data: {
     *     // ... data to create a TagToPost
     *   }
     * })
     * 
     */
    create<T extends TagToPostCreateArgs>(args: SelectSubset<T, TagToPostCreateArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TagToPosts.
     * @param {TagToPostCreateManyArgs} args - Arguments to create many TagToPosts.
     * @example
     * // Create many TagToPosts
     * const tagToPost = await prisma.tagToPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagToPostCreateManyArgs>(args?: SelectSubset<T, TagToPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TagToPosts and returns the data saved in the database.
     * @param {TagToPostCreateManyAndReturnArgs} args - Arguments to create many TagToPosts.
     * @example
     * // Create many TagToPosts
     * const tagToPost = await prisma.tagToPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TagToPosts and only return the `postId`
     * const tagToPostWithPostIdOnly = await prisma.tagToPost.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagToPostCreateManyAndReturnArgs>(args?: SelectSubset<T, TagToPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TagToPost.
     * @param {TagToPostDeleteArgs} args - Arguments to delete one TagToPost.
     * @example
     * // Delete one TagToPost
     * const TagToPost = await prisma.tagToPost.delete({
     *   where: {
     *     // ... filter to delete one TagToPost
     *   }
     * })
     * 
     */
    delete<T extends TagToPostDeleteArgs>(args: SelectSubset<T, TagToPostDeleteArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TagToPost.
     * @param {TagToPostUpdateArgs} args - Arguments to update one TagToPost.
     * @example
     * // Update one TagToPost
     * const tagToPost = await prisma.tagToPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagToPostUpdateArgs>(args: SelectSubset<T, TagToPostUpdateArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TagToPosts.
     * @param {TagToPostDeleteManyArgs} args - Arguments to filter TagToPosts to delete.
     * @example
     * // Delete a few TagToPosts
     * const { count } = await prisma.tagToPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagToPostDeleteManyArgs>(args?: SelectSubset<T, TagToPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagToPosts
     * const tagToPost = await prisma.tagToPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagToPostUpdateManyArgs>(args: SelectSubset<T, TagToPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagToPosts and returns the data updated in the database.
     * @param {TagToPostUpdateManyAndReturnArgs} args - Arguments to update many TagToPosts.
     * @example
     * // Update many TagToPosts
     * const tagToPost = await prisma.tagToPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TagToPosts and only return the `postId`
     * const tagToPostWithPostIdOnly = await prisma.tagToPost.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagToPostUpdateManyAndReturnArgs>(args: SelectSubset<T, TagToPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TagToPost.
     * @param {TagToPostUpsertArgs} args - Arguments to update or create a TagToPost.
     * @example
     * // Update or create a TagToPost
     * const tagToPost = await prisma.tagToPost.upsert({
     *   create: {
     *     // ... data to create a TagToPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagToPost we want to update
     *   }
     * })
     */
    upsert<T extends TagToPostUpsertArgs>(args: SelectSubset<T, TagToPostUpsertArgs<ExtArgs>>): Prisma__TagToPostClient<$Result.GetResult<Prisma.$TagToPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TagToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostCountArgs} args - Arguments to filter TagToPosts to count.
     * @example
     * // Count the number of TagToPosts
     * const count = await prisma.tagToPost.count({
     *   where: {
     *     // ... the filter for the TagToPosts we want to count
     *   }
     * })
    **/
    count<T extends TagToPostCountArgs>(
      args?: Subset<T, TagToPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagToPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagToPostAggregateArgs>(args: Subset<T, TagToPostAggregateArgs>): Prisma.PrismaPromise<GetTagToPostAggregateType<T>>

    /**
     * Group by TagToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagToPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagToPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagToPostGroupByArgs['orderBy'] }
        : { orderBy?: TagToPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagToPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagToPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagToPost model
   */
  readonly fields: TagToPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagToPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagToPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TagToPost model
   */
  interface TagToPostFieldRefs {
    readonly postId: FieldRef<"TagToPost", 'String'>
    readonly tagId: FieldRef<"TagToPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TagToPost findUnique
   */
  export type TagToPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter, which TagToPost to fetch.
     */
    where: TagToPostWhereUniqueInput
  }

  /**
   * TagToPost findUniqueOrThrow
   */
  export type TagToPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter, which TagToPost to fetch.
     */
    where: TagToPostWhereUniqueInput
  }

  /**
   * TagToPost findFirst
   */
  export type TagToPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter, which TagToPost to fetch.
     */
    where?: TagToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagToPosts to fetch.
     */
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagToPosts.
     */
    cursor?: TagToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagToPosts.
     */
    distinct?: TagToPostScalarFieldEnum | TagToPostScalarFieldEnum[]
  }

  /**
   * TagToPost findFirstOrThrow
   */
  export type TagToPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter, which TagToPost to fetch.
     */
    where?: TagToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagToPosts to fetch.
     */
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagToPosts.
     */
    cursor?: TagToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagToPosts.
     */
    distinct?: TagToPostScalarFieldEnum | TagToPostScalarFieldEnum[]
  }

  /**
   * TagToPost findMany
   */
  export type TagToPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter, which TagToPosts to fetch.
     */
    where?: TagToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagToPosts to fetch.
     */
    orderBy?: TagToPostOrderByWithRelationInput | TagToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagToPosts.
     */
    cursor?: TagToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagToPosts.
     */
    skip?: number
    distinct?: TagToPostScalarFieldEnum | TagToPostScalarFieldEnum[]
  }

  /**
   * TagToPost create
   */
  export type TagToPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * The data needed to create a TagToPost.
     */
    data: XOR<TagToPostCreateInput, TagToPostUncheckedCreateInput>
  }

  /**
   * TagToPost createMany
   */
  export type TagToPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagToPosts.
     */
    data: TagToPostCreateManyInput | TagToPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TagToPost createManyAndReturn
   */
  export type TagToPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * The data used to create many TagToPosts.
     */
    data: TagToPostCreateManyInput | TagToPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TagToPost update
   */
  export type TagToPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * The data needed to update a TagToPost.
     */
    data: XOR<TagToPostUpdateInput, TagToPostUncheckedUpdateInput>
    /**
     * Choose, which TagToPost to update.
     */
    where: TagToPostWhereUniqueInput
  }

  /**
   * TagToPost updateMany
   */
  export type TagToPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagToPosts.
     */
    data: XOR<TagToPostUpdateManyMutationInput, TagToPostUncheckedUpdateManyInput>
    /**
     * Filter which TagToPosts to update
     */
    where?: TagToPostWhereInput
    /**
     * Limit how many TagToPosts to update.
     */
    limit?: number
  }

  /**
   * TagToPost updateManyAndReturn
   */
  export type TagToPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * The data used to update TagToPosts.
     */
    data: XOR<TagToPostUpdateManyMutationInput, TagToPostUncheckedUpdateManyInput>
    /**
     * Filter which TagToPosts to update
     */
    where?: TagToPostWhereInput
    /**
     * Limit how many TagToPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TagToPost upsert
   */
  export type TagToPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * The filter to search for the TagToPost to update in case it exists.
     */
    where: TagToPostWhereUniqueInput
    /**
     * In case the TagToPost found by the `where` argument doesn't exist, create a new TagToPost with this data.
     */
    create: XOR<TagToPostCreateInput, TagToPostUncheckedCreateInput>
    /**
     * In case the TagToPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagToPostUpdateInput, TagToPostUncheckedUpdateInput>
  }

  /**
   * TagToPost delete
   */
  export type TagToPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
    /**
     * Filter which TagToPost to delete.
     */
    where: TagToPostWhereUniqueInput
  }

  /**
   * TagToPost deleteMany
   */
  export type TagToPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagToPosts to delete
     */
    where?: TagToPostWhereInput
    /**
     * Limit how many TagToPosts to delete.
     */
    limit?: number
  }

  /**
   * TagToPost without action
   */
  export type TagToPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagToPost
     */
    select?: TagToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagToPost
     */
    omit?: TagToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagToPostInclude<ExtArgs> | null
  }


  /**
   * Model InstitutionToPost
   */

  export type AggregateInstitutionToPost = {
    _count: InstitutionToPostCountAggregateOutputType | null
    _min: InstitutionToPostMinAggregateOutputType | null
    _max: InstitutionToPostMaxAggregateOutputType | null
  }

  export type InstitutionToPostMinAggregateOutputType = {
    postId: string | null
    institutionId: string | null
  }

  export type InstitutionToPostMaxAggregateOutputType = {
    postId: string | null
    institutionId: string | null
  }

  export type InstitutionToPostCountAggregateOutputType = {
    postId: number
    institutionId: number
    _all: number
  }


  export type InstitutionToPostMinAggregateInputType = {
    postId?: true
    institutionId?: true
  }

  export type InstitutionToPostMaxAggregateInputType = {
    postId?: true
    institutionId?: true
  }

  export type InstitutionToPostCountAggregateInputType = {
    postId?: true
    institutionId?: true
    _all?: true
  }

  export type InstitutionToPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionToPost to aggregate.
     */
    where?: InstitutionToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionToPosts to fetch.
     */
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionToPosts
    **/
    _count?: true | InstitutionToPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionToPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionToPostMaxAggregateInputType
  }

  export type GetInstitutionToPostAggregateType<T extends InstitutionToPostAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionToPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionToPost[P]>
      : GetScalarType<T[P], AggregateInstitutionToPost[P]>
  }




  export type InstitutionToPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionToPostWhereInput
    orderBy?: InstitutionToPostOrderByWithAggregationInput | InstitutionToPostOrderByWithAggregationInput[]
    by: InstitutionToPostScalarFieldEnum[] | InstitutionToPostScalarFieldEnum
    having?: InstitutionToPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionToPostCountAggregateInputType | true
    _min?: InstitutionToPostMinAggregateInputType
    _max?: InstitutionToPostMaxAggregateInputType
  }

  export type InstitutionToPostGroupByOutputType = {
    postId: string
    institutionId: string
    _count: InstitutionToPostCountAggregateOutputType | null
    _min: InstitutionToPostMinAggregateOutputType | null
    _max: InstitutionToPostMaxAggregateOutputType | null
  }

  type GetInstitutionToPostGroupByPayload<T extends InstitutionToPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionToPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionToPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionToPostGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionToPostGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionToPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    institutionId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionToPost"]>

  export type InstitutionToPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    institutionId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionToPost"]>

  export type InstitutionToPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    institutionId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionToPost"]>

  export type InstitutionToPostSelectScalar = {
    postId?: boolean
    institutionId?: boolean
  }

  export type InstitutionToPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "institutionId", ExtArgs["result"]["institutionToPost"]>
  export type InstitutionToPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type InstitutionToPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type InstitutionToPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $InstitutionToPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstitutionToPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      institution: Prisma.$InstitutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      institutionId: string
    }, ExtArgs["result"]["institutionToPost"]>
    composites: {}
  }

  type InstitutionToPostGetPayload<S extends boolean | null | undefined | InstitutionToPostDefaultArgs> = $Result.GetResult<Prisma.$InstitutionToPostPayload, S>

  type InstitutionToPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionToPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionToPostCountAggregateInputType | true
    }

  export interface InstitutionToPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionToPost'], meta: { name: 'InstitutionToPost' } }
    /**
     * Find zero or one InstitutionToPost that matches the filter.
     * @param {InstitutionToPostFindUniqueArgs} args - Arguments to find a InstitutionToPost
     * @example
     * // Get one InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionToPostFindUniqueArgs>(args: SelectSubset<T, InstitutionToPostFindUniqueArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstitutionToPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionToPostFindUniqueOrThrowArgs} args - Arguments to find a InstitutionToPost
     * @example
     * // Get one InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionToPostFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionToPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionToPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostFindFirstArgs} args - Arguments to find a InstitutionToPost
     * @example
     * // Get one InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionToPostFindFirstArgs>(args?: SelectSubset<T, InstitutionToPostFindFirstArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionToPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostFindFirstOrThrowArgs} args - Arguments to find a InstitutionToPost
     * @example
     * // Get one InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionToPostFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionToPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstitutionToPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionToPosts
     * const institutionToPosts = await prisma.institutionToPost.findMany()
     * 
     * // Get first 10 InstitutionToPosts
     * const institutionToPosts = await prisma.institutionToPost.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const institutionToPostWithPostIdOnly = await prisma.institutionToPost.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends InstitutionToPostFindManyArgs>(args?: SelectSubset<T, InstitutionToPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstitutionToPost.
     * @param {InstitutionToPostCreateArgs} args - Arguments to create a InstitutionToPost.
     * @example
     * // Create one InstitutionToPost
     * const InstitutionToPost = await prisma.institutionToPost.create({
     *   data: {
     *     // ... data to create a InstitutionToPost
     *   }
     * })
     * 
     */
    create<T extends InstitutionToPostCreateArgs>(args: SelectSubset<T, InstitutionToPostCreateArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstitutionToPosts.
     * @param {InstitutionToPostCreateManyArgs} args - Arguments to create many InstitutionToPosts.
     * @example
     * // Create many InstitutionToPosts
     * const institutionToPost = await prisma.institutionToPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionToPostCreateManyArgs>(args?: SelectSubset<T, InstitutionToPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstitutionToPosts and returns the data saved in the database.
     * @param {InstitutionToPostCreateManyAndReturnArgs} args - Arguments to create many InstitutionToPosts.
     * @example
     * // Create many InstitutionToPosts
     * const institutionToPost = await prisma.institutionToPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstitutionToPosts and only return the `postId`
     * const institutionToPostWithPostIdOnly = await prisma.institutionToPost.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionToPostCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionToPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstitutionToPost.
     * @param {InstitutionToPostDeleteArgs} args - Arguments to delete one InstitutionToPost.
     * @example
     * // Delete one InstitutionToPost
     * const InstitutionToPost = await prisma.institutionToPost.delete({
     *   where: {
     *     // ... filter to delete one InstitutionToPost
     *   }
     * })
     * 
     */
    delete<T extends InstitutionToPostDeleteArgs>(args: SelectSubset<T, InstitutionToPostDeleteArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstitutionToPost.
     * @param {InstitutionToPostUpdateArgs} args - Arguments to update one InstitutionToPost.
     * @example
     * // Update one InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionToPostUpdateArgs>(args: SelectSubset<T, InstitutionToPostUpdateArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstitutionToPosts.
     * @param {InstitutionToPostDeleteManyArgs} args - Arguments to filter InstitutionToPosts to delete.
     * @example
     * // Delete a few InstitutionToPosts
     * const { count } = await prisma.institutionToPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionToPostDeleteManyArgs>(args?: SelectSubset<T, InstitutionToPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionToPosts
     * const institutionToPost = await prisma.institutionToPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionToPostUpdateManyArgs>(args: SelectSubset<T, InstitutionToPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionToPosts and returns the data updated in the database.
     * @param {InstitutionToPostUpdateManyAndReturnArgs} args - Arguments to update many InstitutionToPosts.
     * @example
     * // Update many InstitutionToPosts
     * const institutionToPost = await prisma.institutionToPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstitutionToPosts and only return the `postId`
     * const institutionToPostWithPostIdOnly = await prisma.institutionToPost.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionToPostUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionToPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstitutionToPost.
     * @param {InstitutionToPostUpsertArgs} args - Arguments to update or create a InstitutionToPost.
     * @example
     * // Update or create a InstitutionToPost
     * const institutionToPost = await prisma.institutionToPost.upsert({
     *   create: {
     *     // ... data to create a InstitutionToPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionToPost we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionToPostUpsertArgs>(args: SelectSubset<T, InstitutionToPostUpsertArgs<ExtArgs>>): Prisma__InstitutionToPostClient<$Result.GetResult<Prisma.$InstitutionToPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstitutionToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostCountArgs} args - Arguments to filter InstitutionToPosts to count.
     * @example
     * // Count the number of InstitutionToPosts
     * const count = await prisma.institutionToPost.count({
     *   where: {
     *     // ... the filter for the InstitutionToPosts we want to count
     *   }
     * })
    **/
    count<T extends InstitutionToPostCountArgs>(
      args?: Subset<T, InstitutionToPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionToPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionToPostAggregateArgs>(args: Subset<T, InstitutionToPostAggregateArgs>): Prisma.PrismaPromise<GetInstitutionToPostAggregateType<T>>

    /**
     * Group by InstitutionToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionToPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionToPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionToPostGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionToPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionToPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionToPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionToPost model
   */
  readonly fields: InstitutionToPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionToPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionToPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstitutionToPost model
   */
  interface InstitutionToPostFieldRefs {
    readonly postId: FieldRef<"InstitutionToPost", 'String'>
    readonly institutionId: FieldRef<"InstitutionToPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstitutionToPost findUnique
   */
  export type InstitutionToPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionToPost to fetch.
     */
    where: InstitutionToPostWhereUniqueInput
  }

  /**
   * InstitutionToPost findUniqueOrThrow
   */
  export type InstitutionToPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionToPost to fetch.
     */
    where: InstitutionToPostWhereUniqueInput
  }

  /**
   * InstitutionToPost findFirst
   */
  export type InstitutionToPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionToPost to fetch.
     */
    where?: InstitutionToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionToPosts to fetch.
     */
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionToPosts.
     */
    cursor?: InstitutionToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionToPosts.
     */
    distinct?: InstitutionToPostScalarFieldEnum | InstitutionToPostScalarFieldEnum[]
  }

  /**
   * InstitutionToPost findFirstOrThrow
   */
  export type InstitutionToPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionToPost to fetch.
     */
    where?: InstitutionToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionToPosts to fetch.
     */
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionToPosts.
     */
    cursor?: InstitutionToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionToPosts.
     */
    distinct?: InstitutionToPostScalarFieldEnum | InstitutionToPostScalarFieldEnum[]
  }

  /**
   * InstitutionToPost findMany
   */
  export type InstitutionToPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionToPosts to fetch.
     */
    where?: InstitutionToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionToPosts to fetch.
     */
    orderBy?: InstitutionToPostOrderByWithRelationInput | InstitutionToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionToPosts.
     */
    cursor?: InstitutionToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionToPosts.
     */
    skip?: number
    distinct?: InstitutionToPostScalarFieldEnum | InstitutionToPostScalarFieldEnum[]
  }

  /**
   * InstitutionToPost create
   */
  export type InstitutionToPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * The data needed to create a InstitutionToPost.
     */
    data: XOR<InstitutionToPostCreateInput, InstitutionToPostUncheckedCreateInput>
  }

  /**
   * InstitutionToPost createMany
   */
  export type InstitutionToPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionToPosts.
     */
    data: InstitutionToPostCreateManyInput | InstitutionToPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionToPost createManyAndReturn
   */
  export type InstitutionToPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * The data used to create many InstitutionToPosts.
     */
    data: InstitutionToPostCreateManyInput | InstitutionToPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstitutionToPost update
   */
  export type InstitutionToPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * The data needed to update a InstitutionToPost.
     */
    data: XOR<InstitutionToPostUpdateInput, InstitutionToPostUncheckedUpdateInput>
    /**
     * Choose, which InstitutionToPost to update.
     */
    where: InstitutionToPostWhereUniqueInput
  }

  /**
   * InstitutionToPost updateMany
   */
  export type InstitutionToPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionToPosts.
     */
    data: XOR<InstitutionToPostUpdateManyMutationInput, InstitutionToPostUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionToPosts to update
     */
    where?: InstitutionToPostWhereInput
    /**
     * Limit how many InstitutionToPosts to update.
     */
    limit?: number
  }

  /**
   * InstitutionToPost updateManyAndReturn
   */
  export type InstitutionToPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * The data used to update InstitutionToPosts.
     */
    data: XOR<InstitutionToPostUpdateManyMutationInput, InstitutionToPostUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionToPosts to update
     */
    where?: InstitutionToPostWhereInput
    /**
     * Limit how many InstitutionToPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstitutionToPost upsert
   */
  export type InstitutionToPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * The filter to search for the InstitutionToPost to update in case it exists.
     */
    where: InstitutionToPostWhereUniqueInput
    /**
     * In case the InstitutionToPost found by the `where` argument doesn't exist, create a new InstitutionToPost with this data.
     */
    create: XOR<InstitutionToPostCreateInput, InstitutionToPostUncheckedCreateInput>
    /**
     * In case the InstitutionToPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionToPostUpdateInput, InstitutionToPostUncheckedUpdateInput>
  }

  /**
   * InstitutionToPost delete
   */
  export type InstitutionToPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
    /**
     * Filter which InstitutionToPost to delete.
     */
    where: InstitutionToPostWhereUniqueInput
  }

  /**
   * InstitutionToPost deleteMany
   */
  export type InstitutionToPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionToPosts to delete
     */
    where?: InstitutionToPostWhereInput
    /**
     * Limit how many InstitutionToPosts to delete.
     */
    limit?: number
  }

  /**
   * InstitutionToPost without action
   */
  export type InstitutionToPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionToPost
     */
    select?: InstitutionToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionToPost
     */
    omit?: InstitutionToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionToPostInclude<ExtArgs> | null
  }


  /**
   * Model WriterToPost
   */

  export type AggregateWriterToPost = {
    _count: WriterToPostCountAggregateOutputType | null
    _min: WriterToPostMinAggregateOutputType | null
    _max: WriterToPostMaxAggregateOutputType | null
  }

  export type WriterToPostMinAggregateOutputType = {
    postId: string | null
    writerId: string | null
  }

  export type WriterToPostMaxAggregateOutputType = {
    postId: string | null
    writerId: string | null
  }

  export type WriterToPostCountAggregateOutputType = {
    postId: number
    writerId: number
    _all: number
  }


  export type WriterToPostMinAggregateInputType = {
    postId?: true
    writerId?: true
  }

  export type WriterToPostMaxAggregateInputType = {
    postId?: true
    writerId?: true
  }

  export type WriterToPostCountAggregateInputType = {
    postId?: true
    writerId?: true
    _all?: true
  }

  export type WriterToPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WriterToPost to aggregate.
     */
    where?: WriterToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WriterToPosts to fetch.
     */
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WriterToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WriterToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WriterToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WriterToPosts
    **/
    _count?: true | WriterToPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WriterToPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WriterToPostMaxAggregateInputType
  }

  export type GetWriterToPostAggregateType<T extends WriterToPostAggregateArgs> = {
        [P in keyof T & keyof AggregateWriterToPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWriterToPost[P]>
      : GetScalarType<T[P], AggregateWriterToPost[P]>
  }




  export type WriterToPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterToPostWhereInput
    orderBy?: WriterToPostOrderByWithAggregationInput | WriterToPostOrderByWithAggregationInput[]
    by: WriterToPostScalarFieldEnum[] | WriterToPostScalarFieldEnum
    having?: WriterToPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WriterToPostCountAggregateInputType | true
    _min?: WriterToPostMinAggregateInputType
    _max?: WriterToPostMaxAggregateInputType
  }

  export type WriterToPostGroupByOutputType = {
    postId: string
    writerId: string
    _count: WriterToPostCountAggregateOutputType | null
    _min: WriterToPostMinAggregateOutputType | null
    _max: WriterToPostMaxAggregateOutputType | null
  }

  type GetWriterToPostGroupByPayload<T extends WriterToPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WriterToPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WriterToPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WriterToPostGroupByOutputType[P]>
            : GetScalarType<T[P], WriterToPostGroupByOutputType[P]>
        }
      >
    >


  export type WriterToPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    writerId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writerToPost"]>

  export type WriterToPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    writerId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writerToPost"]>

  export type WriterToPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    writerId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writerToPost"]>

  export type WriterToPostSelectScalar = {
    postId?: boolean
    writerId?: boolean
  }

  export type WriterToPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "writerId", ExtArgs["result"]["writerToPost"]>
  export type WriterToPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }
  export type WriterToPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }
  export type WriterToPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    writer?: boolean | WriterDefaultArgs<ExtArgs>
  }

  export type $WriterToPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WriterToPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      writer: Prisma.$WriterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      writerId: string
    }, ExtArgs["result"]["writerToPost"]>
    composites: {}
  }

  type WriterToPostGetPayload<S extends boolean | null | undefined | WriterToPostDefaultArgs> = $Result.GetResult<Prisma.$WriterToPostPayload, S>

  type WriterToPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WriterToPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WriterToPostCountAggregateInputType | true
    }

  export interface WriterToPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WriterToPost'], meta: { name: 'WriterToPost' } }
    /**
     * Find zero or one WriterToPost that matches the filter.
     * @param {WriterToPostFindUniqueArgs} args - Arguments to find a WriterToPost
     * @example
     * // Get one WriterToPost
     * const writerToPost = await prisma.writerToPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WriterToPostFindUniqueArgs>(args: SelectSubset<T, WriterToPostFindUniqueArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WriterToPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WriterToPostFindUniqueOrThrowArgs} args - Arguments to find a WriterToPost
     * @example
     * // Get one WriterToPost
     * const writerToPost = await prisma.writerToPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WriterToPostFindUniqueOrThrowArgs>(args: SelectSubset<T, WriterToPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WriterToPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostFindFirstArgs} args - Arguments to find a WriterToPost
     * @example
     * // Get one WriterToPost
     * const writerToPost = await prisma.writerToPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WriterToPostFindFirstArgs>(args?: SelectSubset<T, WriterToPostFindFirstArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WriterToPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostFindFirstOrThrowArgs} args - Arguments to find a WriterToPost
     * @example
     * // Get one WriterToPost
     * const writerToPost = await prisma.writerToPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WriterToPostFindFirstOrThrowArgs>(args?: SelectSubset<T, WriterToPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WriterToPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WriterToPosts
     * const writerToPosts = await prisma.writerToPost.findMany()
     * 
     * // Get first 10 WriterToPosts
     * const writerToPosts = await prisma.writerToPost.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const writerToPostWithPostIdOnly = await prisma.writerToPost.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends WriterToPostFindManyArgs>(args?: SelectSubset<T, WriterToPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WriterToPost.
     * @param {WriterToPostCreateArgs} args - Arguments to create a WriterToPost.
     * @example
     * // Create one WriterToPost
     * const WriterToPost = await prisma.writerToPost.create({
     *   data: {
     *     // ... data to create a WriterToPost
     *   }
     * })
     * 
     */
    create<T extends WriterToPostCreateArgs>(args: SelectSubset<T, WriterToPostCreateArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WriterToPosts.
     * @param {WriterToPostCreateManyArgs} args - Arguments to create many WriterToPosts.
     * @example
     * // Create many WriterToPosts
     * const writerToPost = await prisma.writerToPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WriterToPostCreateManyArgs>(args?: SelectSubset<T, WriterToPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WriterToPosts and returns the data saved in the database.
     * @param {WriterToPostCreateManyAndReturnArgs} args - Arguments to create many WriterToPosts.
     * @example
     * // Create many WriterToPosts
     * const writerToPost = await prisma.writerToPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WriterToPosts and only return the `postId`
     * const writerToPostWithPostIdOnly = await prisma.writerToPost.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WriterToPostCreateManyAndReturnArgs>(args?: SelectSubset<T, WriterToPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WriterToPost.
     * @param {WriterToPostDeleteArgs} args - Arguments to delete one WriterToPost.
     * @example
     * // Delete one WriterToPost
     * const WriterToPost = await prisma.writerToPost.delete({
     *   where: {
     *     // ... filter to delete one WriterToPost
     *   }
     * })
     * 
     */
    delete<T extends WriterToPostDeleteArgs>(args: SelectSubset<T, WriterToPostDeleteArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WriterToPost.
     * @param {WriterToPostUpdateArgs} args - Arguments to update one WriterToPost.
     * @example
     * // Update one WriterToPost
     * const writerToPost = await prisma.writerToPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WriterToPostUpdateArgs>(args: SelectSubset<T, WriterToPostUpdateArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WriterToPosts.
     * @param {WriterToPostDeleteManyArgs} args - Arguments to filter WriterToPosts to delete.
     * @example
     * // Delete a few WriterToPosts
     * const { count } = await prisma.writerToPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WriterToPostDeleteManyArgs>(args?: SelectSubset<T, WriterToPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WriterToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WriterToPosts
     * const writerToPost = await prisma.writerToPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WriterToPostUpdateManyArgs>(args: SelectSubset<T, WriterToPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WriterToPosts and returns the data updated in the database.
     * @param {WriterToPostUpdateManyAndReturnArgs} args - Arguments to update many WriterToPosts.
     * @example
     * // Update many WriterToPosts
     * const writerToPost = await prisma.writerToPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WriterToPosts and only return the `postId`
     * const writerToPostWithPostIdOnly = await prisma.writerToPost.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WriterToPostUpdateManyAndReturnArgs>(args: SelectSubset<T, WriterToPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WriterToPost.
     * @param {WriterToPostUpsertArgs} args - Arguments to update or create a WriterToPost.
     * @example
     * // Update or create a WriterToPost
     * const writerToPost = await prisma.writerToPost.upsert({
     *   create: {
     *     // ... data to create a WriterToPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WriterToPost we want to update
     *   }
     * })
     */
    upsert<T extends WriterToPostUpsertArgs>(args: SelectSubset<T, WriterToPostUpsertArgs<ExtArgs>>): Prisma__WriterToPostClient<$Result.GetResult<Prisma.$WriterToPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WriterToPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostCountArgs} args - Arguments to filter WriterToPosts to count.
     * @example
     * // Count the number of WriterToPosts
     * const count = await prisma.writerToPost.count({
     *   where: {
     *     // ... the filter for the WriterToPosts we want to count
     *   }
     * })
    **/
    count<T extends WriterToPostCountArgs>(
      args?: Subset<T, WriterToPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WriterToPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WriterToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WriterToPostAggregateArgs>(args: Subset<T, WriterToPostAggregateArgs>): Prisma.PrismaPromise<GetWriterToPostAggregateType<T>>

    /**
     * Group by WriterToPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterToPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WriterToPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WriterToPostGroupByArgs['orderBy'] }
        : { orderBy?: WriterToPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WriterToPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriterToPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WriterToPost model
   */
  readonly fields: WriterToPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WriterToPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WriterToPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    writer<T extends WriterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WriterDefaultArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WriterToPost model
   */
  interface WriterToPostFieldRefs {
    readonly postId: FieldRef<"WriterToPost", 'String'>
    readonly writerId: FieldRef<"WriterToPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WriterToPost findUnique
   */
  export type WriterToPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter, which WriterToPost to fetch.
     */
    where: WriterToPostWhereUniqueInput
  }

  /**
   * WriterToPost findUniqueOrThrow
   */
  export type WriterToPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter, which WriterToPost to fetch.
     */
    where: WriterToPostWhereUniqueInput
  }

  /**
   * WriterToPost findFirst
   */
  export type WriterToPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter, which WriterToPost to fetch.
     */
    where?: WriterToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WriterToPosts to fetch.
     */
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WriterToPosts.
     */
    cursor?: WriterToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WriterToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WriterToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WriterToPosts.
     */
    distinct?: WriterToPostScalarFieldEnum | WriterToPostScalarFieldEnum[]
  }

  /**
   * WriterToPost findFirstOrThrow
   */
  export type WriterToPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter, which WriterToPost to fetch.
     */
    where?: WriterToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WriterToPosts to fetch.
     */
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WriterToPosts.
     */
    cursor?: WriterToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WriterToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WriterToPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WriterToPosts.
     */
    distinct?: WriterToPostScalarFieldEnum | WriterToPostScalarFieldEnum[]
  }

  /**
   * WriterToPost findMany
   */
  export type WriterToPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter, which WriterToPosts to fetch.
     */
    where?: WriterToPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WriterToPosts to fetch.
     */
    orderBy?: WriterToPostOrderByWithRelationInput | WriterToPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WriterToPosts.
     */
    cursor?: WriterToPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WriterToPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WriterToPosts.
     */
    skip?: number
    distinct?: WriterToPostScalarFieldEnum | WriterToPostScalarFieldEnum[]
  }

  /**
   * WriterToPost create
   */
  export type WriterToPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * The data needed to create a WriterToPost.
     */
    data: XOR<WriterToPostCreateInput, WriterToPostUncheckedCreateInput>
  }

  /**
   * WriterToPost createMany
   */
  export type WriterToPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WriterToPosts.
     */
    data: WriterToPostCreateManyInput | WriterToPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WriterToPost createManyAndReturn
   */
  export type WriterToPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * The data used to create many WriterToPosts.
     */
    data: WriterToPostCreateManyInput | WriterToPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WriterToPost update
   */
  export type WriterToPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * The data needed to update a WriterToPost.
     */
    data: XOR<WriterToPostUpdateInput, WriterToPostUncheckedUpdateInput>
    /**
     * Choose, which WriterToPost to update.
     */
    where: WriterToPostWhereUniqueInput
  }

  /**
   * WriterToPost updateMany
   */
  export type WriterToPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WriterToPosts.
     */
    data: XOR<WriterToPostUpdateManyMutationInput, WriterToPostUncheckedUpdateManyInput>
    /**
     * Filter which WriterToPosts to update
     */
    where?: WriterToPostWhereInput
    /**
     * Limit how many WriterToPosts to update.
     */
    limit?: number
  }

  /**
   * WriterToPost updateManyAndReturn
   */
  export type WriterToPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * The data used to update WriterToPosts.
     */
    data: XOR<WriterToPostUpdateManyMutationInput, WriterToPostUncheckedUpdateManyInput>
    /**
     * Filter which WriterToPosts to update
     */
    where?: WriterToPostWhereInput
    /**
     * Limit how many WriterToPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WriterToPost upsert
   */
  export type WriterToPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * The filter to search for the WriterToPost to update in case it exists.
     */
    where: WriterToPostWhereUniqueInput
    /**
     * In case the WriterToPost found by the `where` argument doesn't exist, create a new WriterToPost with this data.
     */
    create: XOR<WriterToPostCreateInput, WriterToPostUncheckedCreateInput>
    /**
     * In case the WriterToPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WriterToPostUpdateInput, WriterToPostUncheckedUpdateInput>
  }

  /**
   * WriterToPost delete
   */
  export type WriterToPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
    /**
     * Filter which WriterToPost to delete.
     */
    where: WriterToPostWhereUniqueInput
  }

  /**
   * WriterToPost deleteMany
   */
  export type WriterToPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WriterToPosts to delete
     */
    where?: WriterToPostWhereInput
    /**
     * Limit how many WriterToPosts to delete.
     */
    limit?: number
  }

  /**
   * WriterToPost without action
   */
  export type WriterToPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterToPost
     */
    select?: WriterToPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WriterToPost
     */
    omit?: WriterToPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterToPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    excerpt: 'excerpt',
    imageUrl: 'imageUrl',
    date: 'date',
    dateGmt: 'dateGmt',
    modified: 'modified',
    modifiedGmt: 'modifiedGmt',
    slug: 'slug',
    status: 'status',
    commentStatus: 'commentStatus',
    pingStatus: 'pingStatus',
    guid: 'guid',
    menuOrder: 'menuOrder',
    vimeoVideoId: 'vimeoVideoId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    url: 'url',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type',
    parentId: 'parentId',
    daughterId: 'daughterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const WriterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    imgUrl: 'imgUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WriterScalarFieldEnum = (typeof WriterScalarFieldEnum)[keyof typeof WriterScalarFieldEnum]


  export const CategoryToPostScalarFieldEnum: {
    postId: 'postId',
    categoryId: 'categoryId'
  };

  export type CategoryToPostScalarFieldEnum = (typeof CategoryToPostScalarFieldEnum)[keyof typeof CategoryToPostScalarFieldEnum]


  export const TagToPostScalarFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type TagToPostScalarFieldEnum = (typeof TagToPostScalarFieldEnum)[keyof typeof TagToPostScalarFieldEnum]


  export const InstitutionToPostScalarFieldEnum: {
    postId: 'postId',
    institutionId: 'institutionId'
  };

  export type InstitutionToPostScalarFieldEnum = (typeof InstitutionToPostScalarFieldEnum)[keyof typeof InstitutionToPostScalarFieldEnum]


  export const WriterToPostScalarFieldEnum: {
    postId: 'postId',
    writerId: 'writerId'
  };

  export type WriterToPostScalarFieldEnum = (typeof WriterToPostScalarFieldEnum)[keyof typeof WriterToPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    excerpt: 'excerpt',
    imageUrl: 'imageUrl',
    slug: 'slug',
    status: 'status',
    commentStatus: 'commentStatus',
    pingStatus: 'pingStatus',
    guid: 'guid',
    vimeoVideoId: 'vimeoVideoId',
    authorId: 'authorId'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    url: 'url',
    avatarUrl: 'avatarUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId',
    daughterId: 'daughterId'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const InstitutionOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type InstitutionOrderByRelevanceFieldEnum = (typeof InstitutionOrderByRelevanceFieldEnum)[keyof typeof InstitutionOrderByRelevanceFieldEnum]


  export const WriterOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    imgUrl: 'imgUrl'
  };

  export type WriterOrderByRelevanceFieldEnum = (typeof WriterOrderByRelevanceFieldEnum)[keyof typeof WriterOrderByRelevanceFieldEnum]


  export const CategoryToPostOrderByRelevanceFieldEnum: {
    postId: 'postId',
    categoryId: 'categoryId'
  };

  export type CategoryToPostOrderByRelevanceFieldEnum = (typeof CategoryToPostOrderByRelevanceFieldEnum)[keyof typeof CategoryToPostOrderByRelevanceFieldEnum]


  export const TagToPostOrderByRelevanceFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type TagToPostOrderByRelevanceFieldEnum = (typeof TagToPostOrderByRelevanceFieldEnum)[keyof typeof TagToPostOrderByRelevanceFieldEnum]


  export const InstitutionToPostOrderByRelevanceFieldEnum: {
    postId: 'postId',
    institutionId: 'institutionId'
  };

  export type InstitutionToPostOrderByRelevanceFieldEnum = (typeof InstitutionToPostOrderByRelevanceFieldEnum)[keyof typeof InstitutionToPostOrderByRelevanceFieldEnum]


  export const WriterToPostOrderByRelevanceFieldEnum: {
    postId: 'postId',
    writerId: 'writerId'
  };

  export type WriterToPostOrderByRelevanceFieldEnum = (typeof WriterToPostOrderByRelevanceFieldEnum)[keyof typeof WriterToPostOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeFilter<"Post"> | Date | string
    dateGmt?: DateTimeFilter<"Post"> | Date | string
    modified?: DateTimeNullableFilter<"Post"> | Date | string | null
    modifiedGmt?: DateTimeNullableFilter<"Post"> | Date | string | null
    slug?: StringFilter<"Post"> | string
    status?: StringFilter<"Post"> | string
    commentStatus?: StringFilter<"Post"> | string
    pingStatus?: StringFilter<"Post"> | string
    guid?: StringNullableFilter<"Post"> | string | null
    menuOrder?: IntFilter<"Post"> | number
    vimeoVideoId?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: CategoryToPostListRelationFilter
    tags?: TagToPostListRelationFilter
    institutions?: InstitutionToPostListRelationFilter
    writers?: WriterToPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    dateGmt?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedGmt?: SortOrderInput | SortOrder
    slug?: SortOrder
    status?: SortOrder
    commentStatus?: SortOrder
    pingStatus?: SortOrder
    guid?: SortOrderInput | SortOrder
    menuOrder?: SortOrder
    vimeoVideoId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    categories?: CategoryToPostOrderByRelationAggregateInput
    tags?: TagToPostOrderByRelationAggregateInput
    institutions?: InstitutionToPostOrderByRelationAggregateInput
    writers?: WriterToPostOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeFilter<"Post"> | Date | string
    dateGmt?: DateTimeFilter<"Post"> | Date | string
    modified?: DateTimeNullableFilter<"Post"> | Date | string | null
    modifiedGmt?: DateTimeNullableFilter<"Post"> | Date | string | null
    status?: StringFilter<"Post"> | string
    commentStatus?: StringFilter<"Post"> | string
    pingStatus?: StringFilter<"Post"> | string
    guid?: StringNullableFilter<"Post"> | string | null
    menuOrder?: IntFilter<"Post"> | number
    vimeoVideoId?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: CategoryToPostListRelationFilter
    tags?: TagToPostListRelationFilter
    institutions?: InstitutionToPostListRelationFilter
    writers?: WriterToPostListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    dateGmt?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedGmt?: SortOrderInput | SortOrder
    slug?: SortOrder
    status?: SortOrder
    commentStatus?: SortOrder
    pingStatus?: SortOrder
    guid?: SortOrderInput | SortOrder
    menuOrder?: SortOrder
    vimeoVideoId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Post"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    date?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    dateGmt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    modified?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    modifiedGmt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    slug?: StringWithAggregatesFilter<"Post"> | string
    status?: StringWithAggregatesFilter<"Post"> | string
    commentStatus?: StringWithAggregatesFilter<"Post"> | string
    pingStatus?: StringWithAggregatesFilter<"Post"> | string
    guid?: StringNullableWithAggregatesFilter<"Post"> | string | null
    menuOrder?: IntWithAggregatesFilter<"Post"> | number
    vimeoVideoId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    authorId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    slug?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    url?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    url?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
  }, "id" | "slug" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    slug?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    url?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    parentId?: StringNullableFilter<"Category"> | string | null
    daughterId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    daughters?: CategoryListRelationFilter
    daughter?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subs?: CategoryListRelationFilter
    posts?: CategoryToPostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    parentId?: SortOrderInput | SortOrder
    daughterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    daughters?: CategoryOrderByRelationAggregateInput
    daughter?: CategoryOrderByWithRelationInput
    subs?: CategoryOrderByRelationAggregateInput
    posts?: CategoryToPostOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    parentId?: StringNullableFilter<"Category"> | string | null
    daughterId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    daughters?: CategoryListRelationFilter
    daughter?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subs?: CategoryListRelationFilter
    posts?: CategoryToPostListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    parentId?: SortOrderInput | SortOrder
    daughterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    daughterId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    posts?: TagToPostListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: TagToPostOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    posts?: TagToPostListRelationFilter
  }, "id" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: StringFilter<"Institution"> | string
    name?: StringFilter<"Institution"> | string
    slug?: StringFilter<"Institution"> | string
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    posts?: InstitutionToPostListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: InstitutionToPostOrderByRelationAggregateInput
    _relevance?: InstitutionOrderByRelevanceInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    name?: StringFilter<"Institution"> | string
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    posts?: InstitutionToPostListRelationFilter
  }, "id" | "slug">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Institution"> | string
    name?: StringWithAggregatesFilter<"Institution"> | string
    slug?: StringWithAggregatesFilter<"Institution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
  }

  export type WriterWhereInput = {
    AND?: WriterWhereInput | WriterWhereInput[]
    OR?: WriterWhereInput[]
    NOT?: WriterWhereInput | WriterWhereInput[]
    id?: StringFilter<"Writer"> | string
    name?: StringFilter<"Writer"> | string
    slug?: StringFilter<"Writer"> | string
    imgUrl?: StringNullableFilter<"Writer"> | string | null
    createdAt?: DateTimeFilter<"Writer"> | Date | string
    updatedAt?: DateTimeFilter<"Writer"> | Date | string
    posts?: WriterToPostListRelationFilter
  }

  export type WriterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: WriterToPostOrderByRelationAggregateInput
    _relevance?: WriterOrderByRelevanceInput
  }

  export type WriterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WriterWhereInput | WriterWhereInput[]
    OR?: WriterWhereInput[]
    NOT?: WriterWhereInput | WriterWhereInput[]
    name?: StringFilter<"Writer"> | string
    imgUrl?: StringNullableFilter<"Writer"> | string | null
    createdAt?: DateTimeFilter<"Writer"> | Date | string
    updatedAt?: DateTimeFilter<"Writer"> | Date | string
    posts?: WriterToPostListRelationFilter
  }, "id" | "slug">

  export type WriterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WriterCountOrderByAggregateInput
    _max?: WriterMaxOrderByAggregateInput
    _min?: WriterMinOrderByAggregateInput
  }

  export type WriterScalarWhereWithAggregatesInput = {
    AND?: WriterScalarWhereWithAggregatesInput | WriterScalarWhereWithAggregatesInput[]
    OR?: WriterScalarWhereWithAggregatesInput[]
    NOT?: WriterScalarWhereWithAggregatesInput | WriterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Writer"> | string
    name?: StringWithAggregatesFilter<"Writer"> | string
    slug?: StringWithAggregatesFilter<"Writer"> | string
    imgUrl?: StringNullableWithAggregatesFilter<"Writer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Writer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Writer"> | Date | string
  }

  export type CategoryToPostWhereInput = {
    AND?: CategoryToPostWhereInput | CategoryToPostWhereInput[]
    OR?: CategoryToPostWhereInput[]
    NOT?: CategoryToPostWhereInput | CategoryToPostWhereInput[]
    postId?: StringFilter<"CategoryToPost"> | string
    categoryId?: StringFilter<"CategoryToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryToPostOrderByWithRelationInput = {
    postId?: SortOrder
    categoryId?: SortOrder
    post?: PostOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    _relevance?: CategoryToPostOrderByRelevanceInput
  }

  export type CategoryToPostWhereUniqueInput = Prisma.AtLeast<{
    postId_categoryId?: CategoryToPostPostIdCategoryIdCompoundUniqueInput
    AND?: CategoryToPostWhereInput | CategoryToPostWhereInput[]
    OR?: CategoryToPostWhereInput[]
    NOT?: CategoryToPostWhereInput | CategoryToPostWhereInput[]
    postId?: StringFilter<"CategoryToPost"> | string
    categoryId?: StringFilter<"CategoryToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "postId_categoryId">

  export type CategoryToPostOrderByWithAggregationInput = {
    postId?: SortOrder
    categoryId?: SortOrder
    _count?: CategoryToPostCountOrderByAggregateInput
    _max?: CategoryToPostMaxOrderByAggregateInput
    _min?: CategoryToPostMinOrderByAggregateInput
  }

  export type CategoryToPostScalarWhereWithAggregatesInput = {
    AND?: CategoryToPostScalarWhereWithAggregatesInput | CategoryToPostScalarWhereWithAggregatesInput[]
    OR?: CategoryToPostScalarWhereWithAggregatesInput[]
    NOT?: CategoryToPostScalarWhereWithAggregatesInput | CategoryToPostScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"CategoryToPost"> | string
    categoryId?: StringWithAggregatesFilter<"CategoryToPost"> | string
  }

  export type TagToPostWhereInput = {
    AND?: TagToPostWhereInput | TagToPostWhereInput[]
    OR?: TagToPostWhereInput[]
    NOT?: TagToPostWhereInput | TagToPostWhereInput[]
    postId?: StringFilter<"TagToPost"> | string
    tagId?: StringFilter<"TagToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TagToPostOrderByWithRelationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    post?: PostOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    _relevance?: TagToPostOrderByRelevanceInput
  }

  export type TagToPostWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: TagToPostPostIdTagIdCompoundUniqueInput
    AND?: TagToPostWhereInput | TagToPostWhereInput[]
    OR?: TagToPostWhereInput[]
    NOT?: TagToPostWhereInput | TagToPostWhereInput[]
    postId?: StringFilter<"TagToPost"> | string
    tagId?: StringFilter<"TagToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "postId_tagId">

  export type TagToPostOrderByWithAggregationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    _count?: TagToPostCountOrderByAggregateInput
    _max?: TagToPostMaxOrderByAggregateInput
    _min?: TagToPostMinOrderByAggregateInput
  }

  export type TagToPostScalarWhereWithAggregatesInput = {
    AND?: TagToPostScalarWhereWithAggregatesInput | TagToPostScalarWhereWithAggregatesInput[]
    OR?: TagToPostScalarWhereWithAggregatesInput[]
    NOT?: TagToPostScalarWhereWithAggregatesInput | TagToPostScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"TagToPost"> | string
    tagId?: StringWithAggregatesFilter<"TagToPost"> | string
  }

  export type InstitutionToPostWhereInput = {
    AND?: InstitutionToPostWhereInput | InstitutionToPostWhereInput[]
    OR?: InstitutionToPostWhereInput[]
    NOT?: InstitutionToPostWhereInput | InstitutionToPostWhereInput[]
    postId?: StringFilter<"InstitutionToPost"> | string
    institutionId?: StringFilter<"InstitutionToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }

  export type InstitutionToPostOrderByWithRelationInput = {
    postId?: SortOrder
    institutionId?: SortOrder
    post?: PostOrderByWithRelationInput
    institution?: InstitutionOrderByWithRelationInput
    _relevance?: InstitutionToPostOrderByRelevanceInput
  }

  export type InstitutionToPostWhereUniqueInput = Prisma.AtLeast<{
    postId_institutionId?: InstitutionToPostPostIdInstitutionIdCompoundUniqueInput
    AND?: InstitutionToPostWhereInput | InstitutionToPostWhereInput[]
    OR?: InstitutionToPostWhereInput[]
    NOT?: InstitutionToPostWhereInput | InstitutionToPostWhereInput[]
    postId?: StringFilter<"InstitutionToPost"> | string
    institutionId?: StringFilter<"InstitutionToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }, "postId_institutionId">

  export type InstitutionToPostOrderByWithAggregationInput = {
    postId?: SortOrder
    institutionId?: SortOrder
    _count?: InstitutionToPostCountOrderByAggregateInput
    _max?: InstitutionToPostMaxOrderByAggregateInput
    _min?: InstitutionToPostMinOrderByAggregateInput
  }

  export type InstitutionToPostScalarWhereWithAggregatesInput = {
    AND?: InstitutionToPostScalarWhereWithAggregatesInput | InstitutionToPostScalarWhereWithAggregatesInput[]
    OR?: InstitutionToPostScalarWhereWithAggregatesInput[]
    NOT?: InstitutionToPostScalarWhereWithAggregatesInput | InstitutionToPostScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"InstitutionToPost"> | string
    institutionId?: StringWithAggregatesFilter<"InstitutionToPost"> | string
  }

  export type WriterToPostWhereInput = {
    AND?: WriterToPostWhereInput | WriterToPostWhereInput[]
    OR?: WriterToPostWhereInput[]
    NOT?: WriterToPostWhereInput | WriterToPostWhereInput[]
    postId?: StringFilter<"WriterToPost"> | string
    writerId?: StringFilter<"WriterToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
  }

  export type WriterToPostOrderByWithRelationInput = {
    postId?: SortOrder
    writerId?: SortOrder
    post?: PostOrderByWithRelationInput
    writer?: WriterOrderByWithRelationInput
    _relevance?: WriterToPostOrderByRelevanceInput
  }

  export type WriterToPostWhereUniqueInput = Prisma.AtLeast<{
    postId_writerId?: WriterToPostPostIdWriterIdCompoundUniqueInput
    AND?: WriterToPostWhereInput | WriterToPostWhereInput[]
    OR?: WriterToPostWhereInput[]
    NOT?: WriterToPostWhereInput | WriterToPostWhereInput[]
    postId?: StringFilter<"WriterToPost"> | string
    writerId?: StringFilter<"WriterToPost"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
  }, "postId_writerId">

  export type WriterToPostOrderByWithAggregationInput = {
    postId?: SortOrder
    writerId?: SortOrder
    _count?: WriterToPostCountOrderByAggregateInput
    _max?: WriterToPostMaxOrderByAggregateInput
    _min?: WriterToPostMinOrderByAggregateInput
  }

  export type WriterToPostScalarWhereWithAggregatesInput = {
    AND?: WriterToPostScalarWhereWithAggregatesInput | WriterToPostScalarWhereWithAggregatesInput[]
    OR?: WriterToPostScalarWhereWithAggregatesInput[]
    NOT?: WriterToPostScalarWhereWithAggregatesInput | WriterToPostScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"WriterToPost"> | string
    writerId?: StringWithAggregatesFilter<"WriterToPost"> | string
  }

  export type PostCreateInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryToPostCreateNestedManyWithoutPostInput
    tags?: TagToPostCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostCreateNestedManyWithoutPostInput
    writers?: WriterToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostUncheckedCreateNestedManyWithoutPostInput
    tags?: TagToPostUncheckedCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostUncheckedCreateNestedManyWithoutPostInput
    writers?: WriterToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryToPostUpdateManyWithoutPostNestedInput
    tags?: TagToPostUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagToPostUncheckedUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    slug: string
    email?: string | null
    url?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    email?: string | null
    url?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    slug: string
    email?: string | null
    url?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutDaughtersInput
    daughters?: CategoryCreateNestedManyWithoutParentInput
    daughter?: CategoryCreateNestedOneWithoutSubsInput
    subs?: CategoryCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryUncheckedCreateNestedManyWithoutParentInput
    subs?: CategoryUncheckedCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutDaughtersNestedInput
    daughters?: CategoryUpdateManyWithoutParentNestedInput
    daughter?: CategoryUpdateOneWithoutSubsNestedInput
    subs?: CategoryUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    subs?: CategoryUncheckedUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: TagToPostCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: TagToPostUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: TagToPostUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: TagToPostUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionCreateInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: InstitutionToPostCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: InstitutionToPostUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: InstitutionToPostUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: InstitutionToPostUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterCreateInput = {
    id: string
    name: string
    slug: string
    imgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: WriterToPostCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    imgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: WriterToPostUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: WriterToPostUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: WriterToPostUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type WriterCreateManyInput = {
    id: string
    name: string
    slug: string
    imgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryToPostCreateInput = {
    post: PostCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type CategoryToPostUncheckedCreateInput = {
    postId: string
    categoryId: string
  }

  export type CategoryToPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CategoryToPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryToPostCreateManyInput = {
    postId: string
    categoryId: string
  }

  export type CategoryToPostUpdateManyMutationInput = {

  }

  export type CategoryToPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostCreateInput = {
    post: PostCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type TagToPostUncheckedCreateInput = {
    postId: string
    tagId: string
  }

  export type TagToPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type TagToPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostCreateManyInput = {
    postId: string
    tagId: string
  }

  export type TagToPostUpdateManyMutationInput = {

  }

  export type TagToPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostCreateInput = {
    post: PostCreateNestedOneWithoutInstitutionsInput
    institution: InstitutionCreateNestedOneWithoutPostsInput
  }

  export type InstitutionToPostUncheckedCreateInput = {
    postId: string
    institutionId: string
  }

  export type InstitutionToPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutInstitutionsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutPostsNestedInput
  }

  export type InstitutionToPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostCreateManyInput = {
    postId: string
    institutionId: string
  }

  export type InstitutionToPostUpdateManyMutationInput = {

  }

  export type InstitutionToPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostCreateInput = {
    post: PostCreateNestedOneWithoutWritersInput
    writer: WriterCreateNestedOneWithoutPostsInput
  }

  export type WriterToPostUncheckedCreateInput = {
    postId: string
    writerId: string
  }

  export type WriterToPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutWritersNestedInput
    writer?: WriterUpdateOneRequiredWithoutPostsNestedInput
  }

  export type WriterToPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostCreateManyInput = {
    postId: string
    writerId: string
  }

  export type WriterToPostUpdateManyMutationInput = {

  }

  export type WriterToPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryToPostListRelationFilter = {
    every?: CategoryToPostWhereInput
    some?: CategoryToPostWhereInput
    none?: CategoryToPostWhereInput
  }

  export type TagToPostListRelationFilter = {
    every?: TagToPostWhereInput
    some?: TagToPostWhereInput
    none?: TagToPostWhereInput
  }

  export type InstitutionToPostListRelationFilter = {
    every?: InstitutionToPostWhereInput
    some?: InstitutionToPostWhereInput
    none?: InstitutionToPostWhereInput
  }

  export type WriterToPostListRelationFilter = {
    every?: WriterToPostWhereInput
    some?: WriterToPostWhereInput
    none?: WriterToPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryToPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagToPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionToPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WriterToPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    dateGmt?: SortOrder
    modified?: SortOrder
    modifiedGmt?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    commentStatus?: SortOrder
    pingStatus?: SortOrder
    guid?: SortOrder
    menuOrder?: SortOrder
    vimeoVideoId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    menuOrder?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    dateGmt?: SortOrder
    modified?: SortOrder
    modifiedGmt?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    commentStatus?: SortOrder
    pingStatus?: SortOrder
    guid?: SortOrder
    menuOrder?: SortOrder
    vimeoVideoId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    dateGmt?: SortOrder
    modified?: SortOrder
    modifiedGmt?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    commentStatus?: SortOrder
    pingStatus?: SortOrder
    guid?: SortOrder
    menuOrder?: SortOrder
    vimeoVideoId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    menuOrder?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    url?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    url?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    url?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    daughterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    daughterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    daughterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionOrderByRelevanceInput = {
    fields: InstitutionOrderByRelevanceFieldEnum | InstitutionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterOrderByRelevanceInput = {
    fields: WriterOrderByRelevanceFieldEnum | WriterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WriterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryToPostOrderByRelevanceInput = {
    fields: CategoryToPostOrderByRelevanceFieldEnum | CategoryToPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryToPostPostIdCategoryIdCompoundUniqueInput = {
    postId: string
    categoryId: string
  }

  export type CategoryToPostCountOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryToPostMaxOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryToPostMinOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagToPostOrderByRelevanceInput = {
    fields: TagToPostOrderByRelevanceFieldEnum | TagToPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagToPostPostIdTagIdCompoundUniqueInput = {
    postId: string
    tagId: string
  }

  export type TagToPostCountOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type TagToPostMaxOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type TagToPostMinOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type InstitutionToPostOrderByRelevanceInput = {
    fields: InstitutionToPostOrderByRelevanceFieldEnum | InstitutionToPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstitutionToPostPostIdInstitutionIdCompoundUniqueInput = {
    postId: string
    institutionId: string
  }

  export type InstitutionToPostCountOrderByAggregateInput = {
    postId?: SortOrder
    institutionId?: SortOrder
  }

  export type InstitutionToPostMaxOrderByAggregateInput = {
    postId?: SortOrder
    institutionId?: SortOrder
  }

  export type InstitutionToPostMinOrderByAggregateInput = {
    postId?: SortOrder
    institutionId?: SortOrder
  }

  export type WriterScalarRelationFilter = {
    is?: WriterWhereInput
    isNot?: WriterWhereInput
  }

  export type WriterToPostOrderByRelevanceInput = {
    fields: WriterToPostOrderByRelevanceFieldEnum | WriterToPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WriterToPostPostIdWriterIdCompoundUniqueInput = {
    postId: string
    writerId: string
  }

  export type WriterToPostCountOrderByAggregateInput = {
    postId?: SortOrder
    writerId?: SortOrder
  }

  export type WriterToPostMaxOrderByAggregateInput = {
    postId?: SortOrder
    writerId?: SortOrder
  }

  export type WriterToPostMinOrderByAggregateInput = {
    postId?: SortOrder
    writerId?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryToPostCreateNestedManyWithoutPostInput = {
    create?: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput> | CategoryToPostCreateWithoutPostInput[] | CategoryToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutPostInput | CategoryToPostCreateOrConnectWithoutPostInput[]
    createMany?: CategoryToPostCreateManyPostInputEnvelope
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
  }

  export type TagToPostCreateNestedManyWithoutPostInput = {
    create?: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput> | TagToPostCreateWithoutPostInput[] | TagToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutPostInput | TagToPostCreateOrConnectWithoutPostInput[]
    createMany?: TagToPostCreateManyPostInputEnvelope
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
  }

  export type InstitutionToPostCreateNestedManyWithoutPostInput = {
    create?: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput> | InstitutionToPostCreateWithoutPostInput[] | InstitutionToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutPostInput | InstitutionToPostCreateOrConnectWithoutPostInput[]
    createMany?: InstitutionToPostCreateManyPostInputEnvelope
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
  }

  export type WriterToPostCreateNestedManyWithoutPostInput = {
    create?: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput> | WriterToPostCreateWithoutPostInput[] | WriterToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutPostInput | WriterToPostCreateOrConnectWithoutPostInput[]
    createMany?: WriterToPostCreateManyPostInputEnvelope
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
  }

  export type CategoryToPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput> | CategoryToPostCreateWithoutPostInput[] | CategoryToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutPostInput | CategoryToPostCreateOrConnectWithoutPostInput[]
    createMany?: CategoryToPostCreateManyPostInputEnvelope
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
  }

  export type TagToPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput> | TagToPostCreateWithoutPostInput[] | TagToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutPostInput | TagToPostCreateOrConnectWithoutPostInput[]
    createMany?: TagToPostCreateManyPostInputEnvelope
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
  }

  export type InstitutionToPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput> | InstitutionToPostCreateWithoutPostInput[] | InstitutionToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutPostInput | InstitutionToPostCreateOrConnectWithoutPostInput[]
    createMany?: InstitutionToPostCreateManyPostInputEnvelope
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
  }

  export type WriterToPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput> | WriterToPostCreateWithoutPostInput[] | WriterToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutPostInput | WriterToPostCreateOrConnectWithoutPostInput[]
    createMany?: WriterToPostCreateManyPostInputEnvelope
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryToPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput> | CategoryToPostCreateWithoutPostInput[] | CategoryToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutPostInput | CategoryToPostCreateOrConnectWithoutPostInput[]
    upsert?: CategoryToPostUpsertWithWhereUniqueWithoutPostInput | CategoryToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CategoryToPostCreateManyPostInputEnvelope
    set?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    disconnect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    delete?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    update?: CategoryToPostUpdateWithWhereUniqueWithoutPostInput | CategoryToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CategoryToPostUpdateManyWithWhereWithoutPostInput | CategoryToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
  }

  export type TagToPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput> | TagToPostCreateWithoutPostInput[] | TagToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutPostInput | TagToPostCreateOrConnectWithoutPostInput[]
    upsert?: TagToPostUpsertWithWhereUniqueWithoutPostInput | TagToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagToPostCreateManyPostInputEnvelope
    set?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    disconnect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    delete?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    update?: TagToPostUpdateWithWhereUniqueWithoutPostInput | TagToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagToPostUpdateManyWithWhereWithoutPostInput | TagToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
  }

  export type InstitutionToPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput> | InstitutionToPostCreateWithoutPostInput[] | InstitutionToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutPostInput | InstitutionToPostCreateOrConnectWithoutPostInput[]
    upsert?: InstitutionToPostUpsertWithWhereUniqueWithoutPostInput | InstitutionToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InstitutionToPostCreateManyPostInputEnvelope
    set?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    disconnect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    delete?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    update?: InstitutionToPostUpdateWithWhereUniqueWithoutPostInput | InstitutionToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InstitutionToPostUpdateManyWithWhereWithoutPostInput | InstitutionToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
  }

  export type WriterToPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput> | WriterToPostCreateWithoutPostInput[] | WriterToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutPostInput | WriterToPostCreateOrConnectWithoutPostInput[]
    upsert?: WriterToPostUpsertWithWhereUniqueWithoutPostInput | WriterToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: WriterToPostCreateManyPostInputEnvelope
    set?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    disconnect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    delete?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    update?: WriterToPostUpdateWithWhereUniqueWithoutPostInput | WriterToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: WriterToPostUpdateManyWithWhereWithoutPostInput | WriterToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
  }

  export type CategoryToPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput> | CategoryToPostCreateWithoutPostInput[] | CategoryToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutPostInput | CategoryToPostCreateOrConnectWithoutPostInput[]
    upsert?: CategoryToPostUpsertWithWhereUniqueWithoutPostInput | CategoryToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CategoryToPostCreateManyPostInputEnvelope
    set?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    disconnect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    delete?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    update?: CategoryToPostUpdateWithWhereUniqueWithoutPostInput | CategoryToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CategoryToPostUpdateManyWithWhereWithoutPostInput | CategoryToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
  }

  export type TagToPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput> | TagToPostCreateWithoutPostInput[] | TagToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutPostInput | TagToPostCreateOrConnectWithoutPostInput[]
    upsert?: TagToPostUpsertWithWhereUniqueWithoutPostInput | TagToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagToPostCreateManyPostInputEnvelope
    set?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    disconnect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    delete?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    update?: TagToPostUpdateWithWhereUniqueWithoutPostInput | TagToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagToPostUpdateManyWithWhereWithoutPostInput | TagToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
  }

  export type InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput> | InstitutionToPostCreateWithoutPostInput[] | InstitutionToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutPostInput | InstitutionToPostCreateOrConnectWithoutPostInput[]
    upsert?: InstitutionToPostUpsertWithWhereUniqueWithoutPostInput | InstitutionToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InstitutionToPostCreateManyPostInputEnvelope
    set?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    disconnect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    delete?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    update?: InstitutionToPostUpdateWithWhereUniqueWithoutPostInput | InstitutionToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InstitutionToPostUpdateManyWithWhereWithoutPostInput | InstitutionToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
  }

  export type WriterToPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput> | WriterToPostCreateWithoutPostInput[] | WriterToPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutPostInput | WriterToPostCreateOrConnectWithoutPostInput[]
    upsert?: WriterToPostUpsertWithWhereUniqueWithoutPostInput | WriterToPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: WriterToPostCreateManyPostInputEnvelope
    set?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    disconnect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    delete?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    update?: WriterToPostUpdateWithWhereUniqueWithoutPostInput | WriterToPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: WriterToPostUpdateManyWithWhereWithoutPostInput | WriterToPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutDaughtersInput = {
    create?: XOR<CategoryCreateWithoutDaughtersInput, CategoryUncheckedCreateWithoutDaughtersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughtersInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutSubsInput = {
    create?: XOR<CategoryCreateWithoutSubsInput, CategoryUncheckedCreateWithoutSubsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutDaughterInput = {
    create?: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput> | CategoryCreateWithoutDaughterInput[] | CategoryUncheckedCreateWithoutDaughterInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughterInput | CategoryCreateOrConnectWithoutDaughterInput[]
    createMany?: CategoryCreateManyDaughterInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryToPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput> | CategoryToPostCreateWithoutCategoryInput[] | CategoryToPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutCategoryInput | CategoryToPostCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryToPostCreateManyCategoryInputEnvelope
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutDaughterInput = {
    create?: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput> | CategoryCreateWithoutDaughterInput[] | CategoryUncheckedCreateWithoutDaughterInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughterInput | CategoryCreateOrConnectWithoutDaughterInput[]
    createMany?: CategoryCreateManyDaughterInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput> | CategoryToPostCreateWithoutCategoryInput[] | CategoryToPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutCategoryInput | CategoryToPostCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryToPostCreateManyCategoryInputEnvelope
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type CategoryUpdateOneWithoutDaughtersNestedInput = {
    create?: XOR<CategoryCreateWithoutDaughtersInput, CategoryUncheckedCreateWithoutDaughtersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughtersInput
    upsert?: CategoryUpsertWithoutDaughtersInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDaughtersInput, CategoryUpdateWithoutDaughtersInput>, CategoryUncheckedUpdateWithoutDaughtersInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutSubsNestedInput = {
    create?: XOR<CategoryCreateWithoutSubsInput, CategoryUncheckedCreateWithoutSubsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubsInput
    upsert?: CategoryUpsertWithoutSubsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubsInput, CategoryUpdateWithoutSubsInput>, CategoryUncheckedUpdateWithoutSubsInput>
  }

  export type CategoryUpdateManyWithoutDaughterNestedInput = {
    create?: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput> | CategoryCreateWithoutDaughterInput[] | CategoryUncheckedCreateWithoutDaughterInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughterInput | CategoryCreateOrConnectWithoutDaughterInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutDaughterInput | CategoryUpsertWithWhereUniqueWithoutDaughterInput[]
    createMany?: CategoryCreateManyDaughterInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutDaughterInput | CategoryUpdateWithWhereUniqueWithoutDaughterInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutDaughterInput | CategoryUpdateManyWithWhereWithoutDaughterInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryToPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput> | CategoryToPostCreateWithoutCategoryInput[] | CategoryToPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutCategoryInput | CategoryToPostCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryToPostUpsertWithWhereUniqueWithoutCategoryInput | CategoryToPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryToPostCreateManyCategoryInputEnvelope
    set?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    disconnect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    delete?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    update?: CategoryToPostUpdateWithWhereUniqueWithoutCategoryInput | CategoryToPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryToPostUpdateManyWithWhereWithoutCategoryInput | CategoryToPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutDaughterNestedInput = {
    create?: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput> | CategoryCreateWithoutDaughterInput[] | CategoryUncheckedCreateWithoutDaughterInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDaughterInput | CategoryCreateOrConnectWithoutDaughterInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutDaughterInput | CategoryUpsertWithWhereUniqueWithoutDaughterInput[]
    createMany?: CategoryCreateManyDaughterInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutDaughterInput | CategoryUpdateWithWhereUniqueWithoutDaughterInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutDaughterInput | CategoryUpdateManyWithWhereWithoutDaughterInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput> | CategoryToPostCreateWithoutCategoryInput[] | CategoryToPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryToPostCreateOrConnectWithoutCategoryInput | CategoryToPostCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryToPostUpsertWithWhereUniqueWithoutCategoryInput | CategoryToPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryToPostCreateManyCategoryInputEnvelope
    set?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    disconnect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    delete?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    connect?: CategoryToPostWhereUniqueInput | CategoryToPostWhereUniqueInput[]
    update?: CategoryToPostUpdateWithWhereUniqueWithoutCategoryInput | CategoryToPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryToPostUpdateManyWithWhereWithoutCategoryInput | CategoryToPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
  }

  export type TagToPostCreateNestedManyWithoutTagInput = {
    create?: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput> | TagToPostCreateWithoutTagInput[] | TagToPostUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutTagInput | TagToPostCreateOrConnectWithoutTagInput[]
    createMany?: TagToPostCreateManyTagInputEnvelope
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
  }

  export type TagToPostUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput> | TagToPostCreateWithoutTagInput[] | TagToPostUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutTagInput | TagToPostCreateOrConnectWithoutTagInput[]
    createMany?: TagToPostCreateManyTagInputEnvelope
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
  }

  export type TagToPostUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput> | TagToPostCreateWithoutTagInput[] | TagToPostUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutTagInput | TagToPostCreateOrConnectWithoutTagInput[]
    upsert?: TagToPostUpsertWithWhereUniqueWithoutTagInput | TagToPostUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagToPostCreateManyTagInputEnvelope
    set?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    disconnect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    delete?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    update?: TagToPostUpdateWithWhereUniqueWithoutTagInput | TagToPostUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagToPostUpdateManyWithWhereWithoutTagInput | TagToPostUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
  }

  export type TagToPostUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput> | TagToPostCreateWithoutTagInput[] | TagToPostUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagToPostCreateOrConnectWithoutTagInput | TagToPostCreateOrConnectWithoutTagInput[]
    upsert?: TagToPostUpsertWithWhereUniqueWithoutTagInput | TagToPostUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagToPostCreateManyTagInputEnvelope
    set?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    disconnect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    delete?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    connect?: TagToPostWhereUniqueInput | TagToPostWhereUniqueInput[]
    update?: TagToPostUpdateWithWhereUniqueWithoutTagInput | TagToPostUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagToPostUpdateManyWithWhereWithoutTagInput | TagToPostUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
  }

  export type InstitutionToPostCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput> | InstitutionToPostCreateWithoutInstitutionInput[] | InstitutionToPostUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutInstitutionInput | InstitutionToPostCreateOrConnectWithoutInstitutionInput[]
    createMany?: InstitutionToPostCreateManyInstitutionInputEnvelope
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
  }

  export type InstitutionToPostUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput> | InstitutionToPostCreateWithoutInstitutionInput[] | InstitutionToPostUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutInstitutionInput | InstitutionToPostCreateOrConnectWithoutInstitutionInput[]
    createMany?: InstitutionToPostCreateManyInstitutionInputEnvelope
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
  }

  export type InstitutionToPostUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput> | InstitutionToPostCreateWithoutInstitutionInput[] | InstitutionToPostUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutInstitutionInput | InstitutionToPostCreateOrConnectWithoutInstitutionInput[]
    upsert?: InstitutionToPostUpsertWithWhereUniqueWithoutInstitutionInput | InstitutionToPostUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: InstitutionToPostCreateManyInstitutionInputEnvelope
    set?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    disconnect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    delete?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    update?: InstitutionToPostUpdateWithWhereUniqueWithoutInstitutionInput | InstitutionToPostUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: InstitutionToPostUpdateManyWithWhereWithoutInstitutionInput | InstitutionToPostUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
  }

  export type InstitutionToPostUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput> | InstitutionToPostCreateWithoutInstitutionInput[] | InstitutionToPostUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: InstitutionToPostCreateOrConnectWithoutInstitutionInput | InstitutionToPostCreateOrConnectWithoutInstitutionInput[]
    upsert?: InstitutionToPostUpsertWithWhereUniqueWithoutInstitutionInput | InstitutionToPostUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: InstitutionToPostCreateManyInstitutionInputEnvelope
    set?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    disconnect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    delete?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    connect?: InstitutionToPostWhereUniqueInput | InstitutionToPostWhereUniqueInput[]
    update?: InstitutionToPostUpdateWithWhereUniqueWithoutInstitutionInput | InstitutionToPostUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: InstitutionToPostUpdateManyWithWhereWithoutInstitutionInput | InstitutionToPostUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
  }

  export type WriterToPostCreateNestedManyWithoutWriterInput = {
    create?: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput> | WriterToPostCreateWithoutWriterInput[] | WriterToPostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutWriterInput | WriterToPostCreateOrConnectWithoutWriterInput[]
    createMany?: WriterToPostCreateManyWriterInputEnvelope
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
  }

  export type WriterToPostUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput> | WriterToPostCreateWithoutWriterInput[] | WriterToPostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutWriterInput | WriterToPostCreateOrConnectWithoutWriterInput[]
    createMany?: WriterToPostCreateManyWriterInputEnvelope
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
  }

  export type WriterToPostUpdateManyWithoutWriterNestedInput = {
    create?: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput> | WriterToPostCreateWithoutWriterInput[] | WriterToPostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutWriterInput | WriterToPostCreateOrConnectWithoutWriterInput[]
    upsert?: WriterToPostUpsertWithWhereUniqueWithoutWriterInput | WriterToPostUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: WriterToPostCreateManyWriterInputEnvelope
    set?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    disconnect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    delete?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    update?: WriterToPostUpdateWithWhereUniqueWithoutWriterInput | WriterToPostUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: WriterToPostUpdateManyWithWhereWithoutWriterInput | WriterToPostUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
  }

  export type WriterToPostUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput> | WriterToPostCreateWithoutWriterInput[] | WriterToPostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: WriterToPostCreateOrConnectWithoutWriterInput | WriterToPostCreateOrConnectWithoutWriterInput[]
    upsert?: WriterToPostUpsertWithWhereUniqueWithoutWriterInput | WriterToPostUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: WriterToPostCreateManyWriterInputEnvelope
    set?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    disconnect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    delete?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    connect?: WriterToPostWhereUniqueInput | WriterToPostWhereUniqueInput[]
    update?: WriterToPostUpdateWithWhereUniqueWithoutWriterInput | WriterToPostUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: WriterToPostUpdateManyWithWhereWithoutWriterInput | WriterToPostUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    connect?: PostWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    upsert?: PostUpsertWithoutCategoriesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCategoriesInput, PostUpdateWithoutCategoriesInput>, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>, TagUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutInstitutionsInput = {
    create?: XOR<PostCreateWithoutInstitutionsInput, PostUncheckedCreateWithoutInstitutionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInstitutionsInput
    connect?: PostWhereUniqueInput
  }

  export type InstitutionCreateNestedOneWithoutPostsInput = {
    create?: XOR<InstitutionCreateWithoutPostsInput, InstitutionUncheckedCreateWithoutPostsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutPostsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutInstitutionsNestedInput = {
    create?: XOR<PostCreateWithoutInstitutionsInput, PostUncheckedCreateWithoutInstitutionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInstitutionsInput
    upsert?: PostUpsertWithoutInstitutionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInstitutionsInput, PostUpdateWithoutInstitutionsInput>, PostUncheckedUpdateWithoutInstitutionsInput>
  }

  export type InstitutionUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<InstitutionCreateWithoutPostsInput, InstitutionUncheckedCreateWithoutPostsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutPostsInput
    upsert?: InstitutionUpsertWithoutPostsInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutPostsInput, InstitutionUpdateWithoutPostsInput>, InstitutionUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutWritersInput = {
    create?: XOR<PostCreateWithoutWritersInput, PostUncheckedCreateWithoutWritersInput>
    connectOrCreate?: PostCreateOrConnectWithoutWritersInput
    connect?: PostWhereUniqueInput
  }

  export type WriterCreateNestedOneWithoutPostsInput = {
    create?: XOR<WriterCreateWithoutPostsInput, WriterUncheckedCreateWithoutPostsInput>
    connectOrCreate?: WriterCreateOrConnectWithoutPostsInput
    connect?: WriterWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutWritersNestedInput = {
    create?: XOR<PostCreateWithoutWritersInput, PostUncheckedCreateWithoutWritersInput>
    connectOrCreate?: PostCreateOrConnectWithoutWritersInput
    upsert?: PostUpsertWithoutWritersInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutWritersInput, PostUpdateWithoutWritersInput>, PostUncheckedUpdateWithoutWritersInput>
  }

  export type WriterUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<WriterCreateWithoutPostsInput, WriterUncheckedCreateWithoutPostsInput>
    connectOrCreate?: WriterCreateOrConnectWithoutPostsInput
    upsert?: WriterUpsertWithoutPostsInput
    connect?: WriterWhereUniqueInput
    update?: XOR<XOR<WriterUpdateToOneWithWhereWithoutPostsInput, WriterUpdateWithoutPostsInput>, WriterUncheckedUpdateWithoutPostsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    email?: string | null
    url?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    email?: string | null
    url?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryToPostCreateWithoutPostInput = {
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type CategoryToPostUncheckedCreateWithoutPostInput = {
    categoryId: string
  }

  export type CategoryToPostCreateOrConnectWithoutPostInput = {
    where: CategoryToPostWhereUniqueInput
    create: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput>
  }

  export type CategoryToPostCreateManyPostInputEnvelope = {
    data: CategoryToPostCreateManyPostInput | CategoryToPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type TagToPostCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type TagToPostUncheckedCreateWithoutPostInput = {
    tagId: string
  }

  export type TagToPostCreateOrConnectWithoutPostInput = {
    where: TagToPostWhereUniqueInput
    create: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput>
  }

  export type TagToPostCreateManyPostInputEnvelope = {
    data: TagToPostCreateManyPostInput | TagToPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionToPostCreateWithoutPostInput = {
    institution: InstitutionCreateNestedOneWithoutPostsInput
  }

  export type InstitutionToPostUncheckedCreateWithoutPostInput = {
    institutionId: string
  }

  export type InstitutionToPostCreateOrConnectWithoutPostInput = {
    where: InstitutionToPostWhereUniqueInput
    create: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput>
  }

  export type InstitutionToPostCreateManyPostInputEnvelope = {
    data: InstitutionToPostCreateManyPostInput | InstitutionToPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type WriterToPostCreateWithoutPostInput = {
    writer: WriterCreateNestedOneWithoutPostsInput
  }

  export type WriterToPostUncheckedCreateWithoutPostInput = {
    writerId: string
  }

  export type WriterToPostCreateOrConnectWithoutPostInput = {
    where: WriterToPostWhereUniqueInput
    create: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput>
  }

  export type WriterToPostCreateManyPostInputEnvelope = {
    data: WriterToPostCreateManyPostInput | WriterToPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryToPostUpsertWithWhereUniqueWithoutPostInput = {
    where: CategoryToPostWhereUniqueInput
    update: XOR<CategoryToPostUpdateWithoutPostInput, CategoryToPostUncheckedUpdateWithoutPostInput>
    create: XOR<CategoryToPostCreateWithoutPostInput, CategoryToPostUncheckedCreateWithoutPostInput>
  }

  export type CategoryToPostUpdateWithWhereUniqueWithoutPostInput = {
    where: CategoryToPostWhereUniqueInput
    data: XOR<CategoryToPostUpdateWithoutPostInput, CategoryToPostUncheckedUpdateWithoutPostInput>
  }

  export type CategoryToPostUpdateManyWithWhereWithoutPostInput = {
    where: CategoryToPostScalarWhereInput
    data: XOR<CategoryToPostUpdateManyMutationInput, CategoryToPostUncheckedUpdateManyWithoutPostInput>
  }

  export type CategoryToPostScalarWhereInput = {
    AND?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
    OR?: CategoryToPostScalarWhereInput[]
    NOT?: CategoryToPostScalarWhereInput | CategoryToPostScalarWhereInput[]
    postId?: StringFilter<"CategoryToPost"> | string
    categoryId?: StringFilter<"CategoryToPost"> | string
  }

  export type TagToPostUpsertWithWhereUniqueWithoutPostInput = {
    where: TagToPostWhereUniqueInput
    update: XOR<TagToPostUpdateWithoutPostInput, TagToPostUncheckedUpdateWithoutPostInput>
    create: XOR<TagToPostCreateWithoutPostInput, TagToPostUncheckedCreateWithoutPostInput>
  }

  export type TagToPostUpdateWithWhereUniqueWithoutPostInput = {
    where: TagToPostWhereUniqueInput
    data: XOR<TagToPostUpdateWithoutPostInput, TagToPostUncheckedUpdateWithoutPostInput>
  }

  export type TagToPostUpdateManyWithWhereWithoutPostInput = {
    where: TagToPostScalarWhereInput
    data: XOR<TagToPostUpdateManyMutationInput, TagToPostUncheckedUpdateManyWithoutPostInput>
  }

  export type TagToPostScalarWhereInput = {
    AND?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
    OR?: TagToPostScalarWhereInput[]
    NOT?: TagToPostScalarWhereInput | TagToPostScalarWhereInput[]
    postId?: StringFilter<"TagToPost"> | string
    tagId?: StringFilter<"TagToPost"> | string
  }

  export type InstitutionToPostUpsertWithWhereUniqueWithoutPostInput = {
    where: InstitutionToPostWhereUniqueInput
    update: XOR<InstitutionToPostUpdateWithoutPostInput, InstitutionToPostUncheckedUpdateWithoutPostInput>
    create: XOR<InstitutionToPostCreateWithoutPostInput, InstitutionToPostUncheckedCreateWithoutPostInput>
  }

  export type InstitutionToPostUpdateWithWhereUniqueWithoutPostInput = {
    where: InstitutionToPostWhereUniqueInput
    data: XOR<InstitutionToPostUpdateWithoutPostInput, InstitutionToPostUncheckedUpdateWithoutPostInput>
  }

  export type InstitutionToPostUpdateManyWithWhereWithoutPostInput = {
    where: InstitutionToPostScalarWhereInput
    data: XOR<InstitutionToPostUpdateManyMutationInput, InstitutionToPostUncheckedUpdateManyWithoutPostInput>
  }

  export type InstitutionToPostScalarWhereInput = {
    AND?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
    OR?: InstitutionToPostScalarWhereInput[]
    NOT?: InstitutionToPostScalarWhereInput | InstitutionToPostScalarWhereInput[]
    postId?: StringFilter<"InstitutionToPost"> | string
    institutionId?: StringFilter<"InstitutionToPost"> | string
  }

  export type WriterToPostUpsertWithWhereUniqueWithoutPostInput = {
    where: WriterToPostWhereUniqueInput
    update: XOR<WriterToPostUpdateWithoutPostInput, WriterToPostUncheckedUpdateWithoutPostInput>
    create: XOR<WriterToPostCreateWithoutPostInput, WriterToPostUncheckedCreateWithoutPostInput>
  }

  export type WriterToPostUpdateWithWhereUniqueWithoutPostInput = {
    where: WriterToPostWhereUniqueInput
    data: XOR<WriterToPostUpdateWithoutPostInput, WriterToPostUncheckedUpdateWithoutPostInput>
  }

  export type WriterToPostUpdateManyWithWhereWithoutPostInput = {
    where: WriterToPostScalarWhereInput
    data: XOR<WriterToPostUpdateManyMutationInput, WriterToPostUncheckedUpdateManyWithoutPostInput>
  }

  export type WriterToPostScalarWhereInput = {
    AND?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
    OR?: WriterToPostScalarWhereInput[]
    NOT?: WriterToPostScalarWhereInput | WriterToPostScalarWhereInput[]
    postId?: StringFilter<"WriterToPost"> | string
    writerId?: StringFilter<"WriterToPost"> | string
  }

  export type PostCreateWithoutAuthorInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostCreateNestedManyWithoutPostInput
    tags?: TagToPostCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostCreateNestedManyWithoutPostInput
    writers?: WriterToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostUncheckedCreateNestedManyWithoutPostInput
    tags?: TagToPostUncheckedCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostUncheckedCreateNestedManyWithoutPostInput
    writers?: WriterToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeFilter<"Post"> | Date | string
    dateGmt?: DateTimeFilter<"Post"> | Date | string
    modified?: DateTimeNullableFilter<"Post"> | Date | string | null
    modifiedGmt?: DateTimeNullableFilter<"Post"> | Date | string | null
    slug?: StringFilter<"Post"> | string
    status?: StringFilter<"Post"> | string
    commentStatus?: StringFilter<"Post"> | string
    pingStatus?: StringFilter<"Post"> | string
    guid?: StringNullableFilter<"Post"> | string | null
    menuOrder?: IntFilter<"Post"> | number
    vimeoVideoId?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CategoryCreateWithoutDaughtersInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutDaughtersInput
    daughter?: CategoryCreateNestedOneWithoutSubsInput
    subs?: CategoryCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutDaughtersInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subs?: CategoryUncheckedCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutDaughtersInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDaughtersInput, CategoryUncheckedCreateWithoutDaughtersInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryCreateNestedManyWithoutParentInput
    daughter?: CategoryCreateNestedOneWithoutSubsInput
    subs?: CategoryCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryUncheckedCreateNestedManyWithoutParentInput
    subs?: CategoryUncheckedCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutSubsInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutDaughtersInput
    daughters?: CategoryCreateNestedManyWithoutParentInput
    daughter?: CategoryCreateNestedOneWithoutSubsInput
    posts?: CategoryToPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubsInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryUncheckedCreateNestedManyWithoutParentInput
    posts?: CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubsInput, CategoryUncheckedCreateWithoutSubsInput>
  }

  export type CategoryCreateWithoutDaughterInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutDaughtersInput
    daughters?: CategoryCreateNestedManyWithoutParentInput
    subs?: CategoryCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutDaughterInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryUncheckedCreateNestedManyWithoutParentInput
    subs?: CategoryUncheckedCreateNestedManyWithoutDaughterInput
    posts?: CategoryToPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutDaughterInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput>
  }

  export type CategoryCreateManyDaughterInputEnvelope = {
    data: CategoryCreateManyDaughterInput | CategoryCreateManyDaughterInput[]
    skipDuplicates?: boolean
  }

  export type CategoryToPostCreateWithoutCategoryInput = {
    post: PostCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryToPostUncheckedCreateWithoutCategoryInput = {
    postId: string
  }

  export type CategoryToPostCreateOrConnectWithoutCategoryInput = {
    where: CategoryToPostWhereUniqueInput
    create: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryToPostCreateManyCategoryInputEnvelope = {
    data: CategoryToPostCreateManyCategoryInput | CategoryToPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutDaughtersInput = {
    update: XOR<CategoryUpdateWithoutDaughtersInput, CategoryUncheckedUpdateWithoutDaughtersInput>
    create: XOR<CategoryCreateWithoutDaughtersInput, CategoryUncheckedCreateWithoutDaughtersInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDaughtersInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDaughtersInput, CategoryUncheckedUpdateWithoutDaughtersInput>
  }

  export type CategoryUpdateWithoutDaughtersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutDaughtersNestedInput
    daughter?: CategoryUpdateOneWithoutSubsNestedInput
    subs?: CategoryUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDaughtersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subs?: CategoryUncheckedUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    parentId?: StringNullableFilter<"Category"> | string | null
    daughterId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type CategoryUpsertWithoutSubsInput = {
    update: XOR<CategoryUpdateWithoutSubsInput, CategoryUncheckedUpdateWithoutSubsInput>
    create: XOR<CategoryCreateWithoutSubsInput, CategoryUncheckedCreateWithoutSubsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubsInput, CategoryUncheckedUpdateWithoutSubsInput>
  }

  export type CategoryUpdateWithoutSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutDaughtersNestedInput
    daughters?: CategoryUpdateManyWithoutParentNestedInput
    daughter?: CategoryUpdateOneWithoutSubsNestedInput
    posts?: CategoryToPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    posts?: CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutDaughterInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutDaughterInput, CategoryUncheckedUpdateWithoutDaughterInput>
    create: XOR<CategoryCreateWithoutDaughterInput, CategoryUncheckedCreateWithoutDaughterInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutDaughterInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutDaughterInput, CategoryUncheckedUpdateWithoutDaughterInput>
  }

  export type CategoryUpdateManyWithWhereWithoutDaughterInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutDaughterInput>
  }

  export type CategoryToPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryToPostWhereUniqueInput
    update: XOR<CategoryToPostUpdateWithoutCategoryInput, CategoryToPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryToPostCreateWithoutCategoryInput, CategoryToPostUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryToPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryToPostWhereUniqueInput
    data: XOR<CategoryToPostUpdateWithoutCategoryInput, CategoryToPostUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryToPostUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryToPostScalarWhereInput
    data: XOR<CategoryToPostUpdateManyMutationInput, CategoryToPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TagToPostCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type TagToPostUncheckedCreateWithoutTagInput = {
    postId: string
  }

  export type TagToPostCreateOrConnectWithoutTagInput = {
    where: TagToPostWhereUniqueInput
    create: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput>
  }

  export type TagToPostCreateManyTagInputEnvelope = {
    data: TagToPostCreateManyTagInput | TagToPostCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TagToPostUpsertWithWhereUniqueWithoutTagInput = {
    where: TagToPostWhereUniqueInput
    update: XOR<TagToPostUpdateWithoutTagInput, TagToPostUncheckedUpdateWithoutTagInput>
    create: XOR<TagToPostCreateWithoutTagInput, TagToPostUncheckedCreateWithoutTagInput>
  }

  export type TagToPostUpdateWithWhereUniqueWithoutTagInput = {
    where: TagToPostWhereUniqueInput
    data: XOR<TagToPostUpdateWithoutTagInput, TagToPostUncheckedUpdateWithoutTagInput>
  }

  export type TagToPostUpdateManyWithWhereWithoutTagInput = {
    where: TagToPostScalarWhereInput
    data: XOR<TagToPostUpdateManyMutationInput, TagToPostUncheckedUpdateManyWithoutTagInput>
  }

  export type InstitutionToPostCreateWithoutInstitutionInput = {
    post: PostCreateNestedOneWithoutInstitutionsInput
  }

  export type InstitutionToPostUncheckedCreateWithoutInstitutionInput = {
    postId: string
  }

  export type InstitutionToPostCreateOrConnectWithoutInstitutionInput = {
    where: InstitutionToPostWhereUniqueInput
    create: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput>
  }

  export type InstitutionToPostCreateManyInstitutionInputEnvelope = {
    data: InstitutionToPostCreateManyInstitutionInput | InstitutionToPostCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionToPostUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: InstitutionToPostWhereUniqueInput
    update: XOR<InstitutionToPostUpdateWithoutInstitutionInput, InstitutionToPostUncheckedUpdateWithoutInstitutionInput>
    create: XOR<InstitutionToPostCreateWithoutInstitutionInput, InstitutionToPostUncheckedCreateWithoutInstitutionInput>
  }

  export type InstitutionToPostUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: InstitutionToPostWhereUniqueInput
    data: XOR<InstitutionToPostUpdateWithoutInstitutionInput, InstitutionToPostUncheckedUpdateWithoutInstitutionInput>
  }

  export type InstitutionToPostUpdateManyWithWhereWithoutInstitutionInput = {
    where: InstitutionToPostScalarWhereInput
    data: XOR<InstitutionToPostUpdateManyMutationInput, InstitutionToPostUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type WriterToPostCreateWithoutWriterInput = {
    post: PostCreateNestedOneWithoutWritersInput
  }

  export type WriterToPostUncheckedCreateWithoutWriterInput = {
    postId: string
  }

  export type WriterToPostCreateOrConnectWithoutWriterInput = {
    where: WriterToPostWhereUniqueInput
    create: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput>
  }

  export type WriterToPostCreateManyWriterInputEnvelope = {
    data: WriterToPostCreateManyWriterInput | WriterToPostCreateManyWriterInput[]
    skipDuplicates?: boolean
  }

  export type WriterToPostUpsertWithWhereUniqueWithoutWriterInput = {
    where: WriterToPostWhereUniqueInput
    update: XOR<WriterToPostUpdateWithoutWriterInput, WriterToPostUncheckedUpdateWithoutWriterInput>
    create: XOR<WriterToPostCreateWithoutWriterInput, WriterToPostUncheckedCreateWithoutWriterInput>
  }

  export type WriterToPostUpdateWithWhereUniqueWithoutWriterInput = {
    where: WriterToPostWhereUniqueInput
    data: XOR<WriterToPostUpdateWithoutWriterInput, WriterToPostUncheckedUpdateWithoutWriterInput>
  }

  export type WriterToPostUpdateManyWithWhereWithoutWriterInput = {
    where: WriterToPostScalarWhereInput
    data: XOR<WriterToPostUpdateManyMutationInput, WriterToPostUncheckedUpdateManyWithoutWriterInput>
  }

  export type PostCreateWithoutCategoriesInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    tags?: TagToPostCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostCreateNestedManyWithoutPostInput
    writers?: WriterToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagToPostUncheckedCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostUncheckedCreateNestedManyWithoutPostInput
    writers?: WriterToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutDaughtersInput
    daughters?: CategoryCreateNestedManyWithoutParentInput
    daughter?: CategoryCreateNestedOneWithoutSubsInput
    subs?: CategoryCreateNestedManyWithoutDaughterInput
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daughters?: CategoryUncheckedCreateNestedManyWithoutParentInput
    subs?: CategoryUncheckedCreateNestedManyWithoutDaughterInput
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutCategoriesInput = {
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    tags?: TagToPostUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagToPostUncheckedUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutDaughtersNestedInput
    daughters?: CategoryUpdateManyWithoutParentNestedInput
    daughter?: CategoryUpdateOneWithoutSubsNestedInput
    subs?: CategoryUpdateManyWithoutDaughterNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    subs?: CategoryUncheckedUpdateManyWithoutDaughterNestedInput
  }

  export type PostCreateWithoutTagsInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryToPostCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostCreateNestedManyWithoutPostInput
    writers?: WriterToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostUncheckedCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostUncheckedCreateNestedManyWithoutPostInput
    writers?: WriterToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryToPostUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUncheckedUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutInstitutionsInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryToPostCreateNestedManyWithoutPostInput
    tags?: TagToPostCreateNestedManyWithoutPostInput
    writers?: WriterToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutInstitutionsInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostUncheckedCreateNestedManyWithoutPostInput
    tags?: TagToPostUncheckedCreateNestedManyWithoutPostInput
    writers?: WriterToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutInstitutionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInstitutionsInput, PostUncheckedCreateWithoutInstitutionsInput>
  }

  export type InstitutionCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionCreateOrConnectWithoutPostsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutPostsInput, InstitutionUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutInstitutionsInput = {
    update: XOR<PostUpdateWithoutInstitutionsInput, PostUncheckedUpdateWithoutInstitutionsInput>
    create: XOR<PostCreateWithoutInstitutionsInput, PostUncheckedCreateWithoutInstitutionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInstitutionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInstitutionsInput, PostUncheckedUpdateWithoutInstitutionsInput>
  }

  export type PostUpdateWithoutInstitutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryToPostUpdateManyWithoutPostNestedInput
    tags?: TagToPostUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutInstitutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagToPostUncheckedUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type InstitutionUpsertWithoutPostsInput = {
    update: XOR<InstitutionUpdateWithoutPostsInput, InstitutionUncheckedUpdateWithoutPostsInput>
    create: XOR<InstitutionCreateWithoutPostsInput, InstitutionUncheckedCreateWithoutPostsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutPostsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutPostsInput, InstitutionUncheckedUpdateWithoutPostsInput>
  }

  export type InstitutionUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutWritersInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryToPostCreateNestedManyWithoutPostInput
    tags?: TagToPostCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutWritersInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryToPostUncheckedCreateNestedManyWithoutPostInput
    tags?: TagToPostUncheckedCreateNestedManyWithoutPostInput
    institutions?: InstitutionToPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutWritersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutWritersInput, PostUncheckedCreateWithoutWritersInput>
  }

  export type WriterCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    imgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    slug: string
    imgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterCreateOrConnectWithoutPostsInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutPostsInput, WriterUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutWritersInput = {
    update: XOR<PostUpdateWithoutWritersInput, PostUncheckedUpdateWithoutWritersInput>
    create: XOR<PostCreateWithoutWritersInput, PostUncheckedCreateWithoutWritersInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutWritersInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutWritersInput, PostUncheckedUpdateWithoutWritersInput>
  }

  export type PostUpdateWithoutWritersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryToPostUpdateManyWithoutPostNestedInput
    tags?: TagToPostUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutWritersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagToPostUncheckedUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type WriterUpsertWithoutPostsInput = {
    update: XOR<WriterUpdateWithoutPostsInput, WriterUncheckedUpdateWithoutPostsInput>
    create: XOR<WriterCreateWithoutPostsInput, WriterUncheckedCreateWithoutPostsInput>
    where?: WriterWhereInput
  }

  export type WriterUpdateToOneWithWhereWithoutPostsInput = {
    where?: WriterWhereInput
    data: XOR<WriterUpdateWithoutPostsInput, WriterUncheckedUpdateWithoutPostsInput>
  }

  export type WriterUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryToPostCreateManyPostInput = {
    categoryId: string
  }

  export type TagToPostCreateManyPostInput = {
    tagId: string
  }

  export type InstitutionToPostCreateManyPostInput = {
    institutionId: string
  }

  export type WriterToPostCreateManyPostInput = {
    writerId: string
  }

  export type CategoryToPostUpdateWithoutPostInput = {
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CategoryToPostUncheckedUpdateWithoutPostInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryToPostUncheckedUpdateManyWithoutPostInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type TagToPostUncheckedUpdateWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostUncheckedUpdateManyWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostUpdateWithoutPostInput = {
    institution?: InstitutionUpdateOneRequiredWithoutPostsNestedInput
  }

  export type InstitutionToPostUncheckedUpdateWithoutPostInput = {
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostUncheckedUpdateManyWithoutPostInput = {
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostUpdateWithoutPostInput = {
    writer?: WriterUpdateOneRequiredWithoutPostsNestedInput
  }

  export type WriterToPostUncheckedUpdateWithoutPostInput = {
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostUncheckedUpdateManyWithoutPostInput = {
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyAuthorInput = {
    id: string
    title: string
    content: string
    excerpt?: string | null
    imageUrl?: string | null
    date: Date | string
    dateGmt: Date | string
    modified?: Date | string | null
    modifiedGmt?: Date | string | null
    slug: string
    status?: string
    commentStatus: string
    pingStatus: string
    guid?: string | null
    menuOrder?: number
    vimeoVideoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUpdateManyWithoutPostNestedInput
    tags?: TagToPostUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryToPostUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagToPostUncheckedUpdateManyWithoutPostNestedInput
    institutions?: InstitutionToPostUncheckedUpdateManyWithoutPostNestedInput
    writers?: WriterToPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateGmt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedGmt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    commentStatus?: StringFieldUpdateOperationsInput | string
    pingStatus?: StringFieldUpdateOperationsInput | string
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    menuOrder?: IntFieldUpdateOperationsInput | number
    vimeoVideoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    daughterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyDaughterInput = {
    id: string
    name: string
    slug: string
    type: $Enums.CategoryType
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryToPostCreateManyCategoryInput = {
    postId: string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUpdateManyWithoutParentNestedInput
    daughter?: CategoryUpdateOneWithoutSubsNestedInput
    subs?: CategoryUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    subs?: CategoryUncheckedUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    daughterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutDaughterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutDaughtersNestedInput
    daughters?: CategoryUpdateManyWithoutParentNestedInput
    subs?: CategoryUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDaughterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daughters?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    subs?: CategoryUncheckedUpdateManyWithoutDaughterNestedInput
    posts?: CategoryToPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutDaughterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryToPostUpdateWithoutCategoryInput = {
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryToPostUncheckedUpdateWithoutCategoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryToPostUncheckedUpdateManyWithoutCategoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostCreateManyTagInput = {
    postId: string
  }

  export type TagToPostUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagToPostUncheckedUpdateWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type TagToPostUncheckedUpdateManyWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostCreateManyInstitutionInput = {
    postId: string
  }

  export type InstitutionToPostUpdateWithoutInstitutionInput = {
    post?: PostUpdateOneRequiredWithoutInstitutionsNestedInput
  }

  export type InstitutionToPostUncheckedUpdateWithoutInstitutionInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionToPostUncheckedUpdateManyWithoutInstitutionInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostCreateManyWriterInput = {
    postId: string
  }

  export type WriterToPostUpdateWithoutWriterInput = {
    post?: PostUpdateOneRequiredWithoutWritersNestedInput
  }

  export type WriterToPostUncheckedUpdateWithoutWriterInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterToPostUncheckedUpdateManyWithoutWriterInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}