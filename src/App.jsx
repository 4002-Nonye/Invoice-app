import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import InvoiceDetails from './pages/InvoiceDetails/InvoiceDetails';
import { InvoiceProvider } from './contexts/InvoiceContext';

function App() {
  return (
    <BrowserRouter>
      <InvoiceProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
        </Routes>
      </InvoiceProvider>
    </BrowserRouter>
  );
}

export default App;
