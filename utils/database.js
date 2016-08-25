import pg from 'pg';
console.log(pg);
export function create = (callback) {
    var dbName = process.env.POSTGRES_DATABASE,
        username = process.env.POSTGRES_USER,
        password = process.env.POSTGRES_PASSWORD,
        host = process.env.POSTGRES_HOST

    var conStringPri = 'postgres://' + username + ':' + password + '@' +
        host + '/postgres';
    // var conStringPost = 'postgres://' + username + ':' + password + '@' +
    //     host + '/' + dbName;

    pg.connect(conStringPri, function (err, client, done) {
        client.query('CREATE DATABASE ' + dbName, function (err) {
            // var sequelize = new Sequelize(conStringPost);
            callback(sequelize);
            client.end();
        });
    });
};
