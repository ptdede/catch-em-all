import Head from 'next/head'
import { AppWrapper } from '@containers'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@libs/apolloClient'
import { globalStyles } from '@styles/global'
import { CatchPokemonProvider } from '@providers/CatchPokemon/CatchPokemon.provider'
import { MyPokemonDataProvider } from '@providers/MyPokemonData/MyPokemonData.provider'
import { NavigationBarProvider } from '@providers/NavigationBar/NavigationBar.provider'

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <Head>
        <title>Catch `Em All! | Pokemon</title>
        <meta name="description" content="Explore all Pokemon in one page, showcasing Pokemon from all pokemon version and go catch em all!" key="description" />
      </Head>
      <ApolloProvider client={apolloClient}>
        {globalStyles}
        <NavigationBarProvider>
          <MyPokemonDataProvider>
            <CatchPokemonProvider>
              <AppWrapper>
                <Component {...pageProps} />
              </AppWrapper>
            </CatchPokemonProvider>
          </MyPokemonDataProvider>
        </NavigationBarProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
