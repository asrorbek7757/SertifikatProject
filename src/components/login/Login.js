import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18next import
import './Login.css';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { t } = useTranslation(); // useTranslation hook

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:5000/user/Login', values);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                console.log("User type:", response.data.userType);
                navigate('/selectSubject');
                message.success(response.data.message);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(t('login.loginError', { error: err.response?.data?.message || err.message }));
        }
    };

    return (
        <div className="rasm">
            <div className="login-container">
                <h2>{t('login.login')}</h2>
                <Form name="login" onFinish={onFinish} className="login-form">
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: t('login.usernameRequired') }]}
                    >
                        <Input placeholder={t('login.usernamePlaceholder')} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: t('login.passwordRequired') }]}
                    >
                        <Input type="password" placeholder={t('login.passwordPlaceholder')} />
                    </Form.Item>
                    {error && <p className="error-message">{error}</p>}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {t('login.login')}
                        </Button>
                    </Form.Item>
                </Form>
                <div className="linklar">
                    <a href="/register">{t('login.register')}</a>
                    <a href="/" style={{ marginLeft: '20px' }}>{t('asosiy sahifaga qaytish')}</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
