import "fetch-register";
import * as fs from "fs";
import formattedDayDate from "./src/utils/formattedDayDate";
import BaseQuery, { IBase } from "./src/data/baseQuery";
import casesQuery from "./src/data/casesQuery";
import deathsQuery from "./src/data/deathsQuery";

function exportCsv(query: BaseQuery<IBase>, filename: string) {
  const header = ["Date", "Total", ...query.listLan];
  const csvData: any[][] = [header];

  for (let day of query.listDays) {
    const dayData = [
      formattedDayDate(new Date(day)),
      query.filterByDay(day).totalCount
    ];

    for (let lan of query.listLan) {
      dayData.push(query.filterByLan(lan).filterByDay(day).totalCount);
    }

    csvData.push(dayData);
  }

  fs.writeFileSync(filename, csvData.join("\n"));
}

exportCsv(casesQuery, "./covid19_sweden_new_cases.csv");
exportCsv(deathsQuery, "./covid19_sweden_new_deaths.csv");
