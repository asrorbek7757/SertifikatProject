import React from 'react';
import './Registration.css';
import { FaUser } from 'react-icons/fa';
import { RiLockFill } from 'react-icons/ri';
import { Button, Form, Input, message, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/index';

const SignUp = () => {
    const navigate = useNavigate();

    // Formani yuborish funksiyasi
    const onFinish = async (values) => {
        try {
            const form = {
                fname: values.fname,
                lname: values.lname,
                username: values.username,
                password: values.password,
                birthday: values.birthday.format('YYYY-MM-DD'), // Tug'ilgan sanani formatlash
            };
            console.log(form);
    
            // API so'rovini yuborish
            const response = await axios.post('https://certificate1-397i.vercel.app/user/createUser', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            message.success("Ro'yxatdan o'tish muvaffaqiyatli!");
            navigate('/selectSubject'); // Foydalanuvchini boshqa sahifaga yo'naltirish
        } catch (error) {
            if (error.response && error.response.data) {
                message.error(error.response.data.message || "Ro'yxatdan o'tish muvaffaqiyatsiz!");
            } else {
                message.error(error.message);
            }
        }
    };
    
    return (
        <div className="backdrop-ucun">

                <Form
                    className="basic"
                    onFinish={onFinish}
                    onFinishFailed={(errorInfo) => console.log('Xato:', errorInfo)}
                    >
                    <div className="inp2">
                    <h1>Ro'yxatdan o'tish</h1>
                        <Form.Item
                            name="fname"
                            rules={[{ required: true, message: "Ismni kiriting!" }]}
                        >
                            <Input className='inp' prefix={<FaUser />} placeholder="Ism" />
                        </Form.Item>

                        <Form.Item
                            name="lname"
                            rules={[{ required: true, message: "Familiya kiriting!" }]}
                        >
                            <Input className='inp' prefix={<FaUser />} placeholder="Familiya" />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: "Foydalanuvchi nomini kiriting!" }]}
                        >
                            <Input className='inp' prefix={<FaUser />} placeholder="Foydalanuvchi nomi" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Parolni kiriting!" }]}
                        >
                            <Input.Password className='inp' prefix={<RiLockFill />} placeholder="Parol" />
                        </Form.Item>

                        <Form.Item
                            name="birthday"
                            rules={[{ required: true, message: "Tug'ilgan kunni kiriting!" }]}
                        >
                            <DatePicker placeholder="Tug'ilgan kun" style={{ width: '100%' }} format="YYYY-MM-DD" />
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Yuborish
                        </Button>
                    </Form.Item>
                <div className="linklar">
                    <a href="/login">Loginga o'tish</a>
                    <a href="/" style={{ marginLeft: '20px' }}>Orqaga qaytish</a>
                </div>
                </Form>
            </div>

    );
};

export default SignUp;
