import React, { useState } from 'react'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import { SignUp } from '../../../_actions/actions'
import { Formik } from 'formik'


function RegisterPage() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const onNameHandler = (e) => {
        setName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(SignUp(body))
        .then(response => {
            if(response.payload.Success){
                navigate('/login');
            } else {
                //회원가입 실패
                alert("회원 가입 실패")
            }
        })

    }
    // 좀 더 필요함 => 1. 필수 입력사항 입력 꼭 하게 해야함
    //                2. 최소길이 조건 넣어야함.   => 전부 다 API 찾아보면 있을꺼야 reactstrap 함수 찾으면
    //                3. 음 invalid 속성이랑 valid속성을 왔다갔다 해야겠는데? => 깃허브 들어가서 해놨던거좀 봐야겠음.
    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh ' }}>
            <Form style={{ display:'flex', flexDirection:'column' }}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input 
                        name="email" 
                        placeholder="Please enter the your Email" 
                        type="email" style={{ width:'400px'}} 
                        onChange={onEmailHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input 
                        name="passowrd" 
                        placeholder="Please enter the your Password" 
                        type='password' 
                        style={{ width:'400px'}}
                        onChange={onPasswordHandler} 
                        
                        min={5}
                        />
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label>
                    <Input 
                        name="passowrd" 
                        placeholder="Please enter the your Name" 
                        type='text' 
                        style={{ width:'400px'}}
                        onChange={onNameHandler} />
                </FormGroup>
                <Button onClick={onSubmit}>Sign Up</Button>
            </Form>
        </div>
    )
}

export default RegisterPage