import React, {useState, useEffect, useRef} from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "./_blogPost.scss"
import Quill from 'quill'

const Delta = Quill.import('delta');


export default function BlogPost() {

    const [post, setPost] = useState(new Delta())
    const quillRef = useRef()

    useEffect(() => {
        console.log("useeffect 1 running")
        axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/blog/incoming_webhook/blog_get')

        .then(response => {
            console.log(response.data)

            setPost(new Delta(response.data[38].ops))

        }).catch((e) => {
                console.error("error came while fetching", e)
            })
    }, [])


    console.log("post", post)

    return (

        <div style={{ marginRight: 10, marginLeft: 10, marginTop: 20 }} id={"blog-post-container"}>
            <ReactQuill
                ref={quillRef}
                value={post}
                theme="snow"
                readOnly={true}
                modules={{ toolbar: false }}

                        />
  
          
                
          
            <div dangerouslySetInnerHTML={{ __html: post }} />
        </div>
    )
}