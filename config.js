/**
 * Created by santi8ago8 on 20/09/14.
 */



module.exports = {

    //created when no commands
    firstCommands: [
        {command: process.env.COMMAND || 'echo Welcome to server admin!'}
    ],

    //created when no user
    firstUser: {
        name:  process.env.LOGIN || 'admin',
        password: process.env.PASS || 'admin',
        tokens: []
    },

    //mongo config
    mongo: {
        host: process.env.MONGOHOST || 'localhost',
        port: process.env.MONGOPORT || 27017,
        db: process.env.MONGODB || 'ServerAdministration',
        collCommands: 'commands',
        collUsers: 'users'
    }
};
