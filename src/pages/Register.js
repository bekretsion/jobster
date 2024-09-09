import { useState, useEffect } from "react"
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from "../features/user/userSlice"

const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:false,
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const {user, isLoading} = useSelector(store => store.user)
    const dispatch = useDispatch()

    const handleChange = (e) => {
      setValues({...values, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
          toast.error('Please Fill Out All Fields');
          return;
        }
        if(isMember) {
          dispatch(loginUser({email: email, password: password}))
          return;
        }
        dispatch(registerUser({name, email, password}))
      };

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <Logo />

            <h3>{values.isMember? 'login' : 'register'}</h3>

            {!values.isMember && (<FormRow 
                type="text" 
                name="name" 
                value={values.name} 
                handleChange={handleChange}
            />)}
            
            <FormRow 
                type="email" 
                name="email" 
                value={values.email} 
                handleChange={handleChange}
            />

            <FormRow 
                type="password" 
                name="password" 
                value={values.password} 
                handleChange={handleChange}
            />
            <button type='submit' className="btn btn-block" disabled={isLoading}> submit </button>
            <p> 
              {values.isMember? 'Not a member yet?' : 'already a member?' }
                <button type='button' onClick={toggleMember} className="member-btn"> {values.isMember ? 'Register ' : 'login'} </button>
            </p>
        </form>
   
    </Wrapper>
  )
}

export default Register
