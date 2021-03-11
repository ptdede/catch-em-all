import { ApolloProvider } from '@apollo/client'
import { AppWrapper } from '../containers/AppWrapper/AppWrapper'
import { useApollo } from '../libs/apolloClient'
import { globalStyles } from '../styles/global'

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      {globalStyles}
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ApolloProvider>
  )
}

export default MyApp
