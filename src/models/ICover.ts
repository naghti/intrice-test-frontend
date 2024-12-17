enum NameCovers {
  orange,
  blue,
  green
}

type ColorCovers = {
  "blue": "bg-gradient-to-r from-indigo-400 to-cyan-400",
  "orange": "bg-gradient-to-r from-red-500 to-orange-500"
}

export type Covers<T> = typeof NameCovers[]