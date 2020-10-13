import Axios from 'axios';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from "axios";


function Dropzone({idAttention}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file);
    
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`/attention/${idAttention}/image/upload`, 
    formData,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }).then(() => {
      console.log("file uploaded succesfully")
    }).catch(err => {
      console.log(err);
    });
    

    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the attention image here ...</p> :
          <p>Drag 'n' drop some attention image, or click to select the attention image</p>
      }
    </div>
  )
}

export default Dropzone;
