import React from 'react'
import propic from '../img/img_street/avatar2.jpg'
import Typography from '@mui/material/Typography'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaYoutube } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div>
      <div id='about'>
        <Typography
          variant='h4'
          style={{ fontFamily: 'Amiri', textAlign: 'center' }}
        >
          About Me
        </Typography>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-3'>
            <div className='photo-container'>
              <img className='propic' src={propic} alt='author' />
            </div>
          </div>
          <div className='col-6 aboutme-info'>
            <Typography variant='subtitle1'>
              Hi I am K.Ramchandran go by the name{' '}
              <strong style={{ color: 'green', cursor: 'pointer' }}>
                PHOTOWALA
              </strong>{' '}
              in the industry. I am a wedding photographer who absolutely loves
              his job and everything that comes with it . I appreciate the
              people I meet, the places I go, the hours I keep, and the
              spontaneity in every shoot. <br />
              <br /> I appreciate the raw reality of everyday life, the fleeting
              beauty of those in-between moments,and I do my very best to take
              every picture with that in mind. I want my viewers to relate to my
              photographs through the recognitiion of and familiarity with the
              situations, the emotions, and the energy so much that they wonder
              if they are looking at a picture of someone they know.
            </Typography>
          </div>
        </div>
      </div>
      <div className='social-container'>
        <span
          className='insta'
          style={{
            color: '#ec407a',
          }}
        >
          <BsInstagram />
        </span>
        <span className='twi' style={{ color: '#2196f3' }}>
          <BsTwitter />
        </span>
        <span className='faceb' style={{ color: '#2196f3' }}>
          <FaFacebook />
        </span>
        <span className='yt' style={{ color: '#FF0000' }}>
          <FaYoutube />
        </span>
      </div>
    </div>
  )
}

export default AboutMe
