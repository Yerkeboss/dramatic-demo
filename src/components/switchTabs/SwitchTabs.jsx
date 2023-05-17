// import React, { useState } from "react";

// import "./style.scss";

// const SwitchTabs = ({ data, onTabChange }) => {
//     const [selectedTab, setSelectedTab] = useState(0);
//     const [left, setLeft] = useState(0);

//     const activeTab = (tab, index) => {
//         setLeft(index * 100);
//         setTimeout(() => {
//             setSelectedTab(index);
//         }, 300);
//         onTabChange(tab, index);
//     };

//     return (
//         <div className="switchingTabs">
//             <div className="tabItems">
//                 {data.map((tab, index) => (
//                     <span
//                         key={index}
//                         className={`tabItem ${
//                             selectedTab === index ? "active" : ""
//                         }`}
//                         onClick={() => activeTab(tab, index)}
//                     >
//                         {tab}
//                     </span>
//                 ))}
//                 <span className="movingBg" style={{ left }} />
//             </div>
//         </div>
//     );
// };

// export default SwitchTabs;

import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownChange = (index) => {
    setSelectedTab(index);
    setIsDropdownOpen(false);
    onTabChange(data[index]);
  };

  return (
    <div className="switchingTabs">
      <div className="dropdown">
        <button
          className="dropbtn"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {data[selectedTab]}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {data.map((tab, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleDropdownChange(index)}
              >
                {tab}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SwitchTabs;

