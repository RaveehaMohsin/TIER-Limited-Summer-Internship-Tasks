import React, { useState , useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Blog } from "../../../Model/blog";

const blogs = JSON.parse(localStorage.getItem("All Blogs")) || [];

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 1000,
    maxStack: 500,
    userOnly: true,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "list",
  "bullet",
  "indent",
  "bold",
  "italic",
  "underline",
  "color",
  "background",
  "align",
  "link",
  "image",
  "video",
  "clean",
];

export default function Addblog() {
  const quillref = useRef(null);

  const [title, setTitle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [datepublished, setDatepublished] = useState();
  const [featuredimage, setFeaturedImage] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState();
  const [quilltext , setQuilltext] = useState();
  

  const HandleText =()=>{
     if(quillref.current)
     {
        const editor = quillref.current.getEditor();
        var context = editor.root.innerHTML;
        setQuilltext(context);

        // Extracting Image URL
      const imageMatch = context.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imageMatch ? imageMatch[1] : "";
      setFeaturedImage(imageUrl);


      if (imageMatch) {
        context = context.replace(imageMatch[0], "");
      }
    const plainText = context.replace(/<\/?[^>]+>/gi, '');
    setContent(plainText);
     
    }
  };

  const HtmltoText = ({htmlcode})=>
  {
    return <code dangerouslySetInnerHTML={{__html:htmlcode}} />
  }

 const handlesubmission =()=>
 {
    console.log(title , authorname , datepublished , featuredimage , content , categories);
    if(title === ""|| authorname === "" || datepublished === "" || featuredimage === "" || content === "" || categories === "")
    {
      alert("Kindly fill all fields(Title , Authorname , Date , Add Image, categories(list) & Content in QuillBox");
    }
    else{
        const myblog = new Blog(title , authorname , datepublished , featuredimage , content , categories);
        blogs.push(myblog); 
        localStorage.setItem("All Blogs", JSON.stringify(blogs)); 
        alert("Blog added Successfully!");
    }
 }

  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="col-md-3">
            <div className="form-group">
              <label>Blog Title</label>
              <input
                className="form-control"
                type="text"
                id="blogTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Author Name</label>
              <input
                className="form-control"
                type="text"
                id="authorname"
                value={authorname}
                onChange={(e) => setAuthorname(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Date Published</label>
              <input
                className="form-control"
                type="date"
                id="datepublished"
                value={datepublished}
                onChange={(e) => setDatepublished(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Category( , )</label>
              <input
                className="form-control"
                id="category"
                value={categories}
                onChange={(e) => setCategories(e.target.value.split(",").map(item => item.trim()))}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "20px",
          }}
        >
          <ReactQuill
            style={{ width: "100%", maxWidth: "800px", height: "350px" }}
            ref={quillref}
            modules={modules}
            formats={formats}
            placeholder="Write your blog content here..."
            theme="snow"
            value={quilltext}
            onChange={HandleText}
          />
          <button
            className="btn btn-success"
            style={{
              marginTop: "50px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
            onClick={handlesubmission}
          >
            Submit Blog
          </button>
        </div>

       
     {/* <HtmltoText htmlcode={quilltext} />  */}
        
      </div>
    </div>
  );
}
