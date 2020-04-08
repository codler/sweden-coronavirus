import { Country } from "./contaminatedSource";

export type Län =
  | "Blekinge län"
  | "Dalarnas län"
  | "Gotlands län"
  | "Gävleborgs län"
  | "Hallands län"
  | "Jämtlands län"
  | "Jönköpings län"
  | "Kalmar län"
  | "Kronobergs län"
  | "Norrbottens län"
  | "Skåne län"
  | "Stockholms län"
  | "Södermanlands län"
  | "Uppsala län"
  | "Värmlands län"
  | "Västerbottens län"
  | "Västernorrlands län"
  | "Västmanlands län"
  | "Västra Götalands län"
  | "Örebro län"
  | "Östergötlands län";

export type Kön = "kvinna" | "man" | "okänd";
export interface Case {
  id?: number;
  date: Date;
  persons?: number;
  gender?: Kön;
  age?: string;
  city?: string;
  lan: Län;
  contaminatedSource?: Country;
  contaminatedByIndex?: number;
  relatedIndex?: number;
  isHome?: boolean;
  isIntensiveCare?: boolean;
  adjustHospitalCare?: number;
  hospital?: string;
  source?: string;
}

const cases: Case[] = [
  {
    id: 0,
    date: new Date("2020-01-31"),
    gender: "kvinna",
    age: "20-årsåldern",
    city: "Jönköping",
    lan: "Jönköpings län",
    contaminatedSource: "Kina",
    hospital: "Länssjukhuset Ryhov",
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/januari/bekraftat-fall-av-nytt-coronavirus-i-sverige/"
  },
  {
    id: 1,
    date: new Date("2020-02-26"),
    gender: "man",
    age: "30-årsåldern",
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    hospital: "Sahlgrenska Universitetssjukhuset",
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/nytt-bekraftat-fall-av-covid-19/"
  },
  {
    id: 2,
    date: new Date("2020-02-27"),
    gender: "kvinna",
    lan: "Uppsala län",
    contaminatedSource: "Tyskland",
    hospital: "Akademiska sjukhuset",
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/ytterligare-fall-av-covid-19-i-flera-regioner/"
  },
  {
    id: 3,
    date: new Date("2020-02-27"),
    gender: "kvinna",
    age: "medelåldern",
    lan: "Stockholms län",
    contaminatedSource: "Iran",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/ytterligare-fall-av-covid-19-i-flera-regioner/"
  },
  {
    id: 4,
    date: new Date("2020-02-27"),
    gender: "man",
    age: "30-årsåldern",
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/ytterligare-fall-av-covid-19-i-flera-regioner/"
  },
  {
    id: 5,
    persons: 2,
    date: new Date("2020-02-27"),
    gender: "kvinna",
    age: "30-årsåldern",
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 1,
    source:
      "https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/ytterligare-fall-av-covid-19-i-flera-regioner/"
  },
  {
    id: 6,
    persons: 2,
    date: new Date("2020-02-28"),
    lan: "Stockholms län",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 3,
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/02/tva-nya-bekraftade-fall-av-nya-coronaviruset-i-stockholm--patienterna-vardas-isolerat-pa-infektionsklinik/"
  },
  {
    id: 7,
    date: new Date("2020-02-28"),
    gender: "kvinna",
    age: "medelåldern",
    lan: "Uppsala län",
    contaminatedSource: "Iran",
    hospital: "Akademiska sjukhuset",
    source:
      "https://via.tt.se/pressmeddelande/nytt-bekraftat-fall-av-coronaviruset-i-uppsala-lan?publisherId=3235664&releaseId=3271212"
  },
  {
    id: 8,
    date: new Date("2020-02-28"),
    gender: "man",
    age: "50-årsåldern",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/pressmeddelande-28-februari-2020-ytterligare-bekraftat-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19--45553"
  },
  {
    id: 9,
    date: new Date("2020-02-29"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Iran",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/29-februari--nytt-bekraftat-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3049735"
  },
  {
    id: 10,
    date: new Date("2020-02-29"),
    lan: "Stockholms län",
    age: "20-årsåldern",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 3,
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/02/coronavirus/"
  },
  {
    id: 11,
    date: new Date("2020-03-01"),
    gender: "man",
    age: "30-årsåldern",
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    relatedIndex: 1,
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/1-mars--ytterligare-ett-bekraftat-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3049962"
  },
  {
    id: 12,
    date: new Date("2020-03-02"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/coronanyhet/"
  },
  {
    id: 13,
    date: new Date("2020-03-03"),
    gender: "kvinna",
    age: "50-årsåldern",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    relatedIndex: 8,
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/tredje--bekraftade-fallet-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45658"
  },
  {
    id: 14,
    persons: 3,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    relatedIndex: 15,
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fler-bekraftade-fall-av-nya-coronaviruset-i-stockholm/"
  },
  {
    id: 15,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fler-bekraftade-fall-av-nya-coronaviruset-i-stockholm/"
  },
  {
    id: 16,
    persons: 3,
    date: new Date("2020-03-03"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    relatedIndex: 17,
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/3-mars--ytterligare-tre-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3051305"
  },
  {
    id: 17,
    date: new Date("2020-03-03"),
    gender: "man",
    age: "25-årsåldern",
    city: "Lund",
    lan: "Skåne län",
    contaminatedSource: "Italien",
    hospital: "Infektionsverksamheten på Skånes universitetssjukhus i Lund",
    source:
      "http://www.mynewsdesk.com/se/region_skane/pressreleases/skaane-har-faatt-sitt-foersta-fall-av-covid-19-2978167"
  },
  {
    id: 18,
    persons: 3,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/ny-nyhet-corona/"
  },
  {
    id: 19,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/ny-nyhet-corona/"
  },
  {
    id: 20,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 20,
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/ny-nyhet-corona/"
  },
  {
    id: 21,
    date: new Date("2020-03-03"),
    lan: "Stockholms län",
    contaminatedSource: "Iran",
    hospital: "Karolinska Universitetssjukhusets infektionsklinik",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/ny-nyhet-corona/"
  },
  {
    id: 22,
    date: new Date("2020-03-04"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Iran",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/4-mars--ytterligare-tva-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052013"
  },
  {
    id: 23,
    date: new Date("2020-03-04"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/4-mars--ytterligare-tva-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052013"
  },
  {
    id: 24,
    date: new Date("2020-03-04"),
    gender: "kvinna",
    age: "45-årsåldern",
    city: "Malmö",
    lan: "Skåne län",
    contaminatedSource: "Italien",
    hospital: "Infektionsverksamheten i Malmö",
    source:
      "http://www.mynewsdesk.com/se/region_skane/news/pressbulletin-om-covid-19-4-mars-395997"
  },
  {
    id: 25,
    persons: 2,
    date: new Date("2020-03-04"),
    age: "50-årsåldern",
    city: "Karlstad",
    lan: "Värmlands län",
    contaminatedSource: "Italien",
    hospital: "Infektionskliniken på Centralsjukhuset i Karlstad",
    relatedIndex: 26,
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tva-fall-av-nya-coronaviruset-i-varmland/"
  },
  {
    id: 26,
    date: new Date("2020-03-04"),
    age: "under 20år",
    city: "Örebro",
    lan: "Örebro län",
    contaminatedSource: "Italien",
    hospital: "Infektionskliniken på USÖ",
    source:
      "https://via.tt.se/pressmeddelande/noggranna-instruktioner-till-dem-som-varit-i-kontakt-med-smittad?publisherId=3235654&releaseId=3271530"
  },
  {
    id: 27,
    persons: 16,
    date: new Date("2020-03-04"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm/"
  },
  {
    id: 28,
    date: new Date("2020-03-05"),
    city: "Borås",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/5-mars--ett-nytt-bekraftat-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052981"
  },
  {
    id: 29,
    persons: 7,
    date: new Date("2020-03-05"),
    lan: "Skåne län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-5-mars-2979148"
  },
  {
    id: 30,
    persons: 3,
    date: new Date("2020-03-05"),
    lan: "Värmlands län",
    isHome: true,
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-tre-fall-av-nya-coronaviruset-i-varmland/"
  },
  {
    id: 31,
    persons: 14,
    date: new Date("2020-03-05"),
    lan: "Stockholms län",
    contaminatedSource: "Italien",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-5-mars/"
  },
  {
    id: 32,
    persons: 14,
    date: new Date("2020-03-05"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-5-mars/"
  },
  {
    id: 33,
    date: new Date("2020-03-05"),
    lan: "Gävleborgs län",
    contaminatedSource: "Italien",
    hospital: "Infektionsavdelningen",
    source:
      "https://www.regiongavleborg.se/nyheter/bekraftat-fall-av-covid-19-i-gavleborg/"
  },
  {
    id: 34,
    date: new Date("2020-03-05"),
    age: "medelåldern",
    lan: "Uppsala län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/tva-nya-bekraftade-fall-av-coronaviruset-i-uppsala-lan?publisherId=3235664&releaseId=3271641"
  },
  {
    id: 35,
    date: new Date("2020-03-05"),
    age: "medelåldern",
    lan: "Uppsala län",
    contaminatedSource: "Italien",
    source:
      "https://via.tt.se/pressmeddelande/tva-nya-bekraftade-fall-av-coronaviruset-i-uppsala-lan?publisherId=3235664&releaseId=3271641"
  },
  {
    id: 36,
    date: new Date("2020-03-06"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Italien",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/6-mars--tva-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3053911"
  },
  {
    id: 37,
    date: new Date("2020-03-06"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    contaminatedSource: "Iran",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/6-mars--tva-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3053911"
  },
  {
    id: 38,
    persons: 5,
    date: new Date("2020-03-06"),
    lan: "Skåne län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-6-mars-2979574"
  },
  {
    id: 39,
    date: new Date("2020-03-06"),
    lan: "Uppsala län",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 34,
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/femte-bekraftade-fallet-av-coronavirus-i-uppsala-lan?publisherId=3235664&releaseId=3271764"
  },
  {
    id: 40,
    persons: 8,
    date: new Date("2020-03-06"),
    lan: "Värmlands län",
    isHome: true,
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-atta-fall-av-nya-coronaviruset-i-varmland/"
  },
  {
    id: 41,
    date: new Date("2020-03-06"),
    age: "70-årsåldern",
    gender: "kvinna",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/ytterligare-fem-bekraftade-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45988"
  },
  {
    id: 42,
    persons: 2,
    date: new Date("2020-03-06"),
    age: "70-årsåldern",
    gender: "man",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/ytterligare-fem-bekraftade-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45988"
  },
  {
    id: 43,
    date: new Date("2020-03-06"),
    age: "75-årsåldern",
    gender: "kvinna",
    lan: "Jönköpings län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/ytterligare-fem-bekraftade-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45988"
  },
  {
    id: 44,
    date: new Date("2020-03-06"),
    age: "75-årsåldern",
    gender: "man",
    lan: "Jönköpings län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/ytterligare-fem-bekraftade-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45988"
  },
  {
    id: 45,
    persons: 21,
    date: new Date("2020-03-06"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-6-mars/"
  },
  {
    id: 46,
    date: new Date("2020-03-06"),
    lan: "Gävleborgs län",
    contaminatedSource: "Italien",
    hospital: "Infektionsavdelningen",
    source:
      "https://www.regiongavleborg.se/nyheter/ytterligare-ett-fall-av-covid-19-i-gavleborg/"
  },
  {
    id: 47,
    persons: 3,
    date: new Date("2020-03-07"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-7-mars-2979793"
  },
  {
    id: 48,
    persons: 21,
    date: new Date("2020-03-07"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-7-mars/"
  },
  {
    id: 49,
    date: new Date("2020-03-08"),
    lan: "Uppsala län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/sjatte-fall-av-coronavirus-i-uppsala-lan?publisherId=3235664&releaseId=3271800"
  },
  {
    id: 50,
    persons: 5,
    date: new Date("2020-03-08"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-8-mars-2979837"
  },
  {
    id: 51,
    persons: 12,
    date: new Date("2020-03-08"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/8-mars--12-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3054740"
  },
  {
    id: 52,
    date: new Date("2020-03-08"),
    age: "medelåldern",
    lan: "Örebro län",
    contaminatedSource: "USA",
    source:
      "https://via.tt.se/pressmeddelande/tre-personer-fran-orebro-lan-har-testats-positivt-for-coronavirus?publisherId=3235654&releaseId=3271797"
  },
  {
    id: 53,
    date: new Date("2020-03-08"),
    age: "20-årsåldern",
    lan: "Örebro län",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 52,
    source:
      "https://via.tt.se/pressmeddelande/tre-personer-fran-orebro-lan-har-testats-positivt-for-coronavirus?publisherId=3235654&releaseId=3271797"
  },
  {
    id: 54,
    date: new Date("2020-03-08"),
    age: "50-årsåldern",
    lan: "Örebro län",
    contaminatedSource: "Sverige",
    contaminatedByIndex: 52,
    source:
      "https://via.tt.se/pressmeddelande/tre-personer-fran-orebro-lan-har-testats-positivt-for-coronavirus?publisherId=3235654&releaseId=3271797"
  },
  {
    id: 55,
    persons: 7,
    date: new Date("2020-03-08"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/sju-nya-fall-av-coronavirusinfektion-covid-19-i-varmland/"
  },
  {
    id: 56,
    persons: 14,
    date: new Date("2020-03-08"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-8-mars/"
  },
  {
    id: 57,
    date: new Date("2020-03-09"),
    city: "Kungsbacka kommun",
    lan: "Hallands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regionhalland.se/nyheter/ett-bekraftat-fall-i-halland-av-coronavirus/"
  },
  {
    id: 58,
    persons: 2,
    date: new Date("2020-03-09"),
    age: "40-årsåldern",
    gender: "kvinna",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    relatedIndex: 58,
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-ytterligare-tva-bekraftade-fall-i-jonkopings-lan-46021"
  },
  {
    id: 59,
    date: new Date("2020-03-09"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-ett-fall-av-coronavirusinfektion-covid-19-i-varmland/"
  },
  {
    id: 60,
    persons: 4,
    date: new Date("2020-03-09"),
    city: "Göteborg",
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/9-mars--sex-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3055189"
  },
  {
    id: 61,
    persons: 2,
    date: new Date("2020-03-09"),
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/9-mars--sex-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3055189"
  },
  {
    id: 62,
    persons: 32,
    date: new Date("2020-03-09"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-9-mars2/"
  },
  {
    id: 63,
    date: new Date("2020-03-09"),
    lan: "Uppsala län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/tre-nya-fall-av-coronavirus-i-uppsala-lan-bekraftade?publisherId=3235664&releaseId=3271875"
  },
  {
    id: 64,
    date: new Date("2020-03-09"),
    lan: "Uppsala län",
    contaminatedSource: "Italien",
    source:
      "https://via.tt.se/pressmeddelande/tre-nya-fall-av-coronavirus-i-uppsala-lan-bekraftade?publisherId=3235664&releaseId=3271875"
  },
  {
    id: 65,
    persons: 2,
    date: new Date("2020-03-09"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.regionhalland.se/nyheter/ytterligare-fyra-fall-av-coronavirus-har-bekraftats-i-halland/"
  },
  {
    id: 66,
    persons: 2,
    date: new Date("2020-03-09"),
    city: "Varberg",
    lan: "Hallands län",
    relatedIndex: 66,
    isHome: true,
    source:
      "https://www.regionhalland.se/nyheter/ytterligare-fyra-fall-av-coronavirus-har-bekraftats-i-halland/"
  },
  {
    id: 67,
    date: new Date("2020-03-09"),
    gender: "kvinna",
    lan: "Södermanlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/coronafall-i-sormland/"
  },
  {
    id: 68,
    date: new Date("2020-03-09"),
    lan: "Västra Götalands län",
    hospital: "Sahlgrenska Universitetssjukhuset",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/bekraftat-fall-av-covid-19-pa-kungalvs-sjukhus,c3055700"
  },
  {
    id: 69,
    date: new Date("2020-03-09"),
    gender: "kvinna",
    lan: "Norrbottens län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.norrbotten.se/sv/Om-Region-Norrbotten/Press/Pressmeddelanden-2020/Coronavirus-konstaterat-i-Norrbotten/"
  },
  {
    id: 70,
    persons: 5,
    date: new Date("2020-03-09"),
    lan: "Västerbottens län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/bekraeftade-fall-av-coronavirus-i-vaesterbotten-2980287"
  },
  {
    id: 71,
    date: new Date("2020-03-09"),
    lan: "Östergötlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ett-fall-av-coronavirus-bekraftat-i-ostergotland/"
  },
  {
    id: 72,
    persons: 3,
    date: new Date("2020-03-10"),
    lan: "Skåne län",
    isHome: true,
    contaminatedSource: "Italien",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-10-mars-2980402"
  },
  {
    id: 73,
    date: new Date("2020-03-10"),
    city: "Laholm",
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.regionhalland.se/nyheter/totalt-sex-fall-av-bekraftad-covid-19-smitta-i-halland/"
  },
  {
    id: 74,
    date: new Date("2020-03-10"),
    age: "20-årsåldern",
    lan: "Örebro län",
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/person-i-20-arsaldern-fran-orebro-lan-smittad?publisherId=3235654&releaseId=3272110"
  },
  {
    id: 75,
    persons: 60,
    date: new Date("2020-03-10"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-10-mars/"
  },
  {
    id: 76,
    date: new Date("2020-03-10"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-ett-fall-av-coronavirusinfektion-covid-19-i-varmland2/"
  },
  {
    id: 77,
    persons: 15,
    date: new Date("2020-03-10"),
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/10-mars--nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3056443"
  },
  {
    id: 78,
    date: new Date("2020-03-10"),
    lan: "Södermanlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-sormland/"
  },
  {
    id: 79,
    date: new Date("2020-03-10"),
    lan: "Jämtlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/enpersonijamtlandslankonstateratsmittadavcoronaviruset.5.55412b91170402c7d222e632.html"
  },
  {
    id: 80,
    persons: 6,
    date: new Date("2020-03-10"),
    lan: "Västernorrlands län",
    contaminatedSource: "Italien",
    relatedIndex: 80,
    isHome: true,
    source:
      "https://www.rvn.se/sv/Om-regionen/Aktuellt-i-Region-Vasternorrland/Nyheter/tre-personer-i-vasternorrland-smittade-av-coronaviruset/"
  },
  {
    id: 81,
    persons: 3,
    date: new Date("2020-03-10"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 82,
    date: new Date("2020-03-10"),
    gender: "man",
    lan: "Norrbottens län",
    contaminatedSource: "Italien",
    isHome: true,
    relatedIndex: 69,
    source:
      "https://www.norrbotten.se/sv/Om-Region-Norrbotten/Press/Pressmeddelanden-2020/Ytterligare-en-person-sjuk-i-covid-19/"
  },
  {
    id: 83,
    date: new Date("2020-03-10"),
    age: "50-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    contaminatedSource: "Österrike",
    isHome: true,
    source: "https://www.regionkalmar.se/nyhetslista/corona/"
  },
  {
    id: 84,
    date: new Date("2020-03-10"),
    lan: "Kronobergs län",
    isHome: true,
    source:
      "http://www.regionkronoberg.se/nyheter/en-person-i-kronobergs-lan-har-testats-positivt-for-coronavirus/"
  },
  {
    id: 85,
    date: new Date("2020-03-10"),
    age: "20-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/annu-en-smittad-av-nya-coronaviruset/"
  },
  {
    id: 86,
    date: new Date("2020-03-11"),
    age: "20-årsåldern",
    gender: "man",
    lan: "Jönköpings län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-tre-nya-konstaterade-fall--46139"
  },
  {
    id: 87,
    date: new Date("2020-03-11"),
    age: "50-årsåldern",
    gender: "man",
    lan: "Jönköpings län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-tre-nya-konstaterade-fall--46139"
  },
  {
    id: 88,
    date: new Date("2020-03-11"),
    age: "under 20år",
    lan: "Jönköpings län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-tre-nya-konstaterade-fall--46139"
  },
  {
    id: 89,
    date: new Date("2020-03-11"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Dalarnas län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/forsta-fallet-av-det-nya-coronaviruset-i-dalarna/"
  },
  {
    id: 90,
    date: new Date("2020-03-11"),
    gender: "kvinna",
    lan: "Blekinge län",
    isHome: true,
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-11-forsta-fallet-av-bekraftad-coronasmitta-i-blekinge.html"
  },
  {
    id: 91,
    persons: 35,
    date: new Date("2020-03-11"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-11-mars-2980863"
  },
  {
    id: 92,
    persons: 3,
    date: new Date("2020-03-11"),
    lan: "Västerbottens län",
    contaminatedSource: "Italien",
    relatedIndex: 92,
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/ytterligare-tre-personer-har-faatt-coronavirus-2980867"
  },
  {
    id: 93,
    persons: 7,
    date: new Date("2020-03-11"),
    lan: "Kronobergs län",
    isHome: true,
    source:
      "http://www.regionkronoberg.se/nyheter/flera-nya-fall-av-covid-19-i-lanet/"
  },
  {
    id: 94,
    persons: 2,
    date: new Date("2020-03-11"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tva-nya-fall-av-coronavirusinfektion-covid-19/"
  },
  {
    id: 95,
    persons: 26,
    date: new Date("2020-03-11"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-11-mars/"
  },
  {
    id: 96,
    date: new Date("2020-03-11"),
    age: "30-årsåldern",
    lan: "Örebro län",
    contaminatedSource: "Österrike",
    source:
      "https://via.tt.se/pressmeddelande/lagesrapport-om-situationen-kring-coronasmitta-i-region-orebro-lan?publisherId=3235654&releaseId=3272276"
  },
  {
    id: 97,
    date: new Date("2020-03-11"),
    age: "70-årsåldern",
    lan: "Örebro län",
    contaminatedSource: "Österrike",
    source:
      "https://via.tt.se/pressmeddelande/lagesrapport-om-situationen-kring-coronasmitta-i-region-orebro-lan?publisherId=3235654&releaseId=3272276"
  },
  {
    id: 98,
    persons: 37,
    date: new Date("2020-03-11"),
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/11-mars--nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3057243"
  },
  {
    id: 99,
    date: new Date("2020-03-11"),
    lan: "Gävleborgs län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regiongavleborg.se/nyheter/ett-tredje-fall-av-covid-19-i-gavleborg/"
  },
  {
    id: 100,
    persons: 3,
    date: new Date("2020-03-11"),
    lan: "Uppsala län",
    source:
      "https://www.svt.se/nyheter/lokalt/uppsala/nya-coronalaget-omprioriteringar-att-vanta"
  },
  {
    id: 101,
    persons: 5,
    date: new Date("2020-03-11"),
    lan: "Södermanlands län",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland/"
  },
  {
    id: 102,
    persons: 2,
    date: new Date("2020-03-11"),
    lan: "Västmanlands län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://regionvastmanland.se/nyheter-2020/fyra-konstaterade-fall-av-covid-19-i-vastmanland/"
  },
  {
    id: 103,
    date: new Date("2020-03-11"),
    lan: "Västmanlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://regionvastmanland.se/nyheter-2020/fyra-konstaterade-fall-av-covid-19-i-vastmanland/"
  },
  {
    id: 104,
    date: new Date("2020-03-11"),
    lan: "Västmanlands län",
    contaminatedSource: "Schweiz",
    isHome: true,
    source:
      "https://regionvastmanland.se/nyheter-2020/fyra-konstaterade-fall-av-covid-19-i-vastmanland/"
  },
  {
    id: 105,
    date: new Date("2020-03-11"),
    city: "Falkenberg",
    lan: "Hallands län",
    isHome: true,
    source:
      "https://press.regionhalland.se/posts/pressreleases/smittsparning-av-covid-19-pagar-pa-intensivva"
  },
  {
    id: 106,
    persons: 4,
    date: new Date("2020-03-11"),
    lan: "Jämtlands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/jamtland/ytterligare-fyra-coronafall-i-jamtlands-lan"
  },
  {
    id: 107,
    persons: 6,
    date: new Date("2020-03-11"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 108,
    persons: 3,
    date: new Date("2020-03-11"),
    lan: "Norrbottens län", // isHome unknown
    source:
      "https://www.svt.se/nyheter/lokalt/norrbotten/fem-personer-i-norrbotten-har-nu-smittats-med-cornaviruset"
  },
  {
    id: 109,
    date: new Date("2020-03-12"),
    age: "60-årsåldern",
    gender: "kvinna",
    lan: "Dalarnas län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/tre-nya-fall-av-coronavirus-i-dalarna-den-12-mars-2981180"
  },
  {
    id: 110,
    date: new Date("2020-03-12"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Dalarnas län",
    contaminatedSource: "Italien",
    relatedIndex: 109,
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/tre-nya-fall-av-coronavirus-i-dalarna-den-12-mars-2981180"
  },
  {
    id: 111,
    date: new Date("2020-03-12"),
    gender: "kvinna",
    lan: "Dalarnas län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/tre-nya-fall-av-coronavirus-i-dalarna-den-12-mars-2981180"
  },
  {
    id: 112,
    persons: 6,
    date: new Date("2020-03-12"),
    lan: "Hallands län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://press.regionhalland.se/posts/pressreleases/fyra-nya-fall-av-bekraftad-covid-19-hos-medar"
  },
  {
    id: 113,
    date: new Date("2020-03-12"),
    city: "Norrköping",
    lan: "Östergötlands län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ytterligare-sex-coronosmittade-i-lanet/?RSS=newslistpage"
  },
  {
    id: 114,
    persons: 5,
    date: new Date("2020-03-12"),
    city: "Linköping",
    lan: "Östergötlands län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ytterligare-sex-coronosmittade-i-lanet/?RSS=newslistpage"
  },
  {
    id: 115,
    date: new Date("2020-03-12"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/tva-nya-fall-i-lanet-av-covid-19/"
  },
  {
    id: 116,
    date: new Date("2020-03-12"),
    age: "50-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/tva-nya-fall-i-lanet-av-covid-19/"
  },
  {
    id: 117,
    persons: 2,
    date: new Date("2020-03-12"),
    gender: "man",
    lan: "Gotlands län",
    isHome: true,
    source: "https://www.gotland.se/106271"
  },
  {
    id: 118,
    persons: 38,
    date: new Date("2020-03-12"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-12-mars-2981296"
  },
  {
    id: 119,
    persons: 2,
    date: new Date("2020-03-12"),
    lan: "Värmlands län",
    contaminatedSource: "Italien",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tre-nya-fall-av-coronavirusinfektion-covid-19-i-varmland/"
  },
  {
    id: 120,
    date: new Date("2020-03-12"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tre-nya-fall-av-coronavirusinfektion-covid-19-i-varmland/"
  },
  {
    id: 121,
    persons: 2,
    date: new Date("2020-03-12"),
    lan: "Kronobergs län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "http://www.regionkronoberg.se/nyheter/tva-bekraftade-coronafall-i-lanet/"
  },
  {
    id: 122,
    date: new Date("2020-03-12"),
    age: "20-årsåldern",
    lan: "Örebro län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://via.tt.se/pressmeddelande/ett-ytterligare-fall-av-coronasmitta-i-orebro-lan-pa-onsdagen?publisherId=3235654&releaseId=3272401"
  },
  {
    id: 123,
    persons: 5,
    date: new Date("2020-03-12"),
    gender: "man",
    lan: "Blekinge län",
    isHome: true,
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-12-fler-fall-av-coronasmittade-i-blekinge.html"
  },
  {
    id: 124,
    persons: 2,
    date: new Date("2020-03-12"),
    lan: "Gävleborgs län", // isHome unknown
    contaminatedSource: "Italien",
    source:
      "https://www.1177.se/Gavleborg/aktuellt/aktuellt-i-gavleborg/bekraftade-fall-av-covid-19-i-lanet/"
  },
  {
    id: 125,
    persons: 34,
    date: new Date("2020-03-12"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-12-mars/"
  },
  {
    id: 126,
    persons: 31,
    date: new Date("2020-03-12"),
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/12-mars--nytt-om-coronavirusinfektion-covid-19,c3058053"
  },
  {
    id: 127,
    date: new Date("2020-03-12"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-sormland---en-person-vardas-pa-sjukhus/"
  },
  {
    id: 128,
    persons: 3,
    date: new Date("2020-03-12"),
    lan: "Södermanlands län",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-sormland---en-person-vardas-pa-sjukhus/"
  },
  {
    id: 129,
    persons: 14,
    date: new Date("2020-03-12"),
    lan: "Uppsala län",
    source:
      "https://www.svt.se/nyheter/lokalt/uppsala/regionen-haller-presskonferens-om-coronalaget"
  },
  {
    id: 130,
    persons: 13,
    date: new Date("2020-03-12"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 131,
    date: new Date("2020-03-12"),
    lan: "Norrbottens län", // isHome unknown
    source:
      "https://www.svt.se/nyheter/lokalt/norrbotten/just-nu-presskoferens-om-corona-i-norrbotten"
  },
  {
    id: 132,
    date: new Date("2020-03-12"),
    lan: "Västmanlands län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://newsroom.notified.com/region-vastmanland/posts/pressreleases/ett-ytterligare-bekraftat-fall-av-covid-19-i"
  },
  {
    id: 133,
    persons: 9,
    date: new Date("2020-03-12"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 134,
    persons: 2,
    date: new Date("2020-03-12"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Västernorrlands län",
    contaminatedSource: "Italien",
    relatedIndex: 134,
    isHome: true,
    source:
      "https://www.rvn.se/sv/Om-regionen/Aktuellt-i-Region-Vasternorrland/Nyheter/tre-nya-fall-av-covid-19-i-vasternorrland/"
  },
  {
    id: 135,
    date: new Date("2020-03-12"),
    age: "30-årsåldern",
    gender: "man",
    lan: "Västernorrlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.rvn.se/sv/Om-regionen/Aktuellt-i-Region-Vasternorrland/Nyheter/tre-nya-fall-av-covid-19-i-vasternorrland/"
  },
  {
    id: 136,
    persons: 3,
    date: new Date("2020-03-12"),
    lan: "Jämtlands län",
    isHome: true,
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200312coronacovid19.5.236a06661703ffc4fb61f800.html"
  },
  {
    id: 137,
    persons: 4,
    date: new Date("2020-03-12"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/fyra-nya-fall-av-corona-i-lanet/?RSS=newslistpage"
  },
  {
    id: 138,
    date: new Date("2020-03-13"),
    age: "30-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/ett-nytt-fall-i-lanet-av-covid-19/"
  },
  {
    id: 139,
    persons: 33,
    date: new Date("2020-03-13"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-13-mars-2981681"
  },
  {
    id: 140,
    date: new Date("2020-03-13"),
    lan: "Östergötlands län",
    hospital: "Universitetssjukhuset",
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/totalt-17-fall-av-coronasmitta-hittills-i-lanet/"
  },
  {
    id: 141,
    date: new Date("2020-03-13"),
    lan: "Östergötlands län",
    hospital: "Vrinnevisjukhuset",
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/totalt-17-fall-av-coronasmitta-hittills-i-lanet/"
  },
  {
    id: 142,
    persons: 4,
    date: new Date("2020-03-13"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/totalt-17-fall-av-coronasmitta-hittills-i-lanet/"
  },
  {
    id: 143,
    date: new Date("2020-03-13"),
    gender: "man",
    lan: "Blekinge län",
    contaminatedSource: "Österrike",
    isHome: true,
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-13-tva-nya-fall-av-coronasmitta-i-blekinge.html"
  },
  {
    id: 144,
    date: new Date("2020-03-13"),
    gender: "kvinna",
    lan: "Blekinge län",
    isHome: true,
    contaminatedSource: "Österrike",
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-13-tva-nya-fall-av-coronasmitta-i-blekinge.html"
  },
  {
    id: 145,
    date: new Date("2020-03-13"),
    lan: "Västernorrlands län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/vasternorrland/tionde-fallet-av-coronaviruset-bekraftat-i-vasternorrland"
  },
  {
    id: 146,
    date: new Date("2020-03-13"),
    lan: "Västernorrlands län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/vasternorrland/tionde-fallet-av-coronaviruset-bekraftat-i-vasternorrland"
  },
  {
    id: 147,
    persons: 41,
    date: new Date("2020-03-13"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-13-mars/"
  },
  {
    id: 148,
    persons: 2,
    date: new Date("2020-03-13"),
    lan: "Kronobergs län",
    isHome: true,
    source:
      "http://www.regionkronoberg.se/nyheter/ytterligare-tva-fall-av-covid-19-i-lanet/"
  },
  {
    id: 149,
    persons: 6,
    date: new Date("2020-03-13"),
    lan: "Södermanlands län",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland2/"
  },
  {
    id: 150,
    persons: 9,
    date: new Date("2020-03-13"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 151,
    persons: 7,
    date: new Date("2020-03-13"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 152,
    persons: 3,
    date: new Date("2020-03-13"),
    lan: "Värmlands län",
    source:
      "https://www.svt.se/nyheter/lokalt/varmland/coronalaget-i-varmlands-lan"
  },
  {
    id: 153,
    date: new Date("2020-03-13"),
    lan: "Västerbottens län",
    contaminatedSource: "Italien",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/ett-nytt-fall-av-coronasmitta-i-vaesterbotten-2981807"
  },
  {
    id: 154,
    persons: 18,
    date: new Date("2020-03-13"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 155,
    persons: 3,
    date: new Date("2020-03-13"),
    lan: "Jämtlands län",
    isHome: true,
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200313coronacovid19.5.4faf1114170d0bf514f103a.html"
  },
  {
    id: 156,
    persons: 5,
    date: new Date("2020-03-13"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 157,
    persons: 3,
    date: new Date("2020-03-13"),
    lan: "Västmanlands län",
    source:
      "https://newsroom.notified.com/region-vastmanland/posts/pressreleases/tre-nya-bekraftade-fall-av-det-nya-coronaviru"
  },
  {
    id: 158,
    persons: 44,
    date: new Date("2020-03-14"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-14-mars-2981871"
  },
  {
    id: 159,
    persons: 2,
    date: new Date("2020-03-14"),
    lan: "Västerbottens län",
    isHome: true,
    source:
      "https://regionvasterbotten.mynewsdesk.com/pressreleases/ytterligare-tvaa-personer-i-vaesterbotten-har-faatt-coronavirus-2981978"
  },
  {
    id: 160,
    persons: 33,
    date: new Date("2020-03-14"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-14-mars/"
  },
  {
    id: 161,
    date: new Date("2020-03-14"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 162,
    persons: 5,
    date: new Date("2020-03-14"),
    lan: "Jönköpings län",
    hospital: "Infektionskliniken",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 163,
    persons: 11,
    date: new Date("2020-03-14"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 164,
    persons: 21,
    date: new Date("2020-03-14"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 165,
    persons: 4,
    date: new Date("2020-03-14"),
    city: "Norrköping",
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/ost/ytterligare-fem-fall-av-coronasmitta-i-ostergotland"
  },
  {
    id: 166,
    date: new Date("2020-03-14"),
    city: "Linköping",
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/ost/ytterligare-fem-fall-av-coronasmitta-i-ostergotland"
  },
  {
    id: 167,
    persons: 8,
    date: new Date("2020-03-14"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland3/"
  },
  {
    id: 168,
    persons: 3,
    date: new Date("2020-03-14"),
    lan: "Jämtlands län",
    isHome: true,
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200314coronacovid19.5.613e2f39170d0c32a9566.html"
  },
  {
    id: 169,
    persons: 2,
    date: new Date("2020-03-14"),
    lan: "Norrbottens län", // isHome unknown
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 170,
    persons: 6,
    date: new Date("2020-03-14"),
    lan: "Västmanlands län",
    source:
      "https://newsroom.notified.com/region-vastmanland/posts/pressreleases/sex-nya-bekraftade-fall-av-covid-19-i-vastman"
  },
  {
    id: 171,
    persons: 20,
    date: new Date("2020-03-15"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-15-mars-2982008"
  },
  {
    id: 172,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Västerbottens län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/tvaa-nya-fall-av-coronavirus-i-vaesterbotten-2982020"
  },
  {
    id: 173,
    date: new Date("2020-03-15"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 174,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Kalmar län",
    contaminatedSource: "Österrike",
    isHome: false,
    source:
      "https://www.regionkalmar.se/nyhetslista/covid-19-och-laget-i-kalmar-lan/"
  },
  {
    id: 175,
    date: new Date("2020-03-15"),
    lan: "Kronobergs län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 176,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 177,
    persons: 18,
    date: new Date("2020-03-15"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-15-mars/"
  },
  {
    id: 178,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 179,
    persons: 4,
    date: new Date("2020-03-15"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 180,
    persons: 3,
    date: new Date("2020-03-15"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/ost/fem-nya-fall-av-corona-i-ostergotland-totalt-27-fall"
  },
  {
    id: 181,
    date: new Date("2020-03-15"),
    lan: "Östergötlands län",
    hospital: "Universitetssjukhuset",
    source:
      "https://www.svt.se/nyheter/lokalt/ost/fem-nya-fall-av-corona-i-ostergotland-totalt-27-fall"
  },
  {
    id: 182,
    date: new Date("2020-03-15"),
    lan: "Östergötlands län",
    hospital: "Vrinnevisjukhuset",
    source:
      "https://www.svt.se/nyheter/lokalt/ost/fem-nya-fall-av-corona-i-ostergotland-totalt-27-fall"
  },
  {
    id: 183,
    date: new Date("2020-03-15"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland4/"
  },
  {
    id: 184,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Södermanlands län",
    isHome: true,
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland4/"
  },
  {
    id: 185,
    persons: 2,
    date: new Date("2020-03-15"),
    lan: "Jämtlands län", // isHome unknown
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/coronapandeminpaverkarbaderegionensverksamhetochpersonal.5.613e2f39170d0c32a9578.html"
  },
  {
    id: 186,
    persons: 2,
    date: new Date("2020-03-16"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 187,
    date: new Date("2020-03-16"),
    lan: "Hallands län",
    isHome: false,
    source:
      "https://www.svt.se/nyheter/lokalt/halland/senaste-nytt-om-coronaviruset-i-halland"
  },
  {
    id: 188,
    persons: 9,
    date: new Date("2020-03-16"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-16-mars-2982186"
  },
  {
    id: 189,
    persons: 8,
    date: new Date("2020-03-16"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 190,
    persons: 2,
    date: new Date("2020-03-16"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 191,
    persons: 2,
    date: new Date("2020-03-16"),
    age: "50-årsåldern",
    lan: "Blekinge län",
    contaminatedSource: "Sverige",
    isHome: true,
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-16-ytterligare-tva-fall-av-coronasmitta.html"
  },
  {
    id: 192,
    date: new Date("2020-03-16"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 193,
    persons: 5,
    date: new Date("2020-03-16"),
    lan: "Jämtlands län", // isHome unknown
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200316coronacovid19.5.4faf1114170d0bf514f6afb.html"
  },
  {
    id: 194,
    persons: 3,
    date: new Date("2020-03-16"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 195,
    date: new Date("2020-03-16"),
    age: "80-årsåldern",
    lan: "Jönköpings län",
    isIntensiveCare: true,
    hospital: "Länssjukhuset Ryhov",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 196,
    persons: 3,
    date: new Date("2020-03-16"),
    lan: "Kronobergs län",
    isHome: true,
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 197,
    persons: 18,
    date: new Date("2020-03-16"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/16-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 198,
    date: new Date("2020-03-16"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 199,
    date: new Date("2020-03-16"),
    lan: "Västernorrlands län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 200,
    persons: 17,
    date: new Date("2020-03-16"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 201,
    persons: 5,
    date: new Date("2020-03-16"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-smittade-och-en-avliden-i-covid-19/"
  },
  {
    id: 202,
    persons: 2,
    date: new Date("2020-03-16"),
    lan: "Dalarnas län",
    isHome: true,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-16-mars/"
  },
  {
    id: 203,
    persons: 8,
    date: new Date("2020-03-16"),
    lan: "Uppsala län",
    source:
      "https://www.svt.se/nyheter/lokalt/uppsala/coronalaget-i-uppsala-46-smittade-i-lanet"
  },
  {
    id: 204,
    date: new Date("2020-03-17"),
    lan: "Kronobergs län",
    isHome: true,
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 205,
    persons: 2,
    date: new Date("2020-03-17"),
    lan: "Norrbottens län", // isHome unknown
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 206,
    persons: 2,
    date: new Date("2020-03-17"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 207,
    persons: 2,
    date: new Date("2020-03-17"),
    lan: "Skåne län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-17-mars-2982614"
  },
  {
    id: 208,
    date: new Date("2020-03-17"),
    lan: "Skåne län",
    isIntensiveCare: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-17-mars-2982614"
  },
  {
    id: 209,
    persons: 4,
    date: new Date("2020-03-17"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 210,
    persons: 2,
    date: new Date("2020-03-17"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 211,
    date: new Date("2020-03-17"),
    lan: "Östergötlands län",
    hospital: "Vrinnevisjukhuset",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 212,
    persons: 5,
    date: new Date("2020-03-17"),
    lan: "Västerbottens län",
    isHome: true,
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/nya-konstaterade-fall-av-coronasmitta-i-laenet-2982660"
  },
  {
    id: 213,
    date: new Date("2020-03-17"),
    lan: "Blekinge län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 214,
    date: new Date("2020-03-17"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 215,
    date: new Date("2020-03-17"),
    lan: "Jämtlands län", // isHome unknown
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200317coronacovid19.5.4faf1114170d0bf514f835c.html"
  },
  {
    id: 216,
    date: new Date("2020-03-17"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },

  {
    id: 217,
    persons: 33,
    date: new Date("2020-03-17"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 218,
    persons: 3,
    date: new Date("2020-03-17"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 219,
    persons: 2,
    date: new Date("2020-03-17"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 220,
    persons: 3,
    date: new Date("2020-03-17"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 221,
    persons: 10,
    date: new Date("2020-03-17"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 222,
    date: new Date("2020-03-17"),
    lan: "Västernorrlands län",
    isHome: true,
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/Fakta-och-rad/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    id: 223,
    persons: 2,
    date: new Date("2020-03-18"),
    lan: "Gotlands län",
    isHome: true,
    source: "https://gotland.se/106352"
  },
  {
    id: 224,
    persons: 13,
    date: new Date("2020-03-18"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 225,
    persons: 3,
    date: new Date("2020-03-18"),
    lan: "Dalarnas län",
    isHome: true,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-18-mars/"
  },
  {
    id: 226,
    date: new Date("2020-03-18"),
    lan: "Dalarnas län",
    isIntensiveCare: true,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-18-mars/"
  },
  {
    id: 227,
    persons: 4,
    date: new Date("2020-03-18"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 228,
    persons: 3,
    date: new Date("2020-03-18"),
    lan: "Hallands län",
    isHome: true,
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 229,
    date: new Date("2020-03-18"),
    lan: "Hallands län",
    isHome: false,
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 230,
    date: new Date("2020-03-18"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 231,
    persons: 35,
    date: new Date("2020-03-18"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 232,
    persons: 4,
    date: new Date("2020-03-18"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 233,
    persons: 6,
    date: new Date("2020-03-18"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 234,
    date: new Date("2020-03-18"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 235,
    persons: 2,
    date: new Date("2020-03-18"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 236,
    persons: 20,
    date: new Date("2020-03-18"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 237,
    persons: 2,
    date: new Date("2020-03-18"),
    lan: "Jämtlands län", // isHome unknown
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200318coronacovid19.5.613e2f39170d0c32a9536a.html"
  },
  {
    id: 238,
    date: new Date("2020-03-18"),
    age: "75-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/ytterligare-en-person-bekraftad-smittad/"
  },
  {
    id: 239,
    date: new Date("2020-03-18"),
    lan: "Kronobergs län",
    isHome: true,
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 240,
    persons: 4,
    date: new Date("2020-03-18"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 241,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Norrbottens län", // isHome unknown
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 242,
    persons: 31,
    date: new Date("2020-03-19"),
    lan: "Östergötlands län",
    isHome: true,
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 243,
    date: new Date("2020-03-19"),
    lan: "Östergötlands län",
    hospital: "Vrinnevisjukhuset",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 244,
    date: new Date("2020-03-19"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 245,
    date: new Date("2020-03-19"),
    lan: "Västerbottens län",
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/region-vaesterbotten-infoer-besoeksfoerbud-foer-att-minska-smittan-2983413"
  },
  {
    id: 246,
    date: new Date("2020-03-19"),
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/Fakta-och-rad/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    id: 247,
    persons: 6,
    date: new Date("2020-03-19"),
    lan: "Skåne län",
    isHome: false,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-19-mars-2983416"
  },
  {
    id: 248,
    date: new Date("2020-03-19"),
    lan: "Skåne län",
    isIntensiveCare: true,
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-19-mars-2983416"
  },
  {
    id: 249,
    persons: 8,
    date: new Date("2020-03-19"),
    lan: "Västra Götalands län",
    source: "https://www.vgregion.se/covid-19-corona/"
  },
  {
    id: 250,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Gävleborgs län", // isHome unknown
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 251,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Jönköpings län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 252,
    persons: 56,
    date: new Date("2020-03-19"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 253,
    date: new Date("2020-03-19"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 254,
    persons: 15,
    date: new Date("2020-03-19"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 255,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 256,
    persons: 3,
    date: new Date("2020-03-19"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 257,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Dalarnas län",
    isHome: false,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-19-mars/"
  },
  {
    id: 258,
    date: new Date("2020-03-19"),
    lan: "Dalarnas län",
    isHome: true,
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-19-mars/"
  },
  {
    id: 259,
    date: new Date("2020-03-19"),
    age: "75-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    isHome: true,
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 260,
    date: new Date("2020-03-19"),
    lan: "Hallands län",
    isHome: true,
    adjustHospitalCare: -2,
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 261,
    persons: 2,
    date: new Date("2020-03-19"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 262,
    persons: 3,
    date: new Date("2020-03-19"),
    lan: "Jämtlands län", // isHome unknown
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200319coronacovid19.5.4faf1114170d0bf514fcf4c.html"
  },
  {
    id: 263,
    date: new Date("2020-03-19"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 264,
    persons: 8,
    date: new Date("2020-03-20"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 265,
    persons: 4,
    date: new Date("2020-03-20"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-20-mars-2983877"
  },
  {
    id: 266,
    persons: 33,
    date: new Date("2020-03-20"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 267,
    date: new Date("2020-03-20"),
    lan: "Blekinge län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 268,
    date: new Date("2020-03-20"),
    lan: "Gotlands län",
    isHome: true,
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 269,
    persons: 2,
    date: new Date("2020-03-20"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 270,
    persons: 4,
    date: new Date("2020-03-20"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 271,
    persons: 2,
    date: new Date("2020-03-20"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 272,
    persons: 105,
    date: new Date("2020-03-20"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 273,
    persons: 5,
    date: new Date("2020-03-20"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 274,
    persons: 6,
    date: new Date("2020-03-20"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 275,
    persons: 5,
    date: new Date("2020-03-20"),
    lan: "Västerbottens län",
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/maanga-vill-hjaelpa-till-i-vaarden-2984008"
  },
  {
    id: 276,
    date: new Date("2020-03-20"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 277,
    persons: 21,
    date: new Date("2020-03-20"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 278,
    persons: 2,
    date: new Date("2020-03-20"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-20-mars/"
  },
  {
    id: 279,
    persons: 4,
    date: new Date("2020-03-20"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200320coronacovid19.5.613e2f39170d0c32a9566c8.html"
  },
  {
    id: 280,
    persons: 2,
    date: new Date("2020-03-20"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 281,
    persons: 5,
    date: new Date("2020-03-20"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 282,
    date: new Date("2020-03-20"),
    age: "80-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    isHome: true,
    source:
      "https://www.regionkalmar.se/nyhetslista/tionde-bekraftade-fallet-av-covid-19-i-lanet/"
  },
  {
    id: 283,
    persons: 17,
    date: new Date("2020-03-21"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 284,
    date: new Date("2020-03-21"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 285,
    persons: 3,
    date: new Date("2020-03-21"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 286,
    date: new Date("2020-03-21"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 287,
    persons: 3,
    date: new Date("2020-03-21"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 288,
    persons: 3,
    date: new Date("2020-03-21"),
    lan: "Skåne län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 289,
    persons: 55,
    date: new Date("2020-03-21"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 290,
    persons: 4,
    date: new Date("2020-03-21"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 291,
    date: new Date("2020-03-21"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 292,
    date: new Date("2020-03-21"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 293,
    date: new Date("2020-03-21"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 294,
    persons: 14,
    date: new Date("2020-03-21"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 295,
    persons: 6,
    date: new Date("2020-03-21"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 296,
    date: new Date("2020-03-21"),
    age: "80-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/elfte-bekraftade-fallet-av-covid-19-i-lanet/"
  },
  {
    id: 297,
    date: new Date("2020-03-21"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 298,
    persons: 14,
    date: new Date("2020-03-21"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200321coronacovid19.5.613e2f39170d0c32a959379.html"
  },
  {
    id: 299,
    persons: 8,
    date: new Date("2020-03-22"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 300,
    persons: 5,
    date: new Date("2020-03-22"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-22-mars-2984139"
  },
  {
    id: 301,
    persons: 4,
    date: new Date("2020-03-22"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 302,
    persons: 3,
    date: new Date("2020-03-22"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 303,
    persons: 4,
    date: new Date("2020-03-22"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 304,
    persons: 99,
    date: new Date("2020-03-22"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 305,
    persons: 6,
    date: new Date("2020-03-22"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 306,
    persons: 3,
    date: new Date("2020-03-22"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 307,
    persons: 3,
    date: new Date("2020-03-22"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 308,
    persons: 8,
    date: new Date("2020-03-22"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 309,
    persons: 5,
    date: new Date("2020-03-22"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/sv/Om-Region-Norrbotten/Press/Pressmeddelanden-2020/Nu-maste-alla-norrbottningar-hjalpas-at-att-sakta-ner-spridningen/"
  },
  {
    id: 310,
    date: new Date("2020-03-22"),
    age: "50-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/tolfte-bekraftade-fallet-av-covid-19-i-lanet/"
  },
  {
    id: 311,
    date: new Date("2020-03-22"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 312,
    persons: 2,
    date: new Date("2020-03-22"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 313,
    persons: 15,
    date: new Date("2020-03-23"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 314,
    persons: 3,
    date: new Date("2020-03-23"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-23-mars-2984416"
  },
  {
    id: 315,
    persons: 5,
    date: new Date("2020-03-23"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 316,
    persons: 9,
    date: new Date("2020-03-23"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-23-mars/"
  },
  {
    id: 317,
    persons: 11,
    date: new Date("2020-03-23"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200323coronacovid19.5.4faf1114170d0bf514f190d3.html"
  },
  {
    id: 318,
    date: new Date("2020-03-23"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 319,
    persons: 56,
    date: new Date("2020-03-23"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 320,
    persons: 11,
    date: new Date("2020-03-23"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 321,
    persons: 5,
    date: new Date("2020-03-23"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 322,
    date: new Date("2020-03-23"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 323,
    date: new Date("2020-03-23"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 324,
    persons: 4,
    date: new Date("2020-03-23"),
    lan: "Västra Götalands län",
    source: "https://www.vgregion.se/covid-19-corona/"
  },
  {
    id: 325,
    persons: 2,
    date: new Date("2020-03-23"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/avvakta-med-vardbesok-som-inte-ar-akuta/"
  },
  {
    id: 326,
    persons: 4,
    date: new Date("2020-03-24"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 327,
    persons: 2,
    date: new Date("2020-03-24"),
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/Fakta-och-rad/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    id: 328,
    persons: 7,
    date: new Date("2020-03-24"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-24-mars-2984902"
  },
  {
    id: 329,
    persons: 29,
    date: new Date("2020-03-24"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 330,
    date: new Date("2020-03-24"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 331,
    persons: 2,
    date: new Date("2020-03-24"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19"
  },
  {
    id: 333,
    persons: 5,
    date: new Date("2020-03-24"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 334,
    persons: 3,
    date: new Date("2020-03-24"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 335,
    persons: 3,
    date: new Date("2020-03-24"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 336,
    persons: 3,
    date: new Date("2020-03-24"),
    lan: "Norrbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 337,
    persons: 143,
    date: new Date("2020-03-24"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 338,
    persons: 2,
    date: new Date("2020-03-24"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 339,
    persons: 11,
    date: new Date("2020-03-24"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 339,
    persons: 11,
    date: new Date("2020-03-24"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 340,
    persons: 10,
    date: new Date("2020-03-24"),
    lan: "Örebro län",
    source:
      "https://www.regionorebrolan.se/sv/Om-regionorebrolan/Press/Nyheter/Nyheter-2020/Presskonferens-24-mars-Region-Orebro-lan/"
  },
  {
    id: 341,
    date: new Date("2020-03-24"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 342,
    persons: 3,
    date: new Date("2020-03-24"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200324coronacovid19.5.613e2f39170d0c32a95df71.html"
  },
  {
    id: 343,
    date: new Date("2020-03-25"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 344,
    persons: 10,
    date: new Date("2020-03-25"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 345,
    persons: 2,
    date: new Date("2020-03-25"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 346,
    persons: 8,
    date: new Date("2020-03-25"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-25-mars-2985243"
  },
  {
    id: 347,
    persons: 3,
    date: new Date("2020-03-25"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 348,
    persons: 3,
    date: new Date("2020-03-25"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 349,
    persons: 23,
    date: new Date("2020-03-25"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 350,
    persons: 10,
    date: new Date("2020-03-25"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 351,
    persons: 5,
    date: new Date("2020-03-25"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 352,
    persons: 7,
    date: new Date("2020-03-25"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 353,
    persons: 6,
    date: new Date("2020-03-25"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 354,
    persons: 111,
    date: new Date("2020-03-25"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 355,
    persons: 19,
    date: new Date("2020-03-25"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 356,
    persons: 9,
    date: new Date("2020-03-25"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 357,
    persons: 3,
    date: new Date("2020-03-25"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 358,
    persons: 2,
    date: new Date("2020-03-25"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 359,
    persons: 10,
    date: new Date("2020-03-25"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 360,
    date: new Date("2020-03-25"),
    lan: "Örebro län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 361,
    persons: 4,
    date: new Date("2020-03-25"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200325coronacovid19.5.613e2f39170d0c32a95f8e5.html"
  },
  {
    id: 362,
    persons: 3,
    date: new Date("2020-03-26"),
    lan: "Kronobergs län",
    source:
      "http://www.regionkronoberg.se/nyheter/coronapatient-inlagd-pa-infektionskliniken/"
  },
  {
    id: 362,
    persons: 5,
    date: new Date("2020-03-26"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 363,
    persons: 10,
    date: new Date("2020-03-26"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-26-mars-2985741"
  },
  {
    id: 364,
    persons: 8,
    date: new Date("2020-03-26"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 365,
    persons: 20,
    date: new Date("2020-03-26"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 366,
    persons: 3,
    date: new Date("2020-03-26"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    id: 367,
    persons: 4,
    date: new Date("2020-03-26"),
    lan: "Gotlands län",
    source: "https://gotland.se/106487"
  },
  {
    id: 368,
    persons: 14,
    date: new Date("2020-03-26"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-26-mars/"
  },
  {
    id: 369,
    persons: 7,
    date: new Date("2020-03-26"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 370,
    persons: 5,
    date: new Date("2020-03-26"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 371,
    persons: 3,
    date: new Date("2020-03-26"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 372,
    persons: 146,
    date: new Date("2020-03-26"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/26-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 373,
    persons: 29,
    date: new Date("2020-03-26"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 374,
    persons: 15,
    date: new Date("2020-03-26"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 375,
    persons: 6,
    date: new Date("2020-03-26"),
    lan: "Västerbottens län",
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/aktuellt-om-region-vaesterbottens-arbete-med-corona-2985809"
  },
  {
    id: 376,
    persons: 2,
    date: new Date("2020-03-26"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 377,
    persons: 22,
    date: new Date("2020-03-26"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 378,
    persons: 8,
    date: new Date("2020-03-26"),
    lan: "Örebro län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 379,
    persons: 6,
    date: new Date("2020-03-26"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 380,
    persons: 3,
    date: new Date("2020-03-26"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200326coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a95112c5.html"
  },
  {
    id: 381,
    persons: 3,
    date: new Date("2020-03-27"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 382,
    persons: 8,
    date: new Date("2020-03-27"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-27-mars-2986161"
  },
  {
    id: 383,
    persons: 4,
    date: new Date("2020-03-27"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 384,
    persons: 18,
    date: new Date("2020-03-27"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 385,
    persons: 5,
    date: new Date("2020-03-27"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 386,
    persons: 8,
    date: new Date("2020-03-27"),
    lan: "Dalarnas län",
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/laegesrapport-covid-19-i-dalarna-27-mars-2986312"
  },
  {
    id: 387,
    persons: 5,
    date: new Date("2020-03-27"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 388,
    persons: 4,
    date: new Date("2020-03-27"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 389,
    persons: 2,
    date: new Date("2020-03-27"),
    lan: "Jämtlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 390,
    persons: 9,
    date: new Date("2020-03-27"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 391,
    persons: 95,
    date: new Date("2020-03-27"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 392,
    persons: 12,
    date: new Date("2020-03-27"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 393,
    persons: 12,
    date: new Date("2020-03-27"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 394,
    persons: 3,
    date: new Date("2020-03-27"),
    lan: "Västerbottens län",
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/aktuellt-om-region-vaesterbottens-arbete-med-corona-2986267"
  },
  {
    id: 395,
    persons: 4,
    date: new Date("2020-03-27"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 396,
    persons: 20,
    date: new Date("2020-03-27"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 397,
    persons: 2,
    date: new Date("2020-03-27"),
    lan: "Örebro län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 398,
    persons: 10,
    date: new Date("2020-03-28"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-27-mars-2986451"
  },
  {
    id: 399,
    date: new Date("2020-03-28"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 400,
    persons: 8,
    date: new Date("2020-03-28"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 401,
    persons: 5,
    date: new Date("2020-03-28"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 402,
    persons: 14,
    date: new Date("2020-03-28"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 403,
    persons: 2,
    date: new Date("2020-03-28"),
    lan: "Gotlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 404,
    persons: 9,
    date: new Date("2020-03-28"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 405,
    persons: 3,
    date: new Date("2020-03-28"),
    lan: "Jämtlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 406,
    persons: 15,
    date: new Date("2020-03-28"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 407,
    persons: 3,
    date: new Date("2020-03-28"),
    lan: "Kalmar län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 408,
    persons: 227,
    date: new Date("2020-03-28"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 409,
    persons: 33,
    date: new Date("2020-03-28"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 410,
    persons: 20,
    date: new Date("2020-03-28"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 411,
    persons: 13,
    date: new Date("2020-03-28"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 412,
    persons: 7,
    date: new Date("2020-03-28"),
    lan: "Örebro län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 413,
    persons: 21,
    date: new Date("2020-03-28"),
    lan: "Östergötlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 414,
    date: new Date("2020-03-29"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 415,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 416,
    persons: 13,
    date: new Date("2020-03-29"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 417,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-29-mars-2986491"
  },
  {
    id: 418,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Blekinge län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 419,
    persons: 6,
    date: new Date("2020-03-29"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 420,
    persons: 13,
    date: new Date("2020-03-29"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 421,
    persons: 6,
    date: new Date("2020-03-29"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 422,
    persons: 6,
    date: new Date("2020-03-29"),
    lan: "Jämtlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 423,
    persons: 9,
    date: new Date("2020-03-29"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 424,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Kalmar län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 425,
    date: new Date("2020-03-29"),
    lan: "Norrbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 426,
    persons: 119,
    date: new Date("2020-03-29"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 427,
    date: new Date("2020-03-29"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 428,
    persons: 7,
    date: new Date("2020-03-29"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 429,
    persons: 5,
    date: new Date("2020-03-29"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 430,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 431,
    persons: 21,
    date: new Date("2020-03-29"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 432,
    persons: 2,
    date: new Date("2020-03-29"),
    lan: "Örebro län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 433,
    persons: 39,
    date: new Date("2020-03-29"),
    lan: "Östergötlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 434,
    date: new Date("2020-03-30"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 435,
    persons: 4,
    date: new Date("2020-03-30"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 436,
    date: new Date("2020-03-30"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 437,
    persons: 9,
    date: new Date("2020-03-30"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 438,
    persons: 5,
    date: new Date("2020-03-30"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-30-mars-2986673"
  },
  {
    id: 439,
    persons: 5,
    date: new Date("2020-03-30"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 440,
    persons: 4,
    date: new Date("2020-03-30"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    id: 441,
    persons: 63,
    date: new Date("2020-03-30"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 442,
    persons: 9,
    date: new Date("2020-03-30"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 443,
    persons: 6,
    date: new Date("2020-03-30"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 444,
    persons: 149,
    date: new Date("2020-03-30"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 445,
    persons: 43,
    date: new Date("2020-03-30"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 446,
    persons: 6,
    date: new Date("2020-03-30"),
    lan: "Uppsala län",
    source:
      "https://www.svt.se/nyheter/lokalt/uppsala/senaste-nytt-om-coronalaget-i-uppsala-lan"
  },
  {
    id: 447,
    persons: 3,
    date: new Date("2020-03-30"),
    lan: "Västerbottens län",
    source:
      "https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/sammanlagt-50-konstaterade-fall-i-region-vaesterbotten-2986864"
  },
  {
    id: 448,
    persons: 9,
    date: new Date("2020-03-30"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 449,
    persons: 7,
    date: new Date("2020-03-30"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 450,
    persons: 21,
    date: new Date("2020-03-30"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 451,
    persons: 33,
    date: new Date("2020-03-30"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 452,
    persons: 11,
    date: new Date("2020-03-30"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-30-mars/"
  },
  {
    id: 453,
    persons: 7,
    date: new Date("2020-03-30"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200330coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a9517752.html"
  },
  {
    id: 454,
    date: new Date("2020-03-31"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 455,
    persons: 6,
    date: new Date("2020-03-31"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 456,
    date: new Date("2020-03-31"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 457,
    persons: 8,
    date: new Date("2020-03-31"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 458,
    persons: 3,
    date: new Date("2020-03-31"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-31-mars-2987106"
  },
  {
    id: 459,
    persons: 44,
    date: new Date("2020-03-31"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 460,
    persons: 9,
    date: new Date("2020-03-31"),
    lan: "Dalarnas län",
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/laegesrapport-covid-19-i-dalarna-31-mars-2987307"
  },
  {
    id: 461,
    persons: 11,
    date: new Date("2020-03-31"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 462,
    persons: 11,
    date: new Date("2020-03-31"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 463,
    persons: 17,
    date: new Date("2020-03-31"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 464,
    persons: 3,
    date: new Date("2020-03-31"),
    lan: "Kalmar län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 465,
    persons: 173,
    date: new Date("2020-03-31"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 466,
    persons: 36,
    date: new Date("2020-03-31"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 467,
    persons: 21,
    date: new Date("2020-03-31"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 468,
    persons: 5,
    date: new Date("2020-03-31"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 469,
    persons: 10,
    date: new Date("2020-03-31"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 470,
    date: new Date("2020-03-31"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 471,
    persons: 27,
    date: new Date("2020-03-31"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 472,
    persons: 21,
    date: new Date("2020-03-31"),
    lan: "Örebro län",
    source:
      "https://www.regionorebrolan.se/sv/Om-regionorebrolan/Press/Lagesrapport-corona-31-mars-kl-1500/"
  },
  {
    id: 473,
    persons: 2,
    date: new Date("2020-03-31"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200331coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a95192e8.html"
  },
  {
    id: 474,
    persons: 4,
    date: new Date("2020-04-01"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 475,
    persons: 5,
    date: new Date("2020-04-01"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 476,
    persons: 6,
    date: new Date("2020-04-01"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 477,
    persons: 9,
    date: new Date("2020-04-01"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 478,
    persons: 8,
    date: new Date("2020-04-01"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 479,
    persons: 5,
    date: new Date("2020-04-01"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    id: 480,
    persons: 46,
    date: new Date("2020-04-01"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 481,
    persons: 7,
    date: new Date("2020-04-01"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-1-april-2987687"
  },
  {
    id: 482,
    persons: 15,
    date: new Date("2020-04-01"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    id: 483,
    persons: 23,
    date: new Date("2020-04-01"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-1-april/"
  },
  {
    id: 484,
    persons: 16,
    date: new Date("2020-04-01"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 485,
    persons: 245,
    date: new Date("2020-04-01"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 486,
    persons: 37,
    date: new Date("2020-04-01"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 487,
    persons: 11,
    date: new Date("2020-04-01"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 488,
    persons: 8,
    date: new Date("2020-04-01"),
    lan: "Västerbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 489,
    persons: 9,
    date: new Date("2020-04-01"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 490,
    persons: 28,
    date: new Date("2020-04-01"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 491,
    date: new Date("2020-04-01"),
    lan: "Gotlands län",
    source: "https://gotland.se/106586"
  },
  {
    id: 492,
    date: new Date("2020-04-01"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 493,
    persons: 30,
    date: new Date("2020-04-02"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    id: 494,
    date: new Date("2020-04-02"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 495,
    persons: 5,
    date: new Date("2020-04-02"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 496,
    persons: 2,
    date: new Date("2020-04-02"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    id: 497,
    persons: 21,
    date: new Date("2020-04-02"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 498,
    persons: 16,
    date: new Date("2020-04-02"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 499,
    date: new Date("2020-04-02"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    id: 500,
    persons: 81,
    date: new Date("2020-04-02"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 501,
    persons: 8,
    date: new Date("2020-04-02"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-2-april-2987986"
  },
  {
    id: 502,
    persons: 9,
    date: new Date("2020-04-02"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 503,
    persons: 4,
    date: new Date("2020-04-02"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 504,
    persons: 13,
    date: new Date("2020-04-02"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 505,
    persons: 5,
    date: new Date("2020-04-02"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    id: 506,
    persons: 215,
    date: new Date("2020-04-02"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 507,
    persons: 59,
    date: new Date("2020-04-02"),
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 508,
    persons: 37,
    date: new Date("2020-04-02"),
    lan: "Uppsala län",
    source:
      "https://www.svt.se/nyheter/lokalt/uppsala/senaste-nytt-om-coronalaget-i-lanet"
  },
  {
    id: 509,
    persons: 7,
    date: new Date("2020-04-02"),
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    id: 510,
    persons: 2,
    date: new Date("2020-04-02"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 511,
    persons: 30,
    date: new Date("2020-04-02"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 512,
    persons: 9,
    date: new Date("2020-04-02"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-2-april/"
  },
  {
    id: 513,
    persons: 4,
    date: new Date("2020-04-02"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200402coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a951f600.html"
  },
  {
    id: 514,
    persons: 8,
    date: new Date("2020-04-03"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 515,
    persons: 16,
    date: new Date("2020-04-03"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    id: 516,
    persons: 17,
    date: new Date("2020-04-03"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    id: 517,
    persons: 7,
    date: new Date("2020-04-03"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    id: 518,
    persons: 52,
    date: new Date("2020-04-03"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 519,
    persons: 3,
    date: new Date("2020-04-03"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    id: 520,
    persons: 12,
    date: new Date("2020-04-03"),
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    id: 521,
    persons: 8,
    date: new Date("2020-04-03"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-3-april-2988613"
  },
  {
    id: 522,
    persons: 4,
    date: new Date("2020-04-03"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/kontakta-oss/kontakta-sjukvarden/coronaviruset/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 7,
    lan: "Dalarnas län",
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/laegesrapport-covid-19-i-dalarna-3-april-2988747"
  },
  {
    date: new Date("2020-04-03"),
    persons: 10,
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 32,
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 4,
    lan: "Skåne län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 63,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 223,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 16,
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 25,
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 52,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Gotlands län",
    source: "https://gotland.se/106615"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200403coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a9520ed3.html"
  },
  {
    persons: 3,
    date: new Date("2020-04-04"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    persons: 30,
    date: new Date("2020-04-04"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    persons: 3,
    date: new Date("2020-04-04"),
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    persons: 23,
    date: new Date("2020-04-04"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    persons: 42,
    date: new Date("2020-04-04"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    date: new Date("2020-04-04"),
    lan: "Gotlands län",
    source: "https://gotland.se/106624"
  },
  {
    persons: 21,
    date: new Date("2020-04-04"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-4-april-2988849"
  },
  {
    date: new Date("2020-04-04"),
    persons: 13,
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 8,
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 12,
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 14,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 187,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 27,
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 18,
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    date: new Date("2020-04-04"),
    persons: 28,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    persons: 2,
    date: new Date("2020-04-05"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    persons: 17,
    date: new Date("2020-04-05"),
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    persons: 20,
    date: new Date("2020-04-05"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    persons: 4,
    date: new Date("2020-04-05"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200405coronacovid19regionjamtlandharjedalen.5.613e2f39170d0c32a9523d66.html"
  },
  {
    persons: 11,
    date: new Date("2020-04-05"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-5-april-2988878"
  },
  {
    persons: 98,
    date: new Date("2020-04-05"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    date: new Date("2020-04-05"),
    lan: "Blekinge län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 14,
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 24,
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 2,
    lan: "Kalmar län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 2,
    lan: "Norrbottens län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 12,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 167,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 19,
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 7,
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 24,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 6,
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 5,
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 2,
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 9,
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 9,
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 9,
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    date: new Date("2020-04-06"),
    persons: 9,
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 13,
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 24,
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 5,
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    date: new Date("2020-04-06"),
    persons: 6,
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-6-april-2988961"
  },
  {
    date: new Date("2020-04-06"),
    persons: 21,
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-6-april/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 10,
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 6,
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/tva-nya-dodsfall-i-covid-19-i-lanet/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 28,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 127,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 15,
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Värmlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 6,
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 44,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Gotlands län",
    source: "https://gotland.se/106633"
  },
  {
    persons: 2,
    date: new Date("2020-04-06"),
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200406coronacovid19regionjamtlandharjedalen.5.4faf1114170d0bf514f327ae.html"
  },
  {
    persons: 7,
    date: new Date("2020-04-07"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Värmlands län",
    source:
      "https://regionvarmland.se/halsa-och-vard/coronavirus---covid-19/aktuellt-lage-i-varmland--covid-19/"
  },
  {
    persons: 28,
    date: new Date("2020-04-07"),
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  },
  {
    persons: 43,
    date: new Date("2020-04-07"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/halsa-och-vard/for-vardgivare/smittskyddsenheten/information-om-coronaviruset.html"
  },
  {
    persons: 5,
    date: new Date("2020-04-07"),
    lan: "Västerbottens län",
    source:
      "https://www.regionvasterbotten.se/coronavirus/aktuellt-vardlage-i-region-vasterbotten-covid-19"
  },
  {
    persons: 53,
    date: new Date("2020-04-07"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    persons: 6,
    date: new Date("2020-04-07"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-7-april-2989427"
  },
  {
    persons: 12,
    date: new Date("2020-04-07"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    persons: 12,
    date: new Date("2020-04-07"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-07"),
    persons: 17,
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 8,
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 5,
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 21,
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 2,
    lan: "Kalmar län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 11,
    lan: "Skåne län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 26,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 136,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 24,
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 9,
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 1,
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 69,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 5,
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-07"),
    persons: 8,
    lan: "Jämtlands län",
    source:
      "https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200407coronacovid19regionjamtlandharjedalen.5.4faf1114170d0bf514f34165.html"
  },
  {
    date: new Date("2020-04-08"),
    persons: 10,
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    date: new Date("2020-04-08"),
    persons: 19,
    lan: "Örebro län",
    source: "https://www.regionorebrolan.se/"
  }
];

export default cases;
