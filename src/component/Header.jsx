import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button} from 'antd';

export default function Header() {
    const navigate = useNavigate()
    function back(){
        navigate(-1)
    }
    function forward(){
        navigate(1)
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router V6 Demo</h2>
                <Button onClick={back} icon={<LeftCircleOutlined />}></Button>
                <Button onClick={forward} icon={<RightCircleOutlined />}></Button>
            </div>
        </div>
    )
}
