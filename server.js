const { ApolloServer, gql } = require('apollo-server')

const todos = [
    { task: 'A', completed: false },
    { task: 'B', completed: true },
    { task: 'C', completed: false },
]

const typeDefs = gql`
type Query {
    getTodos: [Todo]
}

type Todo {
    task: String
    completed: Boolean
}
`;

const resolvers = {
    Query: {
        getTodos: () => todos
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({url})=>{
    console.log(`server listening on ${url}`)
});