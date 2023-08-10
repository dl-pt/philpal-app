export const combineClassNames = (...names: (string | undefined)[]): string =>
  names.reduce<string>(
    (accumulator, next) => (next === undefined ? accumulator : accumulator === "" ? next : `${accumulator} ${next}`),
    ""
  );
