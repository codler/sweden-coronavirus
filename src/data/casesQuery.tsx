import cases, { Case, Kön } from "./cases";
import formattedDayDate from "../utils/formattedDayDate";
import { CountryCollection, ContaminatedSource } from "./contaminatedSource";
import BaseQuery from "./baseQuery";

export class CasesQuery extends BaseQuery<CasesQuery> {
  constructor(public data: Case[] = []) {
    super(data, CasesQuery);
  }

  public get filterLan(): CasesQuery {
    return new CasesQuery(this.data.filter(c => this.lan[c.lan].totalCount));
  }

  private _filterMostRecentDate: CasesQuery | undefined;
  public get filterMostRecentDate(): CasesQuery {
    return (
      this._filterMostRecentDate ??
      (this._filterMostRecentDate = new CasesQuery(
        this.data.filter(
          c => c.date.getTime() === this.mostRecentDate.getTime()
        )
      ))
    );
  }

  private _mostRecentDateCount: number | undefined;
  public get mostRecentDateCount(): number {
    return (
      this._mostRecentDateCount ??
      (this._mostRecentDateCount = this.filterMostRecentDate.totalCount)
    );
  }

  toContaminatedSource = (): ContaminatedSource => {
    let entriesContaminatesSource: [
      string,
      CountryCollection
    ][] = Object.entries(this.days).map(([time, filteredCasesQuery]) => {
      return [
        formattedDayDate(new Date(parseInt(time))),
        Object.fromEntries(
          Object.entries(filteredCasesQuery!.contaminatedSource).map(
            ([key, filteredCasesQuery]) => {
              return [key, filteredCasesQuery!.totalCount];
            }
          )
        )
      ];
    });

    entriesContaminatesSource = entriesContaminatesSource.reduce<
      [string, CountryCollection][]
    >((prev, curr: any) => {
      if (prev.length) {
        Object.entries(prev[prev.length - 1][1]).forEach(([country, count]) => {
          curr[1][country] = (curr[1][country] ?? 0) + count;
        });
      }
      prev.push(curr);
      return prev;
    }, []);

    return Object.fromEntries(entriesContaminatesSource);
  };

  private _contaminatedSource: { [key in string]: CasesQuery } | undefined;
  public get contaminatedSource(): { [key in string]: CasesQuery } {
    if (this._contaminatedSource) {
      return this._contaminatedSource;
    }

    const newData: { [key in string]?: Case[] } = {};
    this.data.forEach((c: Case) => {
      if (typeof c.contaminatedSource !== "undefined") {
        if (typeof newData[c.contaminatedSource] !== "undefined") {
          newData[c.contaminatedSource]!.push(c);
        } else {
          newData[c.contaminatedSource] = [c];
        }
      }
    });

    return (this._contaminatedSource = Object.fromEntries(
      Object.entries(newData).map(([key, value]) => [
        key,
        new CasesQuery(value)
      ])
    ) as { [key in string]: CasesQuery });
  }

  private _gender: { [key in Kön]: CasesQuery } | undefined;
  public get gender(): { [key in Kön]: CasesQuery } {
    if (this._gender) {
      return this._gender;
    }

    const newData: { [key in Kön]: Case[] } = {
      kvinna: [],
      man: [],
      okänd: []
    };
    this.data.forEach((c: Case) => {
      newData[c.gender ?? "okänd"].push(c);
    });

    return (this._gender = Object.fromEntries(
      Object.entries(newData).map(([key, value]) => [
        key,
        new CasesQuery(value)
      ])
    ) as { [key in Kön]: CasesQuery });
  }

  private _quarantine: { [key in string]: CasesQuery } | undefined;
  public get quarantine(): { [key in string]: CasesQuery } {
    if (this._quarantine) {
      return this._quarantine;
    }

    const newData: { [key in string]: Case[] } = {
      yes: [],
      no: [],
      okänd: []
    };
    this.data.forEach((c: Case) => {
      if (c.isHome === true) {
        newData["yes"].push(c);
      } else if (c.isHome === false || c.hospital) {
        newData["no"].push(c);
      } else {
        newData["okänd"].push(c);
      }
    });

    return (this._quarantine = Object.fromEntries(
      Object.entries(newData).map(([key, value]) => [
        key,
        new CasesQuery(value)
      ])
    ) as { [key in string]: CasesQuery });
  }
}

export default new CasesQuery(cases);
