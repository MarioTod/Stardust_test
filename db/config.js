exports.config = {
    connectionLimit: 10,
    host: 'eu-cdbr-west-01.cleardb.com',
    // Non usiamo *** mai *** root senza password
    user: 'b95dc8c1785b4d',
    password: 'c3baea9b',
    database: 'heroku_8729383960508c1',
    multipleStatements: true // consente query multiple in un'unica istruzione SQL
}
