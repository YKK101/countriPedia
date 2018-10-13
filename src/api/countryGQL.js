import ApolloClient from 'apollo-boost'

const ENDPOINT = 'https://countries.trevorblades.com/'

const countryGQL = new ApolloClient({
  uri: ENDPOINT,
})

export default countryGQL
