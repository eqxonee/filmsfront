import React, {useState} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import { Button, Checkbox, Form, Input } from 'antd';
import AuthApiWorker from "../api/AuthApiWorker";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {

    let localStorageWorker = new LocalStorageWorker();
    let authApiWorker = new AuthApiWorker();
    const navigate = useNavigate();

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")


    /*useEffect(() => {
        localStorageWorker.saveToken("12345");
    },[]);*/

    const auth = (e) => {
        e.preventDefault();

        let userCredentials = {
            "username": username,
            "password": password
        }

        authApiWorker.authenticateUser(userCredentials).then(
            response => {
                localStorageWorker.saveToken(response.data.token);
                navigate("/secure/user");
            })
            .catch(error=>{
                console.log(error);
            });

    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1>Авторизация</h1>
            {/*<form action="">

            </form>*/}
            <Form onSubmit={auth}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item onSubmit={auth}

                    action=""
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >

                    <Input type = "text" value={username}
                    onChange={event => setUsername(event.target.value)}/>

                </Form.Item>

                <Form.Item onSubmit={auth}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password type = "text" value={password}
                                    onChange={event => setPassword(event.target.value)}/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <input type="submit" value="authenticate"/>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AuthPage;