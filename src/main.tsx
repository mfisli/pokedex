import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HashRouter, Link, Route, Routes } from "react-router";
import SearchPage from "./features/pokemon/SearchPage"
import TrainerListPage from "./features/trainers/TrainerListPage"
import TrainerDetailPage from "./features/trainers/TrainerDetailPage"


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <MantineProvider>
        <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route element={<App />} >
                <Route index element={<><h1>Home</h1> <Link to="/search/bulbasaur">Search</Link> </>} />
                <Route path="search/:name?" element={<SearchPage />} />
                <Route path="trainers" element={<TrainerListPage />} />
                <Route path="trainers/:id" element={<TrainerDetailPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </Provider>
      </MantineProvider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
