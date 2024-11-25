import { useDisclosure } from "@mantine/hooks";
import "./App.css"
import { AppShell, Burger, Group, Pill, Skeleton } from '@mantine/core';
import Nav from "./shared/components/Nav";
import Image from "./features/pokemon/Image";
import { Outlet, Route, Routes } from "react-router";

const App = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 60, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Nav />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App
