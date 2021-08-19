import { PostAdd } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "./_blogPost.scss"


export default function BlogPost() {

    const [post, getPost] = useState();
    var pos = 0;

    useEffect(() => {
        axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/blog/incoming_webhook/blog_get')
            .then(response => {
                getPost(response.data);
            })
    }, [getPost])

    console.log(post);

    return (
        <div style={{ marginRight: 10, marginLeft: 10, marginTop: 20 }} id={"blog-post-container"}>
            {/* <ReactQuill Value= {post}
                        theme="snow"
                        readOnly={true}
                        modules={{toolbar: false}}
                        
            /> */}
            <div>
                <div dangerouslySetInnerHTML={{ __html: post }} />
            </div>
        </div>
    )
}