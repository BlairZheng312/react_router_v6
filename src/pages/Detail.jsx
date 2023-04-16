import React from 'react'
// import { useParams} from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // // use params
    // const { id, title, content } = useParams()

    // // use search 
    // const [search, setSearch] = useSearchParams()
    // const id = search.get('id')
    // const title = search.get('title')
    // const content = search.get('content')

    // use state
    const {state:{id, title, content}} = useLocation()
    return (
        <div>
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {content}</li>
                {/* <hr />
                <button onClick={() => { setSearch('id=08&title=message08&content=hello-react') }}>To change the params</button> */}
            </ul>
        </div>
    )
}
