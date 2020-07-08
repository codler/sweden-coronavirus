const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");
const request = require("request");
const formattedDayDate = require("./src/utils/formattedDayDate.tsx").default;

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

        const date = new Date(sheets[8].name);

        if (isNaN(date.getTime())) {
          console.log(new Error("Invalid date"));
          process.exit(1);
        }

        const dateText = formattedDayDate(date);

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
  "https://www.socialstyrelsen.se/globalassets/1-globalt/covid-19-statistik/statistik-over-antal-avlidna-i-covid-19/statistik-covid19-avlidna.xlsx",
  { encoding: "binary" },
  function (error, response, body) {
    fs.writeFile(
      "./socialstyrelsen/statistik-covid19-avlidna_latest.xlsx",
      body,
      "binary",
      async function (err) {
        let rows = await readXlsxFile(
          "./socialstyrelsen/statistik-covid19-avlidna_latest.xlsx",
          { sheet: 9 }
        );

        const date = new Date(
          rows[1][0].replace(
            "Avlidna i covid-19 enligt dödsorsaksintyg inkomna till den",
            ""
          )
        );

        if (isNaN(date.getTime())) {
          console.log(new Error("Invalid date"));
          process.exit(1);
        }

        const dateText = formattedDayDate(date);

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
