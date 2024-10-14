import { openDB } from 'idb';
import { Patient, DopplerReport } from './types';

const dbName = 'MedAppDB';
const dbVersion = 1;

export const initDB = async () => {
  const db = await openDB(dbName, dbVersion, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('patients')) {
        db.createObjectStore('patients', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('reports')) {
        db.createObjectStore('reports', { keyPath: 'id' });
      }
    },
  });
  return db;
};

export const addPatient = async (patient: Patient) => {
  const db = await initDB();
  await db.add('patients', patient);
};

export const updatePatient = async (patient: Patient) => {
  const db = await initDB();
  await db.put('patients', patient);
};

export const deletePatient = async (id: string) => {
  const db = await initDB();
  await db.delete('patients', id);
};

export const getAllPatients = async (): Promise<Patient[]> => {
  const db = await initDB();
  return db.getAll('patients');
};

export const getPatientById = async (id: string): Promise<Patient | undefined> => {
  const db = await initDB();
  return db.get('patients', id);
};

export const addReport = async (report: DopplerReport) => {
  const db = await initDB();
  await db.add('reports', report);
};

export const getAllReports = async (): Promise<DopplerReport[]> => {
  const db = await initDB();
  return db.getAll('reports');
};