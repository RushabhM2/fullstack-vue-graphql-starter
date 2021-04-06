const { ApolloServer } = require('apollo-server');
require('dotenv').config()
const mongoose = require('mongoose');

const fs = require('fs')
const path = require('path')

// Importing typeDefs
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');

// Importing resolvers
const resolvers = require('./resolvers')

// Importing models for Apollo GraphQL server context
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to Mongo Atlas database
mongoose
    .connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    .then(()=>console.log('DB connected'))
    .catch(err=>console.log(err))

    // Creating server
const server = new ApolloServer({
    typeDefs,
    context: {
        User,
        Post
    },
    resolvers
})

// Start listening
server.listen(4000).then(({url})=>{
    console.log(`server listening on ${url}`)
});