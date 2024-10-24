import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Error from "./pages/error";
import PriceList from "./pages/price-list";
import TermsOfService from "./pages/t-o-s";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="pricelist" element={<PriceList />} />
          <Route path="terms.of.service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
