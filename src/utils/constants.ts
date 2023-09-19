import { KeyEnum } from "./generator";

export const keySections = [
  {
    title: "Memorable Passwords",
    description: "Decently secure passwords. Balanced for memorability and security. Suitable for daily use.",
    type: KeyEnum.decent,
  },
  {
    title: "Strong Passwords",
    description: "Robust security with a mix of different character types. Ideal for protecting sensitive data.",
    type: KeyEnum.strong,
  },
  {
    title: "Fort Knox Passwords",
    description: "Ultimate level of security. Complex and lengthy. Ideal for protecting highly confidential data.",
    type: KeyEnum.strong,
  },
  {
    title: "CodeIgniter Encryption Keys",
    description: "Solid 32-char keys for use with CodeIgniter PHP framework's encryption services.",
    type: KeyEnum.ci_key,
  },
  {
    title: "160-bit WPA Key",
    description: "Wi-Fi Protected Access (WPA) keys with higher security. Intended for securing wireless networks.",
    type: KeyEnum.wpa_160,
  },
  {
    title: "504-bit WPA Key",
    description: "Maximum length key for WPA. Ensuring advanced level security for Wi-Fi networks.",
    type: KeyEnum.wpa_504,
  },
  {
    title: "64-bit WEP Keys",
    description:
      "Entry-level Wireless Encryption Protocol (WEP) keys. Best suited for older devices or minimal security needs.",
    type: KeyEnum.wep64,
  },
  {
    title: "128-bit WEP Keys",
    description: "Advanced level WEP keys providing stronger security than the 64-bit version.",
    type: KeyEnum.wep128,
  },
  {
    title: "152-bit WEP Keys",
    description: "Specialized WEP keys providing above average security. Compatible with specific devices only.",
    type: KeyEnum.wep152,
  },
  {
    title: "256-bit WEP Keys",
    description: "The strongest of the WEP keys for maximum wireless security, but compatible with very few devices.",
    type: KeyEnum.wep256,
  },
];
