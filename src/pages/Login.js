import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
function Login(props) {
    console.log(props);
    const navigate = useNavigate();

    const [user,setUser] = useState({
        userName : '',
        passWord : '',
    })
    const handleChange = (e) =>{
        let {name,value} = e.target;
        setUser({
            ...user,
            [name] : value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user.userName === "datub2002" && user.passWord === '11042002')
        {
            // Thành công thì chuyển đến 1 trang chỉ định
            // navigate('/contact');

            // Thành công thì chuyển đến trang trước đó
            navigate(-1);
            localStorage.setItem('userLogin',JSON.stringify(user))

        }else {
            alert('Login failed !!')
            return ;
        }
    }

    return (
       <form className='container' onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <div className='form-group'>
                <label htmlFor="userName">User Name</label>

                <input name='userName' id='userName' type='text' className='form-control' onInput={handleChange} />
            </div>
            <div className='form-group'>
               <label htmlFor="passWord">password</label>

                <input name='passWord' id='passWord' type='text' className='form-control'  onInput={handleChange} />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
       </form>
    );
}

export default Login;