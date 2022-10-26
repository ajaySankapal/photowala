import React from 'react'
import img1 from '../img/img_street/pro_street_1.jpg'
import img2 from '../img/img_street/pro_street_2.jpg'
import img3 from '../img/img_street/pro_street_3.jpg'
import img4 from '../img/img_street/pro_street_4.jpg'
import img5 from '../img/img_street/pro_street_5.jpg'
import img6 from '../img/img_street/pro_street_6.jpg'
const Street = ({ setSelectedImg }) => {
  const images = [img1, img2, img3, img4, img5, img6]
  return (
    <div className='img-grid'>
      {images.map((img) => {
        return (
          <div className='img-wrap' onClick={() => setSelectedImg(img)}>
            <img src={img} alt='' />
          </div>
        )
      })}
    </div>
  )
}

export default Street
