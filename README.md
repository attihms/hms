# hms

# Install dependencies
`npm install`

# Connect database
+ Create a database on your data server
+ Rename .env.tmp -> .env
- Change configuration following your development environment

+ Migrate & seed
`node_modules/.bin/sequelize db:migrate`
`node_modules/.bin/sequelize db:seed:all`

+ Generate sample data
`npm run generate_sample_data`

# Start
`npm start`
