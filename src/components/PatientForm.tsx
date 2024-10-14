import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Patient } from '../types';
import { addPatient, updatePatient, getPatientById } from '../db';

const PatientForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Patient>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        const fetchedPatient = await getPatientById(id);
        if (fetchedPatient) {
          setPatient(fetchedPatient);
          Object.keys(fetchedPatient).forEach(key => {
            setValue(key as keyof Patient, fetchedPatient[key as keyof Patient]);
          });
        }
      }
    };
    fetchPatient();
  }, [id, setValue]);

  const onSubmit = async (data: Patient) => {
    if (id) {
      await updatePatient({ ...data, id });
    } else {
      await addPatient({ ...data, id: uuidv4() });
    }
    navigate('/patients');
  };

  // ... (rest of the component remains the same) ...
};

export default PatientForm;