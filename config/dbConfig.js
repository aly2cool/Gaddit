module.exports = {
host: process.env.PG_HOST || 'localhost',
port: process.env.PG_PORT || 5432,
database: process.env.PG_DATABASE || 'gaddit_db'
}
