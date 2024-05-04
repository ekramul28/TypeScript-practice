let anything: any;
anything = "man";
anything as string;

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `this is the value ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result1 = kgToGm(1000) as number;

console.log(result1);
