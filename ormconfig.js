module.exports = {
    type: 'postgres',
    host:'db',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'cursonestjs',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
    cli: {
        migrationDir: 'src/migration'
    },
    
  }