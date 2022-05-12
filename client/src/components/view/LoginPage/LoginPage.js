import React, { useState } from 'react'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logIn } from '../../../_actions/actions'
import { Cookies } from 'react-cookie'


function LoginPage() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cookies = new Cookies()

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        }
        dispatch(logIn(body))
            .then(response => {
                if(response.payload.Success){
                    cookies.set("token", response.payload.user.token)
                    navigate('/');
                } else {
                    //로그인 실패 시
                    alert("이메일과 비밀번호를 확인해 주세요.")
                }
            })
    }


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
                        onChange={onPasswordHandler} />
                </FormGroup>
                <Button onClick={onSubmit}>Sign In</Button>
            </Form>
        </div>
    )
}

export default LoginPage

// style에서 aligenItems는 세로축이동
// style에서 justfyContent는 가로축이동