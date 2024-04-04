import { useRef } from "react";
import { useTheme } from "next-themes";

const themes = [
  { name: "Default", value: "default" },
  { name: "Aqua", value: "aqua" },
  { name: "Lightly", value: "lightly" },
  { name: "Nordic", value: "nordic" },
];

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const popupRef = useRef(null);

  return (
    <div className="flex items-center" ref={popupRef}>
      <select
        className="bg-second-color text-text-color outline-none rounded h-[35px] min-w-[100px] w-full max-w--[200px] px-2"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeChanger;
