import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function BlogEditor(props) {

    const [quillDelta, setQuillDelta] = useState("")

        useEffect(() => {
            onVisibilityChange((visible) => {
                console.log(`the page is now${visible ? 'focused' : 'unfocused'}` )
            })
            }, [])


    function onVisibilityChange(callback) {
        var visible = true;

        if (!callback) {
            throw new Error('no callback given');
        }

        function focused() {
            if (!visible) {
                callback(visible = true);
            }
        }

        function unfocused() {
            if (visible) {
                callback(visible = false);
            }
        }

        // Standards:
        if ('hidden' in document) {
            document.addEventListener('visibilitychange',
                function() {(document.hidden ? unfocused : focused)()});
        }
        if ('mozHidden' in document) {
            document.addEventListener('mozvisibilitychange',
                function() {(document.mozHidden ? unfocused : focused)()});
        }
        if ('webkitHidden' in document) {
            document.addEventListener('webkitvisibilitychange',
                function() {(document.webkitHidden ? unfocused : focused)()});
        }
        if ('msHidden' in document) {
            document.addEventListener('msvisibilitychange',
                function() {(document.msHidden ? unfocused : focused)()});
        }
        // IE 9 and lower:
        if ('onfocusin' in document) {
            document.onfocusin = focused;
            document.onfocusout = unfocused;
        }
        // All others:
        window.onpageshow = window.onfocus = focused;
        window.onpagehide = window.onblur = unfocused;
    };

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