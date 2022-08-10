import React from 'react';
import  { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
    return(
        <div>
           <motion.div
           whileInView={{y: [100, 50, 0], opacity: [0, 0, 1] }}
           transition={{duration: 0.5}}
           className={`${classNames} app_flex`}
           
           >
                <Component />
           </motion.div>
        </div>
    )
}

export default MotionWrap;