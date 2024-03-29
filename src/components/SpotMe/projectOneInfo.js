import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectOneInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>SpotMe is a new social platform based on finding friends to workout with during the Covid pandemic. Using the application, the SpotMe team
              hoped to inspire users to connect with the fitness community and to continue staying safe. During a 5-week term project, 
                team of 5 developers came up with a mobile web application that combines the themes of Tinder and Fitness all in one.</p>
            <p>In this project the implementation of database interactions, Vue.js, and Vuetify were used.</p>
        </motion.div>
    </div>
  );
}

export default ProjectOneInfo;