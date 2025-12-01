import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Images() {
  const [images, setImages] = useState([])

  const loadImages = async () => {
    const res = await fetch(`https://imageuploader-g3qq.onrender.com/view`);
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      <h2>Uploaded Images</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {
          images.map((img, index) => {
            return (
              <div key={index}>
                <img src={img.url} alt="" width='150'
                  style={{ borderRadius: '8px', border: '1px solid #ccc' }} />
                <p>{img.filename}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Images

