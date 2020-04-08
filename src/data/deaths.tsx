import { Kön, Län } from "./cases";

export interface Death {
  id?: number;
  persons?: number;
  date: Date;
  gender?: Kön;
  age?: string;
  lan: Län;
  source?: string;
}

const deaths: Death[] = [
  {
    id: 0,
    date: new Date("2020-03-11"),
    age: "70-årsåldern",
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/en-person-smittad-med-det-nya-coronaviruset-har-avlidit/"
  },
  {
    id: 1,
    date: new Date("2020-03-14"),
    age: "85-årsåldern",
    gender: "kvinna",
    lan: "Västra Götalands län",
    source:
      "https://news.cision.com/se/vastra-gotalandsregionen/r/bekraftat-dodsfall-av-covid-19-i-vastra-gotaland,c3059573"
  },
  {
    id: 2,
    date: new Date("2020-03-15"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/aldre-patient-med-covid-19-har-avlidit/"
  },
  {
    id: 3,
    persons: 3,
    date: new Date("2020-03-16"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/tre-patienter-med-covid-19-har-avlidit/"
  },
  {
    id: 4,
    date: new Date("2020-03-16"),
    gender: "kvinna",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-smittade-och-en-avliden-i-covid-19/"
  },
  {
    id: 5,
    date: new Date("2020-03-17"),
    gender: "man",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/halsa-vard/information-om-coronaviruset-covid-19/"
  },
  {
    id: 6,
    date: new Date("2020-03-18"),
    gender: "man",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/halsa-vard/information-om-coronaviruset-covid-19/"
  },
  {
    id: 7,
    date: new Date("2020-03-18"),
    age: "80-årsåldern",
    gender: "kvinna",
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/en-aeldre-kvinna-har-avlidit-av-covid-19-i-skaane-2983292"
  },
  {
    id: 8,
    date: new Date("2020-03-19"),
    gender: "man",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-193/"
  },
  {
    id: 9,
    date: new Date("2020-03-20"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 10,
    date: new Date("2020-03-20"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-region-sormland-203/"
  },
  {
    id: 11,
    persons: 2,
    date: new Date("2020-03-20"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/20-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 12,
    persons: 2,
    date: new Date("2020-03-21"),
    lan: "Uppsala län",
    source:
      "https://www.alvkarleby.se/kommun-och-politik/press--och-informationsmaterial/nyhetsarkiv/nyhetsarkiv/2020-03-19-konstaterad-coronasmitta-pa-tallmon.html"
  },
  {
    id: 13,
    persons: 2,
    date: new Date("2020-03-22"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/22-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 14,
    date: new Date("2020-03-22"),
    age: "80-årsåldern",
    gender: "man",
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-22-mars-2984139"
  },
  {
    id: 15,
    date: new Date("2020-03-22"),
    age: "80-årsåldern",
    gender: "kvinna",
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ytterligare-tva-personer-med-corona-avlidna-i-ostergotland/"
  },
  {
    id: 16,
    date: new Date("2020-03-22"),
    age: "90-årsåldern",
    gender: "kvinna",
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ytterligare-tva-personer-med-corona-avlidna-i-ostergotland/"
  },
  {
    id: 17,
    date: new Date("2020-03-23"),
    lan: "Uppsala län",
    source:
      "https://via.tt.se/pressmeddelande/bekraftat-dodsfall-av-covid-19-i-region-uppsala?publisherId=3235664&releaseId=3273168"
  },
  {
    id: 18,
    date: new Date("2020-03-23"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Dalarnas län",
    source:
      "https://www.svt.se/nyheter/lokalt/dalarna/forsta-coronadodsfallet-i-dalarna"
  },
  {
    id: 19,
    persons: 6,
    date: new Date("2020-03-23"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/23-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 20,
    persons: 2,
    date: new Date("2020-03-23"),
    gender: "kvinna",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-region-sormland-233/"
  },
  {
    id: 21,
    date: new Date("2020-03-24"),
    lan: "Värmlands län",
    source:
      "https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/aldre-patient-med-coronavirusinfektion-covid-19-har-avlidit/"
  },
  {
    id: 22,
    date: new Date("2020-03-24"),
    age: "60-årsåldern",
    gender: "man",
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 23,
    date: new Date("2020-03-24"),
    age: "70-årsåldern",
    gender: "man",
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 24,
    persons: 4,
    date: new Date("2020-03-24"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/24-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 25,
    date: new Date("2020-03-25"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 26,
    date: new Date("2020-03-25"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-person-med-coronavirus-avliden-i-jonkopings-lan-47048"
  },
  {
    id: 27,
    persons: 2,
    date: new Date("2020-03-25"),
    gender: "kvinna",
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-region-sormland-253/"
  },
  {
    id: 28,
    date: new Date("2020-03-25"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/nyheter/forsta-dodsfallet-i-gavleborg-med-bekraftad-covid-19/"
  },
  {
    id: 29,
    persons: 18,
    date: new Date("2020-03-25"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fler-avlidna-i-covid-19--fortsatt-kamp-mot-smittspridning/"
  },
  {
    id: 30,
    date: new Date("2020-03-26"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-13-personer-i-jonkopings-lan-vardas-pa-sjukhus-47082"
  },
  {
    id: 31,
    date: new Date("2020-03-26"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-26-mars-2985741"
  },
  {
    id: 32,
    date: new Date("2020-03-26"),
    lan: "Blekinge län",
    source:
      "https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-26-forsta-dodsfallet-i-coronavirus-i-blekinge---nya-fall-tyder-pa-samhallsspridning.html"
  },
  {
    id: 33,
    persons: 6,
    date: new Date("2020-03-26"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/26-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 34,
    date: new Date("2020-03-26"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-26-mars/"
  },
  {
    id: 35,
    date: new Date("2020-03-26"),
    age: "75-årsåldern",
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/nyheter/tva-avlidna-i-covid-19-i-halland-och-mer-omfattande-smittspridning/"
  },
  {
    id: 36,
    date: new Date("2020-03-26"),
    age: "95-årsåldern",
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/nyheter/tva-avlidna-i-covid-19-i-halland-och-mer-omfattande-smittspridning/"
  },
  {
    id: 37,
    persons: 3,
    date: new Date("2020-03-26"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-den-263-2020/"
  },
  {
    id: 38,
    date: new Date("2020-03-27"),
    age: "85-årsåldern",
    gender: "man",
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/forsta-dodsfallet-i-covid-19-i-kalmar-lan/"
  },
  {
    id: 39,
    date: new Date("2020-03-27"),
    lan: "Skåne län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 39,
    persons: 17,
    date: new Date("2020-03-27"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 40,
    persons: 3,
    date: new Date("2020-03-27"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 41,
    persons: 2,
    date: new Date("2020-03-27"),
    lan: "Dalarnas län",
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/laegesrapport-covid-19-i-dalarna-27-mars-2986312"
  },
  {
    id: 42,
    date: new Date("2020-03-27"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 43,
    persons: 2,
    date: new Date("2020-03-27"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-273-2020/"
  },
  {
    id: 44,
    date: new Date("2020-03-27"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-ytterligare-en-person-har-avlidit-och-20-personer-i-jonkopings-lan-vardas-pa-sjukhus--47189"
  },
  {
    id: 45,
    persons: 2,
    date: new Date("2020-03-28"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-27-mars-2986451"
  },
  {
    id: 46,
    persons: 3,
    date: new Date("2020-03-28"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 47,
    persons: 2,
    date: new Date("2020-03-28"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-283-2020/"
  },
  {
    id: 48,
    date: new Date("2020-03-29"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-29-mars-2986491"
  },
  {
    id: 49,
    date: new Date("2020-03-29"),
    age: "70-årsåldern",
    gender: "man",
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 50,
    persons: 3,
    date: new Date("2020-03-29"),
    age: "30-årsåldern",
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-ytterligare-tre-personer-har-avlidit--47208"
  },
  {
    id: 51,
    persons: 5,
    date: new Date("2020-03-29"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 52,
    date: new Date("2020-03-29"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-293-2020/"
  },
  {
    id: 53,
    date: new Date("2020-03-30"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 54,
    persons: 3,
    date: new Date("2020-03-30"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 55,
    persons: 5,
    date: new Date("2020-03-30"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 56,
    persons: 2,
    date: new Date("2020-03-30"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-ytterligare-en-person-har-avlidit-och-22-personer-i-jonkopings-lan-vardas-pa-sjukhus--47264"
  },
  {
    id: 57,
    persons: 4,
    date: new Date("2020-03-30"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 58,
    persons: 21,
    date: new Date("2020-03-30"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/30-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 59,
    persons: 2,
    date: new Date("2020-03-30"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 60,
    date: new Date("2020-03-30"),
    lan: "Gävleborgs län",
    source:
      "http://lg.cloudapp.net/Player.aspx?SessionFactID=2596&MeetingID=2638&SessionName=Presskonferens+30+mars+2020&CatID=83&Search=&Embedded=0&dtmEntry=&intFullMeeting=1"
  },
  {
    id: 61,
    date: new Date("2020-03-30"),
    lan: "Örebro län",
    source:
      "https://via.tt.se/pressmeddelande/en-person-fran-lanet-har-avlidit-efter-att-ha-smittats-av-coronaviruset?publisherId=3235654&releaseId=3274054"
  },
  {
    id: 62,
    persons: 2,
    date: new Date("2020-03-30"),
    lan: "Uppsala län",
    source:
      "https://via.tt.se/pressmeddelande/covid--19-laget-i-region-uppsala-30-mars?publisherId=3235664&releaseId=3274035"
  },
  {
    id: 63,
    date: new Date("2020-03-31"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 64,
    date: new Date("2020-03-31"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-31-mars-2987106"
  },
  {
    id: 65,
    persons: 2,
    date: new Date("2020-03-31"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 66,
    date: new Date("2020-03-31"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 67,
    date: new Date("2020-03-31"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 68,
    date: new Date("2020-03-31"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-27-personer-i-jonkopings-lan-vardas-pa-sjukhus--47352"
  },
  {
    id: 69,
    persons: 15,
    date: new Date("2020-03-31"),
    lan: "Stockholms län",
    source:
      "https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/31-mars-lagesrapport-om-arbetet-med-det-nya-coronaviruset/"
  },
  {
    id: 70,
    persons: 6,
    date: new Date("2020-03-31"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-region-sormland-313/"
  },
  {
    id: 71,
    date: new Date("2020-03-31"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 72,
    persons: 2,
    date: new Date("2020-03-31"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 73,
    date: new Date("2020-03-31"),
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Om-regionen/Pressrum/Pressmeddelanden/patient-med-covid-19-har-avlidit/"
  },
  {
    id: 74,
    date: new Date("2020-03-31"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    id: 75,
    date: new Date("2020-04-01"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    id: 76,
    date: new Date("2020-04-01"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    id: 77,
    persons: 3,
    date: new Date("2020-04-01"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 78,
    date: new Date("2020-04-01"),
    lan: "Örebro län",
    source:
      "https://via.tt.se/pressmeddelande/andra-dodsfallet-i-covid-19-i-orebro-lan---avled-pa-uso?publisherId=3235654&releaseId=3274311"
  },
  {
    id: 79,
    date: new Date("2020-04-01"),
    lan: "Gävleborgs län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 80,
    persons: 2,
    date: new Date("2020-04-01"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-29-personer-i-jonkopings-lan-vardas-pa-sjukhus--47401"
  },
  {
    id: 81,
    persons: 45,
    date: new Date("2020-04-01"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 82,
    persons: 3,
    date: new Date("2020-04-01"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-14-2020/"
  },
  {
    id: 83,
    date: new Date("2020-04-01"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 84,
    date: new Date("2020-04-01"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-1-april/"
  },
  {
    id: 85,
    persons: 2,
    date: new Date("2020-04-01"),
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/ytterligare-tva-dodsfall-i-covid-19/"
  },
  {
    id: 86,
    persons: 2,
    date: new Date("2020-04-02"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 87,
    persons: 2,
    date: new Date("2020-04-02"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-2-april-2987986"
  },
  {
    id: 88,
    persons: 3,
    date: new Date("2020-04-02"),
    lan: "Dalarnas län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 89,
    date: new Date("2020-04-02"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 90,
    persons: 30,
    date: new Date("2020-04-02"),
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 91,
    persons: 4,
    date: new Date("2020-04-02"),
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-24-2020/"
  },
  {
    id: 92,
    date: new Date("2020-04-02"),
    lan: "Västernorrlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 93,
    persons: 3,
    date: new Date("2020-04-02"),
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    id: 94,
    date: new Date("2020-04-02"),
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-2-april/"
  },
  {
    id: 95,
    date: new Date("2020-04-02"),
    lan: "Hallands län",
    source:
      "https://www.regionhalland.se/om-region-halland/smittskydd/information-om-det-nya-coronaviruset/"
  },
  {
    id: 96,
    date: new Date("2020-04-02"),
    lan: "Uppsala län",
    source:
      "https://via.tt.se/pressmeddelande/covid--19-laget-i-region-uppsala-2-april?publisherId=3235664&releaseId=3274622"
  },
  {
    id: 97,
    date: new Date("2020-04-03"),
    lan: "Gävleborgs län",
    source:
      "https://www.regiongavleborg.se/a-o/Smittskydd/A-Y/c/Coronavirus-2019-nCoV/statistik-covid-19/"
  },
  {
    id: 98,
    date: new Date("2020-04-03"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid-19-36-personer-i-jonkopings-lan-vardas-pa-sjukhus-47606"
  },
  {
    id: 99,
    date: new Date("2020-04-03"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    id: 100,
    persons: 2,
    date: new Date("2020-04-03"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-3-april-2988613"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Jönköpings län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 10,
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-34-2020/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 25,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    lan: "Västmanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 5,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-03"),
    persons: 2,
    lan: "Dalarnas län",
    source:
      "https://www.mynewsdesk.com/se/regiondalarna/pressreleases/laegesrapport-covid-19-i-dalarna-3-april-2988747"
  },
  {
    date: new Date("2020-04-04"),
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    persons: 2,
    date: new Date("2020-04-04"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-4-april-2988849"
  },
  {
    date: new Date("2020-04-04"),
    persons: 5,
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 21,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-04"),
    persons: 4,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 2, // or 1?
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid--19-48-personer-i-jonkopings-lan-vardas-pa-sjukhus--47691"
  },
  {
    date: new Date("2020-04-05"),
    persons: 2,
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 26,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/"
  },
  {
    date: new Date("2020-04-05"),
    persons: 6,
    lan: "Södermanlands län",
    source:
      "https://sverigesradio.se/sida/artikel.aspx?programid=87&artikel=7446396"
  },
  {
    date: new Date("2020-04-06"),
    persons: 4,
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 3,
    lan: "Östergötlands län",
    source:
      "https://www.regionostergotland.se/Halsa-och-vard/aktuellt-om-coronaviruset/"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid--19-51-personer-i-jonkopings-lan-vardas-pa-sjukhus--47740"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-6-april-2988961"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Kronobergs län",
    source: "http://www.regionkronoberg.se/halsa-vard-tandvard/coronavirus/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 6,
    lan: "Dalarnas län",
    source:
      "https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/lagesrapport-covid-19-i-dalarna-6-april/"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 52,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    persons: 3,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-06"),
    lan: "Västerbottens län",
    source:
      "https://regionvasterbotten.mynewsdesk.com/pressreleases/foersta-doedsfallet-till-foeljd-av-covid-19-i-vaesterbotten-2989136"
  },
  {
    date: new Date("2020-04-06"),
    persons: 2,
    lan: "Kalmar län",
    source:
      "https://www.regionkalmar.se/nyhetslista/tva-nya-dodsfall-i-covid-19-i-lanet/"
  },
  {
    date: new Date("2020-04-06"),
    persons: 3,
    lan: "Södermanlands län",
    source:
      "https://regionsormland.se/nyheter/nyhetslista-2019/uppdatering-covid-19-patienter-i-region-sormland-64-2020/"
  },
  {
    date: new Date("2020-04-07"),
    persons: 2,
    lan: "Västmanlands län",
    source:
      "https://regionvastmanland.se/uppdateringar-fran-region-vastmanland-om-covid-19/covid-19-laget-i-lanet/"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Jönköpings län",
    source:
      "https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/uppdatering-om-covid--19-49-personer-i-jonkopings-lan-vardas-pa-sjukhus--47822"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Skåne län",
    source:
      "https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-7-april-2989427"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Norrbottens län",
    source:
      "https://www.norrbotten.se/Halsa-och-sjukvard/Smittskydd-i-Norrbotten/Information-om-nya-coronaviruset/"
  },
  {
    date: new Date("2020-04-07"),
    persons: 2,
    lan: "Hallands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 10, // eller 2??
    lan: "Södermanlands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 78,
    lan: "Stockholms län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    lan: "Uppsala län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 5,
    lan: "Västra Götalands län",
    source:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/bekraftade-fall-i-sverige"
  },
  {
    date: new Date("2020-04-07"),
    persons: 4,
    lan: "Västernorrlands län",
    source:
      "https://www.rvn.se/sv/Vard-o-halsa/coronavirus---for-dig-som-vill-veta-mer/"
  },
  {
    date: new Date("2020-04-07"),
    persons: 7,
    lan: "Örebro län",
    source:
      "https://www.regionorebrolan.se/sv/Om-regionorebrolan/Press/Lagesrapport-corona-tisdag-7-april/"
  }
];

export default deaths;
