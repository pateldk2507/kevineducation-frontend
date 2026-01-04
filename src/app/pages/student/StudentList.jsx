import StudentTable from '../../components/StudentTable';

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', dateOfBirth: '2005-01-01', gender: 'Male' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543210', dateOfBirth: '2006-03-05', gender: 'Female' },
  // Add more rows
];

export default function StudentsList() {
  return <StudentTable data={sampleData} />;
}
