dev: nodemon src/ --exec babel-node
production: NODE_ENV=production node src/
web: node src/
deploy_database: NODE_ENV=production node_modules/.bin/sequelize db:migrate && NODE_ENV=production node_modules/.bin/sequelize db:seed:all
