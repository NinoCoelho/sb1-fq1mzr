import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Users, FileText, Home as HomeIcon, LogOut } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import PatientList from './components/PatientList';
import PatientForm from './components/PatientForm';
import ReportGenerator from './components/ReportGenerator';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PricingPlans from './components/Subscription/PricingPlans';

function App() {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <HomeIcon className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">MedApp</span>
                </Link>
                {user && (
                  <div className="ml-10 flex items-center space-x-4">
                    <Link to="/patients" className="text-gray-600 hover:text-gray-900 flex items-center">
                      <Users className="h-5 w-5 mr-1" />
                      Patients
                    </Link>
                    <Link to="/report" className="text-gray-600 hover:text-gray-900 flex items-center">
                      <FileText className="h-5 w-5 mr-1" />
                      Report
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                {user ? (
                  <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 flex items-center">
                    <LogOut className="h-5 w-5 mr-1" />
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-600 hover:text-gray-900 mr-4">Login</Link>
                    <Link to="/register" className="text-gray-600 hover:text-gray-900">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<PricingPlans />} />
            {user && (
              <>
                <Route path="/patients" element={<PatientList />} />
                <Route path="/patients/new" element={<PatientForm />} />
                <Route path="/patients/:id" element={<PatientForm />} />
                <Route path="/report" element={<ReportGenerator />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;