import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    const navItemStyle = {color:'grey'};
    return (
        <div className="container-fluid" style={{backgroundColor: '#141822'}}>
            <div className="row" style={{backgroundColor: '#141822'}}>
                <div className="col" style={{backgroundColor: '#141822'}}>
                    <nav className="navbar navbar-expand-lg">
                        <h4 className="navbar-brand mt-1" href="">PCCE</h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: 'white', color: 'black'}}>
                            <span className="navbar-toggler-icon" style={{color: 'black'}}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="btn"><Link to="/home" style={navItemStyle}><li>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn" ><Link to="/student/updateProfile" style={navItemStyle}><li>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={navItemStyle}>
                                        ACADEMIC </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/student/testPerformance" style={navItemStyle}>Test Performance</Link>
                                        <Link className="dropdown-item" to="/student/attendence" style={navItemStyle}>Attendance</Link>
                                        <Link className="dropdown-item" to="/student/getAllSubjects" style={navItemStyle}>Student Subject List</Link>
                                    </div>
                                </li>
                                {/* <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/studentDetails"><li>STUDENTS</li></Link></button>
                                </li> */}
                                {/* <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/studentDetails"><li>NEW CONVERSATION ({store.student.newerChats.length})</li></Link></button>
                                </li> */}
                                <li className="nav-item" >
                                    <button type="button" className="btn"><Link to="/student/updatePassword" style={navItemStyle}><li>UPDATE PASSWORD</li></Link></button>
                                </li>
                               
                            </ul>
                           
                        </div>
                        <div>
                            <button style={{listStyle:"None", color: 'white', backgroundColor:'#5596e6', borderRadius:'0.25rem'}} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
