// import React from 'react';

// const Logo = ({ className = '' }) => {
//   return (
//     <div className={`flex items-center gap-1 pl-8${className}`}>
//       <span className="text-3xl font-bold text-primary">Callix</span>
//       <span className="text-3xl  font-bold text-white">Ai</span>
//     </div>
//   );
// };

// export default Logo;

import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-1 pl-8 ${className}`}>
      <span className="text-3xl font-bold text-primary relative ">
        <span className="relative bottom-[2.5px]"> Calli</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 25"
          width="26"
          height="20"
          className="inline-block text-primary align-baseline relative bottom-[0.2px]"
        >
          <line
            x1="3"
            y1="4"
            x2="28"
            y2="31"
            stroke="currentColor"
            // stroke="white"
            strokeWidth="5"
          />
          <line
            x1="20"
            y1="4"
            x2="4"
            y2="22"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <span className="text-3xl font-bold text-white ml-[-8px] relative bottom-[3px]">
          AI
        </span>
      </span>
    </div>
  );
};

export default Logo;
