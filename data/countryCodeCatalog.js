import CountryCode from "../models/countryCode"
export const CountryCodes = {
    //countryName, abbreviation, countryCode, flag
    Jordan: new CountryCode ("Jordan", "JO", +962, "U+1F1EF U+1F1F4" ),
    UnitedArabEmarites: new CountryCode ("United Arab Emirates", "UAE", +971, "U+1F1E6 U+1F1EA "),
    SyrianRepublic: new CountryCode ("Syrian Arab Republic", "SY", +963, "U+1F1F8 U+1F1FE "),
    Lebanon: new CountryCode ("Lebanon", "LB",+ 961, "U+1F1F1 U+1F1E7"),
    SaudiArabia: new CountryCode ("Saudi Arabia", "SA", +966, "U+1F1F8 U+1F1E6"),
    Yemen: new CountryCode ("Yemen", "YE", +967,  "U+1F1FE U+1F1EA"),
    Oman: new CountryCode ("Oman", "OM", +968, "U+1F1F4 U+1F1F2"),
    Qatar: new CountryCode ("Qatar", "QA", +974, "U+1F1F6 U+1F1E6"),
    Kuwait: new CountryCode ("Kuwait", "KW", +965, "U+1F1F0 U+1F1FC"),
    Iraq: new CountryCode ("Iraq", "IQ", +964,"U+1F1EE U+1F1F6")
}