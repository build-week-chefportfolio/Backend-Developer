exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
    })
    .createTable('chefs', tbl => {
        tbl.increments();
        tbl.string('FirstNameLastName', 255)
            .notNullable();
        tbl.integer('yearsexp');
        tbl.boolean('relocate').defaultTo(false)
        tbl.string('location', 255).notNullable()
        tbl.string('state', 255).notNullable()
        tbl.string('contactpref', 10).notNullable()
        tbl.string('telephone/email', 255).notNullable()
        tbl.boolean('public').defaultTo(true)
        tbl.integer('users_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.blob('image')
        tbl.string('RecipeName', 255)
            .unique()
            .notNullable();
        tbl.string('prepTime', 255)
            .notNullable()
    })
    .createTable('chefs_recipe', tbl => {
        tbl.increments();
        tbl.integer('chefs_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('chefs')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('chefs')
    .dropTableIfExists('recipe')
    .dropTableIfExists('chefs_recipe');
  };
  