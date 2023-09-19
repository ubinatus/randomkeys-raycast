import { randomBytes } from "crypto";

const SIZE = 256;

let rndIndex: number;
let rndBytes: Buffer;

const getNextRandomValue = (): number => {
  if (rndIndex === undefined || rndIndex >= rndBytes.length) {
    rndIndex = 0;
    rndBytes = randomBytes(SIZE);
  }

  const result = rndBytes[rndIndex];
  rndIndex += 1;

  return result;
};

export const randomNumber = (max: number): number => {
  let rand = getNextRandomValue();
  while (rand >= SIZE - (SIZE % max)) {
    rand = getNextRandomValue();
  }
  return rand % max;
};
