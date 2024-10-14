import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Patient } from '../types';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { getAllPatients, deletePatient } from '../db';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const fetchedPatients = await getAllPatients();
      setPatients(fetchedPatients);
    };
    fetchPatients();
  }, []);

  const handleDeletePatient = async (id: string) => {
    await deletePatient(id);
    setPatients(patients.filter(patient => patient.id !== id));
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      {/* ... (rest of the component remains the same) ... */}
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => (
          <li key={patient.id} className="px-4 py-4 sm:px-6">
            {/* ... (patient details remain the same) ... */}
            <div className="flex space-x-2">
              <Link to={`/patients/${patient.id}`} className="text-indigo-600 hover:text-indigo-900">
                <Edit className="h-5 w-5" />
              </Link>
              <button onClick={() => handleDeletePatient(patient.id)} className="text-red-600 hover:text-red-900">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* ... */}
    </div>
  );
};

export default PatientList;