import { Län } from "./cases";
import formattedDayDate from "../utils/formattedDayDate";

export interface BaseData {
  persons?: number;
  date: Date;
  lan: Län;
  age?: string;
}

interface IConstructor<T> {
  new (...args: any[]): T;
}

interface IBase {
  totalCount: number;
}

abstract class BaseQuery<T extends IBase> {
  constructor(
    public data: BaseData[] = [],
    private parentInstance: IConstructor<T>
  ) {}

  private _totalCount: number | undefined;
  public get totalCount(): number {
    return (
      this._totalCount ??
      (this._totalCount = this.data.reduce((prev, curr) => {
        return prev + (curr.persons ?? 1);
      }, 0))
    );
  }

  private _earliestDate: Date | undefined;
  public get earliestDate(): Date {
    return (
      this._earliestDate ??
      (this._earliestDate = this.data.reduce(
        (prev, curr) => {
          return curr.date.getTime() <= prev.date.getTime() ? curr : prev;
        },
        { date: new Date() }
      ).date)
    );
  }

  private _mostRecentDate: Date | undefined;
  public get mostRecentDate(): Date {
    return (
      this._mostRecentDate ??
      (this._mostRecentDate = this.data.reduce(
        (prev, curr) => {
          return curr.date.getTime() >= prev.date.getTime() ? curr : prev;
        },
        { date: new Date(0) }
      ).date)
    );
  }

  private _age: { [key in string]: T } | undefined;
  public get age(): { [key in string]: T } {
    if (this._age) {
      return this._age;
    }

    const newData: { [key in string]?: BaseData[] } = { okänd: [] };
    this.data.forEach((c: BaseData) => {
      if (typeof c.age !== "undefined") {
        if (typeof newData[c.age] !== "undefined") {
          newData[c.age]!.push(c);
        } else {
          newData[c.age] = [c];
        }
      } else {
        newData["okänd"]!.push(c);
      }
    });

    return (this._age = Object.fromEntries(
      Object.entries(newData).map(([key, value]) => [
        key,
        new this.parentInstance(value)
      ])
    ) as { [key in string]: T });
  }

  private _filterByDay: { [key in number]?: T } = {};
  filterByDay = (time: number): T => {
    return (
      this._filterByDay[time] ??
      (this._filterByDay[time] = new this.parentInstance(
        this.data.filter(c => c.date.getTime() === time)
      ))
    );
  };

  private _listDays: number[] | undefined;
  public get listDays(): number[] {
    if (this._listDays) {
      return this._listDays;
    }
    const days: number[] = [];
    for (
      let date = new Date(this.earliestDate);
      date.getTime() <= this.mostRecentDate.getTime();
      date.setDate(date.getDate() + 1)
    ) {
      // Fix summer/winter time issue
      const time = new Date(formattedDayDate(date)).getTime();
      days.push(time);
    }

    return (this._listDays = days);
  }

  public get days(): { [key in number]?: T } {
    return this.listDays.reduce((prev, curr: number) => {
      prev[curr] = this.filterByDay(curr);
      return prev;
    }, {} as { [key in number]: T });
  }

  private _countPerDay: { date: Date; count: number }[] | undefined;
  public get countPerDay(): { date: Date; count: number }[] {
    return (
      this._countPerDay ??
      (this._countPerDay = Object.entries(this.days).map(
        ([time, filteredCasesQuery]) => ({
          date: new Date(parseInt(time)),
          count: filteredCasesQuery!.totalCount
        })
      ))
    );
  }

  private _filterByLan: { [key in Län]?: T } = {};
  filterByLan = (lan: Län): T => {
    return (
      this._filterByLan[lan] ??
      (this._filterByLan[lan] = new this.parentInstance(
        this.data.filter(c => c.lan === lan)
      ))
    );
  };

  public get listLan(): Län[] {
    return [
      "Blekinge län",
      "Dalarnas län",
      "Gotlands län",
      "Gävleborgs län",
      "Hallands län",
      "Jämtlands län",
      "Jönköpings län",
      "Kalmar län",
      "Kronobergs län",
      "Norrbottens län",
      "Skåne län",
      "Stockholms län",
      "Södermanlands län",
      "Uppsala län",
      "Värmlands län",
      "Västerbottens län",
      "Västernorrlands län",
      "Västmanlands län",
      "Västra Götalands län",
      "Örebro län",
      "Östergötlands län"
    ];
  }

  public get lan(): { [key in Län]: T } {
    return this.listLan.reduce((prev, curr: Län) => {
      prev[curr] = this.filterByLan(curr);
      return prev;
    }, {} as { [key in Län]: T });
  }

  private _countPerLan: { lan: Län; count: number }[] | undefined;
  public get countPerLan(): { lan: Län; count: number }[] {
    return (
      this._countPerLan ??
      (this._countPerLan = (Object.entries(this.lan) as [Län, T][]).map(
        ([lan, filteredQuery]) => ({
          lan,
          count: filteredQuery.totalCount
        })
      ))
    );
  }
}

export default BaseQuery;
