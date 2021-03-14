import { AppWrapper } from '@containers'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@libs/apolloClient'
import { globalStyles } from '@styles/global'
import { CatchPokemonProvider } from '@providers/CatchPokemon/CatchPokemon.provider'

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <CatchPokemonProvider>
        {globalStyles}
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </CatchPokemonProvider>
    </ApolloProvider>
  )
}

export default MyApp
