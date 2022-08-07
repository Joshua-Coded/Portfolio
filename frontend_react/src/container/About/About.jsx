import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';
import { useFor, client} from '../../client';

const abouts = [
  
    {title: 'Frontend developer', description: 'I am your favourite frontend developer.', imgUrl: images.about01},
    {title: 'Backend developer', description: 'I am your favourite  backend developer.', imgUrl: images.about02},
    {title: 'Full stack developer', description: 'I am your favourite full stack developer.', imgUrl: images.about03},
    {title: 'Mern Stack', description: '...........................', imgUrl: images.about04},
  
];

const About = () => {
   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
     const query = '*[_type == "abouts"]'

     client.fetch(query)
   }, []);
   
   




  return (
    <>
    <h2 className="head-text">I Know that <span>Good Development </span> <br /> means <span>Good Business</span></h2>

      <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{duration: 0.5, type: 'tween'}}
                className="app__profile-item"
                key={about.title + index}
              
              >
                 <img  src={about.imgUrl} alt="about-title"/>
                 <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                 <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            ))}
      </div>
    </>
  )
}

export default About