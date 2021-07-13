import React, {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function BlogEditor(props) {

    const [quillDelta, setQuillDelta] = useState("")

    function handleChange(content, delta, source, editor) {
        setQuillDelta(editor.getContents())
    }

    return (
        <div style={{marginRight: 10, marginLeft: 10, marginTop: 20}}>
            <ReactQuill
                defaultValue={quillDelta}
                onChange={handleChange}
                theme="snow"
                placeholder={"Write Something here..."}
            />
        </div>
    )
}