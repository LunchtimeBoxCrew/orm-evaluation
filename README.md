# ORM EVAL

**Was is den ein ORM?**

Damit sich unsere Applikationen auch Dinge merken können speichern wir uns Daten in Datenbanken.

Diese Datenbanken wurden von Hardcore Nerds für andere Hardcore Nerds entwickelt. Also sprechen die Datenbanken auch Hardcore Nerdsprache, die sieht ungefähr so aus:

```sql
insert into `user` (`created_at`, `updated_at`, `name`, `email`, `terms_accepted`, `born`) values (1625491902699, 1625491902699, 'LTBUser2', 'user2@ltb.org', false, NULL), (1625491902696, 1625491902696, 'LTBUser', 'user@ltb.org', false, NULL)
```

Wir sind keine Hardcore Nerds sondern nur normale Nerds und deswegen wollen wir in einfacherer Sprache mit unserer Datenbank sprechen. Dafür benutzen wir ein ORM. Ein ORM (Object-Relational Mapping) ist quasi eine Mittelsperson die für uns mit der Datenbank spricht. (Außerdem machen die noch einige andere Sachen).

Hier ein Beispiel wie der obere Code mit MikroORM aussehen könnte:

```ts
const user = new User("LTBUser", "user@ltb.org");
em.persistAndFlush(user);
```

## Mikroorm

So sieht die User Entity in MikroORM aus:

```ts
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
```

## Prisma

So sieht der User Entity in Prisma aus:

```ts
model User {
  id    Int        @id @default(autoincrement())
  email String     @unique
  name  String?
  age   Int
  posts Interest[]
  friends User[]
}
```
