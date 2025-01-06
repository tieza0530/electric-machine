import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';


function App() {
  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
      refetchOnWindowFocus: false,
    },
  },
});

  return (
   <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
   </QueryClientProvider>
  )
}

export default App
