import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import router from './Routes/Routes';
import './index.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div className='max-w-[1280px] w-full mx-auto bg-[url("https://img.freepik.com/premium-photo/soccer-field-football-field-with-soccer-ball-green-grass-background_518421-1096.jpg?w=2000")] bg-contain'>
    <div className='bg-[#ffffff90]'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </div>
  // </React.StrictMode>,
)
