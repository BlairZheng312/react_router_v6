import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button} from 'antd';

export default function Message() {
    const navigate = useNavigate()

    const [message] = useState([
        { id: '01', title: 'message01', content: 'hello-world' },
        { id: '02', title: 'message02', content: 'hello-blair' }
    ])

    function replaceDetail(msgObj){
        navigate('detail', {
            replace: true,
            state:{
                id: msgObj.id,
                title:msgObj.title,
                content: msgObj.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    message.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                {/* params */}
                                {/* <Link to={`detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`}>{msgObj.title}</Link> */}

                                {/* search */}
                                {/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}&content=${msgObj.content}`}>{msgObj.title}</Link> */}

                                {/* state */}
                                <Link
                                    to="detail"
                                    state={{
                                        id: msgObj.id,
                                        title: msgObj.title,
                                        content: msgObj.content
                                    }}
                                >{msgObj.title}</Link>
                                &nbsp;<Button onClick={()=>replaceDetail(msgObj)}>Replace</Button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
