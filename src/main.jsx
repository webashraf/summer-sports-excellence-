import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import router from './Routes/Routes';
import './index.css';
import 'aos/dist/aos.css'; // Import the AOS CSS



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div style={{maxWidth: "1280px"}} className='mx-auto w-full overflow-x-hidden'>
    <div className=''>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </div>
  // </React.StrictMode>,
)
