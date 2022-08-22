import React from 'react';
import { Navigate } from 'react-router-dom';

function Profile(props) {
    if(localStorage.getItem('userLogin'))
    {
        return (
            <div>
                this is profile
            </div>
        );

    }else {
        alert('ban can phai dang nhap !!');
        return <Navigate to='/login' replace />
    }
}

export default Profile;