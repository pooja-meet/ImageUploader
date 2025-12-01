import React, { useState } from 'react'
function Upload() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState("")
    const handler = (e) => {
        const selectedfile = e.target.files[0];
        setFile(selectedfile)
        setPreview(URL.createObjectURL(selectedfile))
        console.log(file);
        console.log(preview);
    }
    const shandler = async () => {
        if (!file) {
            alert("please select an image first")
            return;
        }
        const form = new FormData();
        form.append('avtar', file);

        const res = await fetch(`https://imageuploader-g3qq.onrender.com/upload`, {
            method: 'POST',
            body: form
        });
        const data = await res.json()
        alert(data.filename)
    }
    return (
        <>
            <h2>Upload Image</h2>
            {/* <input type="file" accept="avtar/*" onChange={handleFileChange} /> */}
            <input type="file" name="avtar" onChange={handler} />

            <br /><br />

            {preview && <img src={preview} alt="Preview" width="200" />}

            <br /><br />

            <button onClick={shandler}>Upload</button>
        </>
    )
}

export default Upload
