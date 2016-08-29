web: node dist/index.js
dev: nodemon src/index.js --exec babel-node
build: node_modules/.bin/babel -w src/ -d dist build -s --optimize_for_size --max_old_space_size=920 --gc_interval=100
test: node_modules/.bin/mocha --compilers js:babel-core/register
generate_sample_data: node data/create-sample
