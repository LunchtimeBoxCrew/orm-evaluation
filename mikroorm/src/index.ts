import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata";
import { Interest, User } from "./entities";

(async () => {
  const orm = await MikroORM.init(); // CLI config will be used automatically
  const em = orm.em;

  const interest = new Interest("Music");

  const user = new User("LTBUser", "user@ltb.org");
  user.interests.add(interest);

  const user2 = new User("LTBUser2", "user2@ltb.org");
  user.friends.push(user2);

  // Save all changes to db
  em.persistAndFlush(user);
})();
