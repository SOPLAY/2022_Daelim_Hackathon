import { atom } from 'recoil';

export const atomHumanType = atom({
  default: 'front',
  key: `atomHumanType/${Math.random().toString(36)}`,
});
