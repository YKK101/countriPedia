import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const ENDPOINT = 'https://restcountries.eu/rest/v2'
const link = new RestLink({ uri: ENDPOINT })

const countryREST = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default countryREST
