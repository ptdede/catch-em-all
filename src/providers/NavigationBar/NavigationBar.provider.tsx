/* eslint-disable @typescript-eslint/no-empty-function */
import Link from "next/link";
import { useRouter } from "next/router";
import { TNavigationBar } from "./NavigationBar.styled";
import { useNavigationBarProvider } from "./NavigationBar.state";
import React, { createContext, ReactNode, useContext } from "react";

type INavigationBarProviderProps = {
  children: ReactNode;
};

const defaultContext = {
  hideNavigation: (_isHide: boolean) => {},
};

export const NavigationBarContext = createContext<typeof defaultContext>(
  defaultContext
);

export const useNavigationBar = () => useContext(NavigationBarContext);

export const NavigationBarProvider = ({
  children,
}: INavigationBarProviderProps) => {
  const { pathname } = useRouter();
  const { hidden, hideNavigation } = useNavigationBarProvider();

  return (
    <NavigationBarContext.Provider value={{ hideNavigation }}>
      {children}
      <TNavigationBar.Wrapper hidden={hidden}>
        <Link href="/">
          <TNavigationBar.Item active={pathname === "/"}>
            <TNavigationBar.Image
              src={require("public/nav-discover.png")}
              alt="Discover Pokemons"
            />
            <p>Discover</p>
          </TNavigationBar.Item>
        </Link>

        <Link href="/my-pokemon">
          <TNavigationBar.Item active={pathname === "/my-pokemon"}>
            <TNavigationBar.Image
              src={require("public/nav-mypokemon.png")}
              alt="Discover Pokemons"
            />
            <p>My Pokemon</p>
          </TNavigationBar.Item>
        </Link>
      </TNavigationBar.Wrapper>
    </NavigationBarContext.Provider>
  );
};
