import {
  Collection,
  Entity,
  ManyToMany,
  Property,
  Unique,
} from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";
import { Interest } from "./Interest";

@Entity()
export class User extends BaseEntity {
  @Property()
  name: string;

  @Property()
  @Unique()
  email: string;

  @Property()
  termsAccepted = false;

  @Property({ nullable: true })
  born?: Date;

  @ManyToMany(() => Interest)
  interests = new Collection<Interest>(this);

  @ManyToMany(() => User)
  friends: User[] = [];

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
}
