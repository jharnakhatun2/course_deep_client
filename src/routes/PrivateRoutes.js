import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../layer/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div>Loading.....</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{form : location}}replace></Navigate>
};

export default PrivateRoutes;