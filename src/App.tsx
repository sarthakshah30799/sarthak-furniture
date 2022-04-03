import * as React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Product from "./pages/category/product";
import Category from "./pages/category/index";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "./API_CALL/API_URL";
import Chair from "./pages/admin/chair";

function App() {
  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Route path="/admin/chair">
                <Chair />
              </Route>
              <Switch>
                <Route path={`/:category/:id`}>
                  <Product />
                </Route>
                <Route path={`/:category`}>
                  <Category />
                </Route>
                <Route path="/">
                  <Index />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
