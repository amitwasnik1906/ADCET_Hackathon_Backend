import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"
import BusDashboardPage from "./pages/BusDashboardPage"
import RouteDashboardPage from "./pages/RouteDashboardPage";
import Header from "./components/Header";
import { getAdminRefreshToken } from "./apiServices";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='app__main'>
        {children}
      </div>
    </>
  )
}

function App() {
  const token = getAdminRefreshToken()

  return (
    <Routes>
      {<Route path="/" element={<Layout><HomePage /></Layout>} />}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/bus/dashboard" element={<BusDashboardPage />} />
      <Route path="/route/dashboard" element={<RouteDashboardPage />} />
      <Route path="/route/new" element={<div></div>} />
    </Routes>
  )
}

export default App
