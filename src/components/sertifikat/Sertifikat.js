import React from 'react';
import './Sertifikat.css';
import { FaUser, FaSchool, FaBookReader} from 'react-icons/fa';
import { Button, Form, Input, message, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
const SignUp = () => {
    const navigate = useNavigate();

    // Formani yuborish funksiyasi
    const onFinish = async (values) => {
        try {
            const form = {
                fname: values.fname,
                lname: values.lname,
                date: values.date,
                markazNomi: values.markazNomi,
                fanNomi: values.fanNomi,
                userId: values.userId,
            };
            console.log(form);
    
            // API so'rovini yuborish
            const response = await fetch(' https://certificate1-397i.vercel.app/sertifikat/createSertificat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Sertifikat yaratishda o'tish muvaffaqiyatsiz!");
            }
    
            const responseData = await response.json();
            console.log(responseData);
            message.success("Sertifikat yaratish muvaffaqiyatli!");
   navigate('/allSertifikat')// Foydalanuvchini boshqa sahifaga yo'naltirish
        } catch (error) {
            message.error(error.message);
        }
    };
    
    
    return (
        <div className="padding">

  
            <Form
                className="basic"
                onFinish={onFinish}
                onFinishFailed={(errorInfo) => console.log('Xato:', errorInfo)}
                >
                <div className="inp2">
                <h1>Certificate yaratish</h1>   
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
                        name="markazNomi"
                        rules={[{ required: true, message: "Markaz nomini  kiriting!" }]}
                    >
                        <Input className='inp' prefix={<FaSchool />} placeholder="Markaz nomi" />
                    </Form.Item>
                    <Form.Item
                        name="fanNomi"
                        rules={[{ required: true, message: "Fan nomini  kiriting!" }]}
                    >
                        <Input className='inp' prefix={<FaBookReader />} placeholder="Fan nomi" />
                    </Form.Item>
                    <Form.Item
                        name="userId"
                        rules={[{ required: true, message: "UserIdni kiriting!" }]}
                    >
                        <Input className='inp' prefix={'ID'} placeholder="userIdni kiriting" />
                    </Form.Item>

                    <Form.Item
                        name="date"
                        rules={[{ required: true, message: "sanani kiriting!" }]}
                    >
                        <DatePicker placeholder="sana" prefix={<CiCalendarDate/>    } style={{ width: '100%' }} format="YYYY-MM-DD" />
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Yuborish
                    </Button>
                </Form.Item>
                <a href="/" className="linklar">Orqaga qaytish</a>
            </Form>
        </div>
    );
};

export default SignUp;
