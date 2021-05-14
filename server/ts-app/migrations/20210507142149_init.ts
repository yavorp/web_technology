import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable().unique('email_uniq');
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users');
}

