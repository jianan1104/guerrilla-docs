import React from 'react';

import * as Icons from "react-icons/bi";
import {SiDocker, SiGithub, SiLinux, SiWindows} from "react-icons/si";

/* Your icon name from database data can now be passed as prop */
const DynamicBiIcon = ({ name, size }) => {
    if(name === "docker"){
      return <SiDocker size={size} />
    }
    if(name === "windows"){
        return <SiWindows size={size} />
    }
    if(name === "github"){
      return <SiGithub size={size} />
    }
    if(name === "linux"){
      return <SiLinux size={size} />
    }
  
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <Icons.BiAbacus size={size} />;
    }
  
    return <IconComponent size={size} />;
  };

  export default DynamicBiIcon;