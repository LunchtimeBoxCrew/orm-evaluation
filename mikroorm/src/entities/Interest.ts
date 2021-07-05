import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { User } from "./User";

@Entity()
export class Interest {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @ManyToMany(() => User, (u) => u.interests)
  books: Collection<User> = new Collection<User>(this);

  constructor(name: string) {
    this.name = name;
  }
}
