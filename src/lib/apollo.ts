import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:"https://api-us-west-2.graphcms.com/v2/cl4qavp4m3ht701xx4qqb1ih6/master",
    cache:new InMemoryCache()
})

export {client}