const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config()
const mongoose = require('mongoose');

const User = require('./models/User');
const Post = require('./models/Post');

mongoose
    .connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(()=>console.log('DB connected'))
    .catch(err=>console.log(err))

const typeDefs = gql`
type Query {
    getTodos: [Todo]
}

type Todo {
    task: String
    completed: Boolean
}
`;

const server = new ApolloServer({
    typeDefs,
    context: {
        User,
        Post
    }
})

server.listen(4000).then(({url})=>{
    console.log(`server listening on ${url}`)
});