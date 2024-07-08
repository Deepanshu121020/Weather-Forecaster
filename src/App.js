import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import AppContent from "./AppContent";
import Login from './components/login'
import Register from './components/register'
import AppContent from "./AppContent";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/application" element={<AppContent/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )

}export default App;