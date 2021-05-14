// Update with your config settings.

export const config = {
  development: {
    client: "postgresql",
    connection: {
      database: "web_tech",
      user: "postgres",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};