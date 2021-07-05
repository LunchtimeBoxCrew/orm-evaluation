import { Options } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { BaseEntity, Interest, User } from "./entities";

const config: Options = {
  type: "sqlite",
  dbName: "test.db",
  // as we are using class references here, we don't need to specify `entitiesTs` option
  entities: [User, Interest, BaseEntity],
  highlighter: new SqlHighlighter(),
  debug: true,
};

export default config;
