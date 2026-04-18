export const earningsData = [
  {
    id: 1,
    platform: "Uber",
    date: "2026-04-10",
    hours: 8,
    gross: 5200,
    deductions: 900,
    net: 4300,
    status: "Verified"
  },
  {
    id: 2,
    platform: "Foodpanda",
    date: "2026-04-11",
    hours: 7,
    gross: 4300,
    deductions: 700,
    net: 3600,
    status: "Pending"
  },
  {
    id: 3,
    platform: "Careem",
    date: "2026-04-12",
    hours: 6,
    gross: 3500,
    deductions: 650,
    net: 2850,
    status: "Flagged"
  }
];

export const grievances = [
  {
    id: 1,
    platform: "Foodpanda",
    category: "Low Rates",
    description: "Commission increased without clear explanation.",
    status: "Escalated"
  },
  {
    id: 2,
    platform: "Uber",
    category: "Account Issue",
    description: "Account was temporarily deactivated with no reason.",
    status: "Open"
  },
  {
    id: 3,
    platform: "Careem",
    category: "Delayed Payments",
    description: "Weekly payout was delayed for several days.",
    status: "Resolved"
  }
];

export const advocateStats = {
  avgCommission: "18%",
  cityMedian: "PKR 3,900",
  volatility: "22%",
  vulnerableWorkers: 14
};

export const weeklyTrend = [
  { week: "Week 1", value: 9300 },
  { week: "Week 2", value: 10100 },
  { week: "Week 3", value: 8700 },
  { week: "Week 4", value: 11250 }
];