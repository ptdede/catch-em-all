import { ApolloProvider } from '@apollo/client'
import { AppWrapper } from '../containers/AppWrapper/AppWrapper'
import { useApollo } from '../libs/apolloClient'

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ApolloProvider>
  )
}

export default MyApp
