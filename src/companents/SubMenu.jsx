import Navigation from "./Navigation";
import SideBar from "./SideBar";
import { useState } from "react";

export default function SubMenu() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="flex bg-white w-full h-[100vh] absolute left-0 px-6  top-32 z-10">
     
        <div className="w-[25%]">
          <SideBar click={handleClick} />
        </div>
    
      {active ? <Navigation /> : null}
    </div>
  );
}
