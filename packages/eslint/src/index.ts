import { Linter } from "eslint"

import {
  json
} from "./configs"

export function trpl(): Linter.FlatConfig[] {
  return [
    ...json()
  ]
}
