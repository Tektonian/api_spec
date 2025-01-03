/**
 *Country Code - ISO-alpha
 */

export const COUNTRY_CODE_ENUM = {
    Australia: "AU",
    Austria: "AT",
    Belgium: "BE",
    Canada: "CA",
    Chile: "CL",
    Czech: "CZ",
    Denmark: "DK",
    Estonia: "EE",
    Finland: "FI",
    France: "FR",
    Germany: "DE",
    Greece: "GR",
    Hungary: "HU",
    Iceland: "IS",
    Italy: "IT",
    Japan: "JP",
    South_Korea: "KR",
    Luxembourg: "LU",
    Mexico: "MX",
    Netherlands: "NL",
    New_Zealand: "NZ",
    Norway: "NO",
    Poland: "PL",
    Portugal: "PT",
    Slovakia: "SK",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Turkey: "TR",
    United_Kingdom: "GB",
    United_States: "US",
    Argentina: "AR",
    Brazil: "BR",
    China: "CN",
    Colombia: "CO",
    India: "IN",
    Indonesia: "ID",
    Israel: "IL",
    Malaysia: "MY",
    Peru: "PE",
    Philippines: "PH",
    South_Africa: "ZA",
    Thailand: "TH",
    Vietnam: "VN",
} as const;

export type COUNTRY_CODE_ENUM = (typeof COUNTRY_CODE_ENUM)[keyof typeof COUNTRY_CODE_ENUM];