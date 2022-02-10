import { date as dateUtils } from "@codler/utils";

const rxf = require("read-excel-file/node");
const readXlsxFile = async (...args) => {
  try {
    return await rxf(...args);
  } catch (e) {
    console.log("Error reading excel file", args[0], e);
    process.exit(1);
  }
};
const fs = require("fs");
const request = require("request");

function fixDateMonthLocale(text) {
  return text
    .replace(/maj/i, "may")
    .replace(/oktober/i, "october")
    .replace(/okt/i, "oct");
}

request(
  "https://www.arcgis.com/sharing/rest/content/items/b5e7488e117749c19881cce45db13f7e/data",
  { encoding: "binary" },
  function (error, response, body) {
    fs.writeFile(
      "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_latest.xlsx",
      body,
      "binary",
      async function (err) {
        let sheets = await readXlsxFile(
          "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_latest.xlsx",
          { getSheets: true }
        );

        const date = new Date(sheets[9].name);

        if (isNaN(date.getTime())) {
          console.log(new Error("Folkhalsomyndigheten_Covid19 Invalid date"));
          process.exit(1);
        }

        if (date.getTime() < Date.now() - 4 * 24 * 60 * 60 * 1000) {
          console.log(new Error("Folkhalsomyndigheten_Covid19 Outdated date"));
          process.exit(1);
        }

        const dateText = dateUtils.format(date);

        fs.writeFile(
          "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_" +
            dateText +
            ".xlsx",
          body,
          "binary",
          () => true
        );
      }
    );
  }
);

request(
  "https://fohm.maps.arcgis.com/sharing/rest/content/items/fc749115877443d29c2a49ea9eca77e9/data",
  { encoding: "binary" },
  function (error, response, body) {
    fs.writeFile(
      "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_Vaccine_latest.xlsx",
      body,
      "binary",
      async function (err) {
        let sheets = await readXlsxFile(
          "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_Vaccine_latest.xlsx",
          { getSheets: true }
        );

        const date = new Date(fixDateMonthLocale(sheets[9].name));

        if (isNaN(date.getTime())) {
          console.log(
            new Error("Folkhalsomyndigheten_Covid19_Vaccine Invalid date")
          );
          process.exit(1);
        }

        if (date.getTime() < Date.now() - 9 * 24 * 60 * 60 * 1000) {
          console.log(
            new Error("Folkhalsomyndigheten_Covid19_Vaccine Outdated date")
          );
          process.exit(1);
        }

        if (date.getTime() > Date.now()) {
          console.log(
            new Error(
              "Folkhalsomyndigheten_Covid19_Vaccine Invalid future date"
            )
          );
          process.exit(1);
        }

        const dateText = dateUtils.format(date);

        fs.writeFile(
          "./folkhalsomyndigheten/Folkhalsomyndigheten_Covid19_Vaccine_" +
            dateText +
            ".xlsx",
          body,
          "binary",
          () => true
        );
      }
    );
  }
);

request(
  "https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/dokument-webb/statistik/statistik-covid19-avlidna.xlsx",
  { encoding: "binary" },
  function (error, response, body) {
    fs.writeFile(
      "./socialstyrelsen/statistik-covid19-avlidna_latest.xlsx",
      body,
      "binary",
      async function (err) {
        let rows = await readXlsxFile(
          "./socialstyrelsen/statistik-covid19-avlidna_latest.xlsx",
          { sheet: 10 }
        );

        const date = new Date(
          fixDateMonthLocale(
            rows[1][0].replace(
              "Avlidna i covid-19 enligt dödsorsaksintyg inkomna fram till den",
              ""
            )
          )
        );

        if (isNaN(date.getTime())) {
          console.log(new Error("statistik-covid19-avlidna Invalid date"));
          process.exit(1);
        }

        if (date.getTime() < Date.now() - 13 * 24 * 60 * 60 * 1000) {
          console.log(new Error("statistik-covid19-avlidna Outdated date"));
          process.exit(1);
        }

        const dateText = dateUtils.format(date);

        fs.writeFile(
          "./socialstyrelsen/statistik-covid19-avlidna_" + dateText + ".xlsx",
          body,
          "binary",
          () => true
        );
      }
    );
  }
);

/* 
request(
  "https://www.socialstyrelsen.se/globalassets/1-globalt/covid-19-statistik/vard-och-covid-19/statistik-covid19-inskrivna.xlsx",
  { encoding: "binary" },
  function (error, response, body) {
    fs.writeFile(
      "./socialstyrelsen/statistik-covid19-inskrivna_latest.xlsx",
      body,
      "binary",
      async function (err) {
        let rows = await readXlsxFile(
          "./socialstyrelsen/statistik-covid19-inskrivna_latest.xlsx",
          { sheet: 1 }
        );

        const date = new Date(
          fixDateMonthLocale(
            rows[5][0].match(/Socialstyrelsen vid den ([^.]*)\./)[1]
          )
        );

        if (isNaN(date.getTime())) {
          console.log(new Error("statistik-covid19-inskrivna Invalid date"));
          process.exit(1);
        }

        const dateText = formattedDayDate(date);

        fs.writeFile(
          "./socialstyrelsen/statistik-covid19-inskrivna_" + dateText + ".xlsx",
          body,
          "binary",
          () => true
        );
      }
    );
  }
);
*/
