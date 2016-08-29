# hms

# Back end setup steps
cd back-end

## Install dependencies
`npm install`

## Connect database
+ Create a database on your data server
+ Change `config/config.json` following your development environment

+ Migrate & seed
`node_modules/.bin/sequelize db:migrate`
`node_modules/.bin/sequelize db:seed:all`

+ Generate sample data
`npm run generate_sample_data`

## Start
+ rename `.env.tmp` -> `.env`, change configuration following your development environment.
`npm start`
