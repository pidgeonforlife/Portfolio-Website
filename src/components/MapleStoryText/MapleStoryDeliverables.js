import React, { useState } from 'react';
import { motion} from 'framer-motion';

function MapleStoryDeliverables() {

  return (
    <div className='aboutContainer' id='containerHelp'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Deliverables<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Text-Based Map</p>
            <p>Randomly Generated Enemies Algorithm</p>
            <p>Level Up / Experience System</p>
            <p>Immersive Story Board</p>
        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='aboutButton2'>
          <a href='https://github.com/pidgeonforlife/MapleStory-Text'>SOURCE</a></motion.button>
        </motion.div>
    </div>
  );
}

export default MapleStoryDeliverables;