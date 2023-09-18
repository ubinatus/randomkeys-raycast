import { randomBytes } from "crypto";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "`~!@#$%^&*()-=_+[]{}|;':\",./<>?";
const hex = "123456789ABCDEF";

interface Options {
  length: number;
  useLowerCase?: boolean;
  useUpperCase?: boolean;
  useNumbers?: boolean;
  useSpecial?: boolean;
  useHex?: boolean;
}

function keyGen(ops: Options): string {
  let chars = "";
  let key = "";

  if (ops.useLowerCase) chars += lowerCase;
  if (ops.useUpperCase) chars += upperCase;
  if (ops.useNumbers) chars += numbers;
  if (ops.useSpecial) chars += special;
  if (ops.useHex) chars += hex;

  for (let i = 0; i < ops.length; i++) {
    key += chars[Math.floor((randomBytes(1).readUInt8(0) / 255) * chars.length)];
  }

  return key;
}

export enum KeyEnum {
  "decent",
  "strong",
  "ft_knox",
  "ci_key",
  "wpa_160",
  "wpa_504",
  "wep64",
  "wep128",
  "wep152",
  "wep256",
}

function getOptionsForKey(strength: KeyEnum): Options {
  switch (strength) {
    case KeyEnum.decent:
      return { length: 10 };
    case KeyEnum.strong:
      return { length: 15, useSpecial: true };
    case KeyEnum.ft_knox:
      return { length: 30, useSpecial: true };
    case KeyEnum.ci_key:
      return { length: 32 };
    case KeyEnum.wpa_160:
      return { length: 20, useSpecial: true };
    case KeyEnum.wpa_504:
      return { length: 63, useSpecial: true };
    case KeyEnum.wep64:
      return {
        length: 5,
        useNumbers: false,
        useLowerCase: false,
        useUpperCase: false,
        useSpecial: false,
        useHex: true,
      };
    case KeyEnum.wep128:
      return {
        length: 13,
        useNumbers: false,
        useLowerCase: false,
        useUpperCase: false,
        useSpecial: false,
        useHex: true,
      };
    case KeyEnum.wep152:
      return {
        length: 16,
        useNumbers: false,
        useLowerCase: false,
        useUpperCase: false,
        useSpecial: false,
        useHex: true,
      };
    case KeyEnum.wep256:
      return {
        length: 29,
        useNumbers: false,
        useLowerCase: false,
        useUpperCase: false,
        useSpecial: false,
        useHex: true,
      };
    default:
      throw Error(`Invalid key type`);
  }
}

export function getKey(strength: KeyEnum) {
  return keyGen(getOptionsForKey(strength));
}
