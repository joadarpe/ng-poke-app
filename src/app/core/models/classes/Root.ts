import { NamedAPIResource } from "./NamedAPIResource";

export class Root {
    count: number
    next: any
    previous: any
    results: NamedAPIResource[]
}