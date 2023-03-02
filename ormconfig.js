module.exports = {
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
    cli: {
        migrationDir: 'src/migration'
    },
    
  }