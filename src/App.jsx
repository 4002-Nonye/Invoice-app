import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import InvoiceDetails from './pages/InvoiceDetails/InvoiceDetails';
import { InvoiceProvider } from './contexts/InvoiceContext';
import { FormProvider } from './contexts/FormContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <ThemeProvider>
        <FormProvider>
          {' '}
          <InvoiceProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/invoice/:id" element={<InvoiceDetails />} />
            </Routes>
          </InvoiceProvider>
        </FormProvider>
      </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
