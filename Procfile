dev: nodemon src/ --exec babel-node
web:  NODE_ENV=production node_modules/.bin/sequelize db:migrate && node_modules/.bin/sequelize db:seed:all && node src/ --exec babel-node
