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
        <link rel="apple-touch-icon" sizes="57x57" href="static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#003a70" />
        <meta name="msapplication-TileImage" content="static/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffcb05"></meta>
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
