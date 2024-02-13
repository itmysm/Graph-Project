export type ChartFilter = {
  key: "topUsers" | "lowest" | "custom";
  value: string[];
};

export type ChartRules = {
  minItems: number;
  maxItems: number;
};
