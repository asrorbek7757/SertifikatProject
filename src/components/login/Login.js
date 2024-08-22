import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('https://backend-2-tau.vercel.app/login/Login', values);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                console.log("User type:", response.data.userType);
                navigate('/sertifikat');
                message.success(response.data.message);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('Login error: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="rasm">
            <div className="login-container">
                <h2>Login</h2>
                <Form name="login" onFinish={onFinish} className="login-form">
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Foydalanuvchi nomini kiriting!' }]}
                    >
                        <Input placeholder="Foydalanuvchi nomi" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Parolni kiriting!' }]}
                    >
                        <Input type="password" placeholder="Parol" />
                    </Form.Item>
                    {error && <p className="error-message">{error}</p>}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Kirish
                        </Button>
                    </Form.Item>
                </Form>
                <div className="linklar">
                    <a href="/register">Ro'yxatdan o'tish</a>
                    <a href="/" style={{ marginLeft: '20px' }}>Orqaga qaytish</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
