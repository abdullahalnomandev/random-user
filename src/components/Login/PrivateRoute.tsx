import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/reducers/mainReducer';
import Login from './Login';
const PrivateRoute = ({children}:any) => {
    const {user:{username}} = useSelector((state:IRootState)=>state.users)
    console.log('user',username);
    
    return (
        <div>
            {
                username ? children : <Login  />
            }
        </div>
    );
};

export default PrivateRoute;