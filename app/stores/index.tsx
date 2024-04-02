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
  setPositionCursor: (value: { selStart: number; selEnd: number }) => void;
  setIsWrap: (value: boolean) => void;
  setData: (value: string) => void;
  setIsShowFooter: (value: boolean) => void;
}

export const store = create<StoreTypes>()(
  devtools(
    persist(
      (set) => ({
        data: "",
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
        setData: (value: string) => set({ data: value }),
        setIsWrap: (value: boolean) => set({ isWrap: value }),
        setIsShowFooter: (value: boolean) => set({ isShowFooter: value }),
      }),
      { name: "store", storage: createJSONStorage(() => localStorage) }
    )
  )
);
