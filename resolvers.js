const Post = require("./models/Post");
const User = require("./models/User");

module.exports = {
    Query: {
        getUser: async (_, { id }, { User }) => {
            const user = await User.findOne({ _id: id })
            return user;
        },
        getUsers: async (_, __, { User }) => {
            const users = await User.find({});

            return users;
        },
        getPosts: async(_, args, { Post }) => {
            const posts = await Post
            .find({})
            .sort({createdDate: 'desc'})
            .populate({
                path: 'createdBy',
                model: 'User'
            });
            return posts;
        }
    },
    Mutation: {
        addPost: async (_, {title, imageUrl, categories, description, creatorId}, { Post }) => {
            const newPost = await new Post({
                title,
                imageUrl,
                categories,
                description,
                createdBy: creatorId
            }).save()

            return newPost;
        },
        signupUser: async (_, { username, email, password}, { User }) => {
            const user = await User.findOne({ username })
            if (user) {
                throw new Error ('User already exists')
            }
            const newUser = await new User({
                username,
                email,
                password
            }).save();
            return newUser;
        },
    }
}