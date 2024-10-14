export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  contactNumber: string;
}

export interface DopplerReport {
  id: string;
  patientId: string;
  date: string;
  findings: string;
  imageUrls: string[];
}