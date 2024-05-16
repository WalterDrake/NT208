import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';


import { AppBar, Drawer } from '../../../components/Schoolweb/styles';
import AccountMenu from '../../../components/Schoolweb/AccountMenu';
import SeeComplains from './studentRelated/SeeComplains';
import AddNotice from './noticeRelated/AddNotice';
import ShowNotices from './noticeRelated/ShowNotices';
import ShowSubjects from './subjectRelated/ShowSubjects';
import ViewSubject from './subjectRelated/ViewSubject';
import ChooseClass from './teacherRelated/ChooseClass';
import SubjectForm from './subjectRelated/SubjectForm';
import StudentAttendance from './studentRelated/StudentAttendance';
import StudentExamMarks from './studentRelated/StudentExamMarks';
import ShowClasses from './classRelated/ShowClasses';
import ClassDetails from './classRelated/ClassDetails';
import AddStudent from './studentRelated/AddStudent';
import ShowStudents from './studentRelated/ShowStudents';
import AddClass from './classRelated/AddClass';
import ViewStudent from './studentRelated/ViewStudent';
import ShowTeachers from './teacherRelated/ShowTeachers';
import TeacherDetails from './teacherRelated/TeacherDetails';
import ChooseSubject from './teacherRelated/ChooseSubject';
import AddTeacher from './teacherRelated/AddTeacher';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <SideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/Admin/Setting/" element={<AdminHomePage />} />
                        <Route path="/Admin/Setting/dashboard" element={<AdminHomePage />} />
                        <Route path="/Admin/Setting/profile" element={<AdminProfile />} />
                        <Route path="/Admin/Setting/complains" element={<SeeComplains />} />

                        {/* Notice */}
                        <Route path="/Admin/Setting/addnotice" element={<AddNotice />} />
                        <Route path="/Admin/Setting/notices" element={<ShowNotices />} />

                        {/* Subject */}
                        <Route path="/Admin/Setting/subjects" element={<ShowSubjects />} />
                        <Route path="/Admin/Setting/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
                        <Route path="/Admin/Setting/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

                        <Route path="/Admin/Setting/addsubject/:id" element={<SubjectForm />} />
                        <Route path="/Admin/Setting/class/subject/:classID/:subjectID" element={<ViewSubject />} />

                        <Route path="/Admin/Setting/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
                        <Route path="/Admin/Setting/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

                        {/* Class */}
                        <Route path="/Admin/Setting/addclass" element={<AddClass />} />
                        <Route path="/Admin/Setting/classes" element={<ShowClasses />} />
                        <Route path="/Admin/Setting/classes/class/:id" element={<ClassDetails />} />
                        <Route path="/Admin/Setting/class/addstudents/:id" element={<AddStudent situation="Class" />} />

                        {/* Student */}
                        <Route path="/Admin/Setting/addstudents" element={<AddStudent situation="Student" />} />
                        <Route path="/Admin/Setting/students" element={<ShowStudents />} />
                        <Route path="/Admin/Setting/students/student/:id" element={<ViewStudent />} />
                        <Route path="/Admin/Setting/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
                        <Route path="/Admin/Setting/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

                        {/* Teacher */}
                        <Route path="/Admin/Setting/teachers" element={<ShowTeachers />} />
                        <Route path="/Admin/Setting/teachers/teacher/:id" element={<TeacherDetails />} />
                        <Route path="/Admin/Setting/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} />
                        <Route path="/Admin/Setting/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} />
                        <Route path="/Admin/Setting/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
                        <Route path="/Admin/Setting/teachers/addteacher/:id" element={<AddTeacher />} />

                        {/* <Route path="/logout" element={<Logout />} /> */}
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AdminDashboard

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}