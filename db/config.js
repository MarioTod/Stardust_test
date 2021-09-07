exports.config = {
    connectionLimit: 10,
    host: 'localhost',
    // Non usiamo *** mai *** root senza password
    user: 'root',
    password: '',
    database: 'stardust',
    multipleStatements: true // consente query multiple in un'unica istruzione SQL
}

