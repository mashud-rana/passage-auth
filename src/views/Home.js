import '@passageidentity/passage-auth'
import { useEffect } from 'react';
import {useCurrentUser} from '../hooks/userCurrentUser';
import {useNavigate} from 'react-router-dom'
 
const Home = () => {
    const {isLoading, isAuthorized, username} = useCurrentUser();
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(isAuthorized)
        {
            navigate('/dashboard');
        }
    },[isLoading, isAuthorized, username])
    return ( 
        <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
     );
}
 
export default Home;
