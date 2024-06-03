import { Container, Grid, Paper } from '@mui/material'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import coursesimg from '../../../assets/book1.svg'
import teacherimg from '../../../assets/teacher.svg'
import feeimg from '../../../assets/fee.svg'
import studentimg from '../../../assets/cap.svg'
import * as course from '../../../service/courses'
import * as admin from '../../../service/admin'

const AdminHomePage = () => {

    const [listCourse, setListCourse] = useState([])
    const [listStudent, setListStudent] = useState([])
    const [listTeacher, setListTeacher] = useState([])
    useEffect(() => {
        course.GetCourseAll()
            .then(res => {
                setListCourse(res[0])
            })
            .catch(err => {
                console.log(err)
            })
        admin.getAllStudents()
            .then(res => {
                setListStudent(res)
            })
            .catch(err => {
                console.log(err)
            })
        admin.getTeacherAll()
            .then(res => {
                setListTeacher(res[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Container maxWidth="full" maxHeight="full" sx={{ mt: 4, mb: 4 }}>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3} >
                        <StyledPaper sx={{ border: '1px solid black', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                            <img src={studentimg} alt="Students" className='h-28 w-28' />
                            <Title>
                                Tổng số sinh viên
                            </Title>
                            <Data start={0} end={listStudent?.length} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ border: '1px solid black', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                            <img src={coursesimg} alt="Classes" className='h-28 w-28' />
                            <Title>
                                Tổng số khóa học
                            </Title>
                            <Data start={0} end={listCourse?.length} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ border: '1px solid black', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                            <img src={teacherimg} alt="Teachers" className='h-28 w-28' />
                            <Title>
                                Tống số giáo viên
                            </Title>
                            <Data start={0} end={listTeacher?.length} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ border: '1px solid black', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                            <img src={feeimg} alt="Fees" className='h-28 w-28' />
                            <Title>
                                Học phí:
                            </Title>
                            <Data start={0} end={listStudent.length * 500} duration={2.5} prefix="$" />                        </StyledPaper>
                    </Grid>

                </Grid>

            </Container >
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const Title = styled.p`
  font-size: 1.25rem;
`

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`
export default AdminHomePage