import React, { useState } from 'react'
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}
const Register = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDeffault()
        console.log(e.target)
    }
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3 style={{ fontWeight: 600 }}>Login</h3>
                {values.showAlert && <Alert />}
                {/* Name Input */}
                <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
                {/* Email Input */}
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
                {/* Password Input */}
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
                <button type='submit' className='btn btn-block'>Submit </button>
            </form>
        </Wrapper>
    )
}

export default Register