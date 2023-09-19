import { randomNumber } from "./random";

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
const hex = "123456789ABCDEF";

const generate = (opts: Options, pool: string): string => {
  let password = "";
  const optionsLength = opts.length;
  const poolLength = pool.length;

  for (let i = 0; i < optionsLength; i++) {
    password += pool[randomNumber(poolLength)];
  }

  return password;
};

type Options = {
  length: number;
  useNumbers?: boolean;
  useSymbols?: boolean;
  useUpperCase?: boolean;
  useLowerCase?: boolean;
  useHex?: boolean;
};

const generateKey = (
  opts: Options = {
    length: 10,
    useNumbers: false,
    useLowerCase: true,
    useUpperCase: true,
    useSymbols: false,
    useHex: false,
  }
): string => {
  let pool = "";

  if (opts.useNumbers) pool += numbers;
  if (opts.useLowerCase) pool += lowercase;
  if (opts.useUpperCase) pool += uppercase;
  if (opts.useSymbols) pool += symbols;
  if (opts.useHex) pool += hex;

  if (!pool) throw new Error("At least one rule for pools must be true");

  return generate(opts, pool);
};

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
      return {
        length: 10,
        useNumbers: true,
        useLowerCase: true,
        useUpperCase: true,
      };
    case KeyEnum.strong:
      return {
        length: 15,
        useLowerCase: true,
        useUpperCase: true,
        useSymbols: true,
      };
    case KeyEnum.ft_knox:
      return {
        length: 30,
        useLowerCase: true,
        useUpperCase: true,
        useSymbols: true,
      };
    case KeyEnum.ci_key:
      return {
        length: 32,
        useNumbers: true,
        useLowerCase: true,
        useUpperCase: true,
      };
    case KeyEnum.wpa_160:
      return {
        length: 20,
        useLowerCase: true,
        useUpperCase: true,
        useSymbols: true,
      };
    case KeyEnum.wpa_504:
      return {
        length: 63,
        useSymbols: true,
      };
    case KeyEnum.wep64:
      return {
        length: 5,
        useHex: true,
      };
    case KeyEnum.wep128:
      return {
        length: 13,
        useHex: true,
      };
    case KeyEnum.wep152:
      return {
        length: 16,
        useHex: true,
      };
    case KeyEnum.wep256:
      return {
        length: 29,
        useHex: true,
      };
    default:
      throw Error(`Invalid key type`);
  }
}

export function getKey(strength: KeyEnum) {
  return generateKey(getOptionsForKey(strength));
}
