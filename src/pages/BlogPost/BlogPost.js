import React from "react";
import ReactQuill from "react-quill";
import "./_blogPost.scss"


export default function BlogPost(props) {



    return (
        <div style={{ marginRight: 10, marginLeft: 10, marginTop: 20 }} id={"blog-post-container"}>
            <ReactQuill 
                defaultValue={"This is test Blog Post"}
                theme="snow"
                readOnly={true}
                modules={{ toolbar: false }}
            />
            
             
        </div>
    )
}