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
