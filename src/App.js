import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Product from "./pages/category/product";
import Category from "./pages/category/index";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
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
  );
}

export default App;
