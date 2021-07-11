import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function BlogEditor(props) {

    const [quillDelta, setQuillDelta] = useState("")

    function handleChange(value) {
        setQuillDelta(value)
    }

    return (
        <div style={{marginRight: 10, marginLeft: 10}}>
            <ReactQuill value={quillDelta}
                        onChange={handleChange}
                        theme="snow"
                        placeholder={"Write Something here..."}
            />
        </div>
    )
}