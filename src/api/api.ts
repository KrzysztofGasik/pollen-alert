import TreesData from "./data/trees.json";
import MonthsData from "./data/months.json";

export interface IMonth {
  index: number;
  monthName: string;
  monthNameForRoute: string;
  trees: string[];
}

export interface ITree {
  id: number;
  name: string;
  type?: string;
  info?: string;
  image?: string;
}

export const getMonths = () => {
  return MonthsData;
};

export const getMonthId = async (monthId: string | undefined) => {
  const getTreeData = MonthsData.filter(
    (el: IMonth) => el.monthNameForRoute === monthId
  );
  const { monthName, trees } = getTreeData[0];
  const treeData = TreesData.filter((el) => trees.includes(el.name));
  return { monthName, treeData };
};

export const getDetails = (pollenId: string | undefined) => {
  return TreesData.filter(
      (el) => pollenId?.toLowerCase() === el.name.toLowerCase()
  );
};
