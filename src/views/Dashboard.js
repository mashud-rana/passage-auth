import {useCurrentUser} from '../hooks/userCurrentUser';
import styles from './Dashboard.module.css';
import {useNavigate} from 'react-router-dom'

function Dashboard() {
    const {isLoading, isAuthorized, username} = useCurrentUser();
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("psg_auth_token");
        navigate('/');
    }

    if (isLoading) {
        return null;
    }
    const authorizedBody = 
    <>
        You successfully signed in with Passage.
        <br/><br/>
        Your email is: <b>{username}</b>
        <button onClick={logout}>Logout</button>
    </>

    const unauthorizedBody = 
    <>
        You have not logged in and cannot view the dashboard.
        <br/><br/>
        <a href="/" className={styles.link}>Login to continue.</a>
    </>

    return (
        <div className={styles.dashboard}>
            <div className={styles.title}>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div className={styles.message}>
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    );

}

export default Dashboard;