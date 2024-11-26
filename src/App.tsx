import { useDisclosure } from "@mantine/hooks";
import "./App.css"
import { AppShell, Burger, Group } from '@mantine/core';
import NavItems from "./shared/components/NavItems";
import { Outlet } from "react-router";

const App = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 100, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          WIP Pokemon App
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavItems />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App
