import React, { Component, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import axios from "axios";




function BlogEditor() {
    const [quillDelta, setQuillDelta] = useState("")


    function handleChange(content, delta, source, editor) {
        setQuillDelta(editor.getContents());

    }

    const variable = () => {
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/blog/incoming_webhook/blog_post', quillDelta)
            .then(res => console.log(res.data));
    }


    return (

        <div id="container">

            <ReactQuill

                onChange={handleChange}
                modules={BlogEditor.modules}
                formats={BlogEditor.formats}
            />

            <div className="themeSwitcher">
                <Button onClick={variable} style={{ float: "right", top: "2rem", right: "2rem" }} variant="contained" color="secondary">
                    Post
                </Button>
            </div>
        </div>
    )
}

BlogEditor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {

        matchVisual: false,
    }
}

BlogEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]
BlogEditor.propTypes = {
    placeholder: PropTypes.string,
}

export default BlogEditor






























// import React, {Component, useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom'
// import Button from '@material-ui/core/Button';







// export default class Editor extends React.Component {
//     constructor (props) {
//       super(props)
//       this.state = { editorHtml: '', theme: 'snow' }
//       this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange (html) {
//         this.setState({ editorHtml: html });
//     }

//     handleThemeChange (newTheme) {
//       if (newTheme === "core") newTheme = null;
//       this.setState({ theme: newTheme })
//     }

//     render () {
//       return (
//         <div>
//           <ReactQuill 
//             theme={this.state.theme}
//             onChange={this.handleChange}
//             value={this.state.editorHtml}
//             modules={Editor.modules}
//             formats={Editor.formats}
//             bounds={'.app'}
//             placeholder={this.props.placeholder}
//            />
//           <div className="themeSwitcher">
//             <label>Theme </label>
//             <select onChange={(e) => 
//                 this.handleThemeChange(e.target.value)}>
//               <option value="snow">Snow</option>

//               <option value="core">Core</option>
//             </select>
//           </div>
//          </div>
//        )
//     }
//   }

//   /* 
//    * Quill modules to attach to editor
//    * See https://quilljs.com/docs/modules/ for complete options
//    */
//   Editor.modules = {
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//       [{size: []}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, 
//        {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image', 'video'],
//       ['clean']
//     ],
//     clipboard: {
//       // toggle to add extra line breaks when pasting HTML:
//       matchVisual: false,
//     }
//   }
//   /* 
//    * Quill editor formats
//    * See https://quilljs.com/docs/formats/
//    */
//   Editor.formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
//   ]

//   /* 
//    * PropType validation
//    */
//   Editor.propTypes = {
//     placeholder: PropTypes.string,
//   }

/*
 * Render component on page
 */




// import React, { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import Button from '@material-ui/core/Button';



// export default function BlogEditor(props) {


//     // class Editor extends React.Component {
//     //     constructor (props) {
//     //       super(props)
//     //       this.state = { editorHtml: '', theme: 'snow' }
//     //       this.handleChange = this.handleChange.bind(this)
//     //     }

//         handleChange (html) {
//             this.setState({ editorHtml: html });
//         }

//         handleThemeChange (newTheme) {
//           if (newTheme === "core") newTheme = null;
//           this.setState({ theme: newTheme })
//         }

//         render () {
//           return (
//             <div>
//               <ReactQuill 
//                 theme={this.state.theme}
//                 onChange={this.handleChange}
//                 value={this.state.editorHtml}
//                 modules={Editor.modules}
//                 formats={Editor.formats}
//                 bounds={'.app'}
//                 placeholder={this.props.placeholder}
//                />
//               <div className="themeSwitcher">
//                 <label>Theme </label>
//                 <select onChange={(e) => 
//                     this.handleThemeChange(e.target.value)}>
//                   <option value="snow">Snow</option>
//                   <option value="bubble">Bubble</option>
//                   <option value="core">Core</option>
//                 </select>
//               </div>
//              </div>
//            )
//         }
//       }

//       /* 
//        * Quill modules to attach to editor
//        * See https://quilljs.com/docs/modules/ for complete options
//        */
//       Editor.modules = {
//         toolbar: [
//           [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//           [{size: []}],
//           ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//           [{'list': 'ordered'}, {'list': 'bullet'}, 
//            {'indent': '-1'}, {'indent': '+1'}],
//           ['link', 'image', 'video'],
//           ['clean']
//         ],
//         clipboard: {
//           // toggle to add extra line breaks when pasting HTML:
//           matchVisual: false,
//         }
//       }
//       /* 
//        * Quill editor formats
//        * See https://quilljs.com/docs/formats/
//        */
//       Editor.formats = [
//         'header', 'font', 'size',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image', 'video'
//       ]

//       /* 
//        * PropType validation
//        */
//       Editor.propTypes = {
//         placeholder: PropTypes.string,
//       }

//       /* 
//        * Render component on page
//        */
//       ReactDOM.render(
//         <Editor placeholder={'Write something...'}/>, 
//         document.querySelector('.app')
//       )

//     // const [quillDelta, setQuillDelta] = useState("")

//     // function handleChange(content, delta, source, editor) {
//     //     setQuillDelta(editor.getContents())
//     // }



//     // var editor_content = quill.container.innerHTML;

//     // console.log(editor_content);

//     // return (
//     //     <div style={{ marginRight: 10, marginLeft: 10, marginTop: 20 }}>
//     //         <ReactQuill
//     //             defaultValue={quillDelta}
//     //             onChange={handleChange}
//     //             theme="snow"
//     //             placeholder={"Write Something here..."}
//     //         />


//     //         {/* {
//     //             $('#saveDelta').click(function () {
//     //                 var delta = ReactQuill.getcontents()
//     //                 console.log(delta);
//     //             })

//     //         } */}
//     //         <Button style={{float:"right",top:"0.2rem"}} variant="contained" color="primary">
//     //             POST
//     //         </Button>
//     //     </div>
//     // )
// }



// // class Editor extends React.Component {
// //   constructor (props) {
// //     super(props)
// //     this.state = { editorHtml: '', theme: 'snow' }
// //     this.handleChange = this.handleChange.bind(this)
// //   }

// //   handleChange (html) {
// //   	this.setState({ editorHtml: html });
// //   }

// //   handleThemeChange (newTheme) {
// //     if (newTheme === "core") newTheme = null;
// //     this.setState({ theme: newTheme })
// //   }

// //   render () {
// //     return (
// //       <div>
// //         <ReactQuill 
// //           theme={this.state.theme}
// //           onChange={this.handleChange}
// //           value={this.state.editorHtml}
// //           modules={Editor.modules}
// //           formats={Editor.formats}
// //           bounds={'.app'}
// //           placeholder={this.props.placeholder}
// //          />
// //         <div className="themeSwitcher">
// //           <label>Theme </label>
// //           <select onChange={(e) => 
// //               this.handleThemeChange(e.target.value)}>
// //             <option value="snow">Snow</option>
// //             <option value="bubble">Bubble</option>
// //             <option value="core">Core</option>
// //           </select>
// //         </div>
// //        </div>
// //      )
// //   }
// // }

// // /* 
// //  * Quill modules to attach to editor
// //  * See https://quilljs.com/docs/modules/ for complete options
// //  */
// // Editor.modules = {
// //   toolbar: [
// //     [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
// //     [{size: []}],
// //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
// //     [{'list': 'ordered'}, {'list': 'bullet'}, 
// //      {'indent': '-1'}, {'indent': '+1'}],
// //     ['link', 'image', 'video'],
// //     ['clean']
// //   ],
// //   clipboard: {
// //     // toggle to add extra line breaks when pasting HTML:
// //     matchVisual: false,
// //   }
// // }
// // /* 
// //  * Quill editor formats
// //  * See https://quilljs.com/docs/formats/
// //  */
// // Editor.formats = [
// //   'header', 'font', 'size',
// //   'bold', 'italic', 'underline', 'strike', 'blockquote',
// //   'list', 'bullet', 'indent',
// //   'link', 'image', 'video'
// // ]

// // /* 
// //  * PropType validation
// //  */
// // Editor.propTypes = {
// //   placeholder: PropTypes.string,
// // }

// // /* 
// //  * Render component on page
// //  */
// // ReactDOM.render(
// //   <Editor placeholder={'Write something...'}/>, 
// //   document.querySelector('.app')
// // )