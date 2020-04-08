import deaths, { Death } from "./deaths";
import BaseQuery from "./baseQuery";

export class DeathsQuery extends BaseQuery<DeathsQuery> {
  constructor(public data: Death[] = []) {
    super(data, DeathsQuery);
  }
}

export default new DeathsQuery(deaths);
