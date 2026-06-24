import './index.css';
import AppRoutes from './routes/AppRoutes.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const keepAwake = () => {
      fetch("https://zivora-262a.onrender.com/api/orders/admin").catch(() => {});
    };

    keepAwake(); // ping immediately on load
    const interval = setInterval(keepAwake, 5 * 60 * 1000); // then every 5 mins

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <AppRoutes />;
}

export default App;