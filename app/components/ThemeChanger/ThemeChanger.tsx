import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { IoIosColorFill } from "react-icons/io";
import { useOnClickOutside } from "usehooks-ts";

const themes = [
  { name: "Default", value: "default" },
  { name: "Aqua", value: "aqua" },
  { name: "Lightly", value: "lightly" },
  { name: "Nordic", value: "nordic" },
];

const ThemeChanger = () => {
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const popupRef = useRef(null);
  useOnClickOutside(popupRef, () => setIsShowPopup(false));

  return (
    <div className="flex items-center relative" ref={popupRef}>
      <button
        type="button"
        className="bg-second-color text-text-color w-[35px] h-[35px] m-margin-spacing transition-all hover:bg-third-color rounded-button-rounded truncate flex items-center justify-center"
        // title={title}
        onClick={() => setIsShowPopup(!isShowPopup)}
      >
        <IoIosColorFill size={20} />
      </button>
      {isShowPopup && (
        <div className="absolute bg-second-color text-text-color rounded-lg border w-[180px] mb-2 shadow-2xl top-[45px] right-0 max-h-[250px] overflow-y-auto">
          <div className="py-1 px-2 text-[1rem] border-b border-third-color">Select Theme</div>
          {themes.map((t) => (
            <div
              key={t.value}
              onClick={() => {
                setTheme(t.value);
                setIsShowPopup(false);
              }}
              className={`w-full py-[10px] px-4 hover:bg-third-color cursor-pointer transition-all ${
                theme === t.value ? "bg-third-color" : ""
              }`}
            >
              {t.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
