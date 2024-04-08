import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface StoreTypes {
  data: string;
  isShowFooter: boolean;
  isWrap: boolean;
  positionCursor: {
    selStart: number;
    selEnd: number;
  };
  themeColor: string;
  fontSize: number;
  setPositionCursor: (value: { selStart: number; selEnd: number }) => void;
  setIsWrap: (value: boolean) => void;
  setThemeColor: (value: string) => void;
  setData: (value: string) => void;
  setFontSize: (value: number) => void;
  setIsShowFooter: (value: boolean) => void;
}

export const store = create<StoreTypes>()(
  devtools(
    persist(
      (set) => ({
        themeColor: "Default",
        data: "",
        fontSize: 1,
        isShowFooter: true,
        isWrap: true,
        positionCursor: { selStart: 0, selEnd: 0 },
        setPositionCursor: (value: { selStart: number; selEnd: number }) =>
          set({
            positionCursor: {
              selStart: value.selStart,
              selEnd: value.selEnd,
            },
          }),
        setThemeColor: (value: string) => set({ themeColor: value }),
        setData: (value: string) => set({ data: value }),
        setFontSize: (value: number) => set({ fontSize: value }),
        setIsWrap: (value: boolean) => set({ isWrap: value }),
        setIsShowFooter: (value: boolean) => set({ isShowFooter: value }),
      }),
      { name: "store", storage: createJSONStorage(() => localStorage) }
    )
  )
);
