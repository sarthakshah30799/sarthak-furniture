import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './pages/category'
import Index from './pages'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={`/:category`}>
              <Category />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
