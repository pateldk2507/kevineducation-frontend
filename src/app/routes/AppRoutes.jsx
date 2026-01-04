import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleSelect from '../pages/register/Roleselect.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import DashboardHome from '../pages/dashboard/DashboardHome.jsx';
import StudentList from '../pages/student/StudentList.jsx';
import StudentAdd from '../pages/student/StudentAdd.jsx';
import ParentList from '../pages/parent/ParentList.jsx';
import ParentAdd from '../pages/parent/ParentAdd.jsx';
import FacultyList from '../pages/faculty/FacultyList.jsx';
import FacultyAdd from '../pages/faculty/FacultyAdd.jsx';
import FeesAdd from '../pages/fees/FeesAdd.jsx';
import FeesList from '../pages/fees/FeesList.jsx';
import ClassList from '../pages/classes/ClassList.jsx';
import ClassAdd from '../pages/classes/ClassAdd.jsx';
import SubjectList from '../pages/subjects/SubjectList.jsx';
import SubjectAdd from '../pages/subjects/SubjectAdd.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RoleSelect />} />

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/students/list" element={<StudentList />} />
            <Route path="/students/add" element={<StudentAdd />} />
            <Route path="/parents/list" element={<ParentList />} />
            <Route path="/parents/add" element={<ParentAdd />} />
            <Route path="/faculty/list" element={<FacultyList />} />
            <Route path="/faculty/add" element={<FacultyAdd />} />
            <Route path="/fees/list" element={<FeesList />} />
            <Route path="/fees/add" element={<FeesAdd />} />
            <Route path="/class/list" element={<ClassList />} />  
            <Route path="/class/add" element={<ClassAdd />} />
            <Route path="/subject/list" element={<SubjectList />} />
            <Route path="/subject/add" element={<SubjectAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
