/** @jsxImportSource theme-ui */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import VBBDepartures from "../pages/VBBDepartures"
const VBBDepartures = lazy(() => import('../../pages/VBBDepartures'));
const VBBArrivals = lazy(() => import('../../pages/VBBArrivals'));

function App() {
  // return (
  //   <div className="App container" sx={{ textAlign: "center", backgroundColor: "whitesmoke", opacity: 0.8, width: "100%", minHeight: "96vh", fontFamily: "body" }}>
  //     <Header />
  //     <VBBDepartures />
  //     <Footer />
  //   </div>
  // )
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div
        className="App container"
        sx={{
          textAlign: 'center',
          backgroundColor: 'whitesmoke',
          opacity: 0.95,
          width: '100%',
          minHeight: '96vh',
          fontFamily: 'body',
        }}
      >
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/arrivals/:id" element={<VBBArrivals />} />
            <Route path="/arrivals" element={<VBBArrivals />} />
            <Route path="/departures/:id" element={<VBBDepartures />} />
            <Route path="/departures" element={<VBBDepartures />} />
            <Route path="" element={<VBBDepartures />} />
            <Route path="*" element={<VBBDepartures />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
