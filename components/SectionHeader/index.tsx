import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
  badge?: string;
}

export function SectionHeader({ title, icon, badge }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-6 rounded-lg bg-card border border-card-border shadow-sm">
      <div className="flex items-center gap-2 flex-1">
        <div className="section-accent-line self-stretch shrink-0" />

        {icon && <span className="text-accent shrink-0">{icon}</span>}

        <h2 className="font-semibold text-foreground text-[16px] leading-tight">
          {title}
        </h2>
      </div>

      {badge && (
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-(--accent-subtle) text-accent">
          {badge}
        </span>
      )}
    </div>
  );
}
