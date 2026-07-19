"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[130px] animate-pulse bg-btn/50 rounded-md" />
    ),
  }
);


const customTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const customLabels = {
  months: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  totalCount: "{{count}} contribuições no último ano",
  legend: {
    less: "Menos",
    more: "Mais",
  },
};

export default function GithubCalendarComponent() {
  return (
    <div className="flex flex-col items-start rounded-lg bg-card border border-card-border p-5 shadow-sm w-full">
      <h3 className="text-sm font-semibold text-foreground mb-4">
        Contribuições do GitHub
      </h3>
      <div className="w-full overflow-x-auto no-scrollbar py-1 flex justify-start md:justify-center">
        <div className="min-w-[600px] md:min-w-0 flex justify-start md:justify-center w-full">
          <GitHubCalendar
            username="fabricio-dev-front"
            theme={customTheme}
            labels={customLabels}
            blockSize={12}
            blockMargin={3}
            fontSize={11}
          />
        </div>
      </div>
    </div>
  );
}
