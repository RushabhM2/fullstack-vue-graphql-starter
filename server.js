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

type Mutation {
    addTodo(task: String, completed: Boolean): Todo
}

type Todo {
    task: String
    completed: Boolean
}
`;

const resolvers = {
    Query: {
        getTodos: () => todos
    },
    Mutation: {
        addTodo: (_, {task, completed}) => {
            const todo = {
                task,
                completed
            }
            todos.push(todo)
            return todo;
        },
        // addTodo: (_, args) => {
        //     const todo = {
        //         task: args.task,
        //         completed: args.completed
        //     }
        //     todos.push(todo)
        //     return todo;
        // }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({url})=>{
    console.log(`server listening on ${url}`)
});