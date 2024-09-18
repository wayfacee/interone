import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useFonts } from "../providers/fonts/FontsProvider";
import { useState } from "react";
import { FONT_LOCAL_STORAGE } from "../providers/fonts/fontlc";

export const Header = () => {
  const { changeFont } = useFonts();
  const [isRoboto, setIsRoboto] = useState(localStorage.getItem(FONT_LOCAL_STORAGE === 'Roboto'));

  const handleFontToggle = () => {
    const newFont = isRoboto ? 'Serif' : 'Roboto';
    changeFont(newFont);
    setIsRoboto(!isRoboto);
  };

  return (
    <div className="flex mb-3 items-center justify-center mt-1 flex-row">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? 'text-red-600' : 'text-blue-500'}`
        } to='/'>
        Поиск
      </NavLink>

      <Button type="default" onClick={handleFontToggle} className="ml-2">Change Font</Button>
    </div>
  );
};