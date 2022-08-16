import React, {useState, useEffect  } from 'react'; 
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

import {motion} from 'framer-motion';
import {images} from '../../constants';

import {AppWrap, MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
 

  
   const handleClick = (index) => {
    setCurrentIndex(index)
   }



  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
    .then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    });
  }, []);

     const test = testimonials[currentIndex];
  return (
       <>
        {testimonials.lenght && (
          <>
          <div className="app__testimonial-item app__flex">
          {/* urlFor(test.imgUrl) */}
             <img src={images.bolt}  alt="testimonial"/>
             <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">
                  {test.name}
                </h4>
                <h4 className="p-text">
                  {test.company}
                </h4>
              </div>
             </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0: currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
          </>
        )}
             <div className="app__testimonial-brands app__flex">
              {brands.map((brand) => (
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5, type: 'tween'}} 
                key={brand._id}
                >
                  <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                </motion.div>
              ))}
             </div>
       </>
  )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
   'testimonial',
   "app__primarybg"
   );