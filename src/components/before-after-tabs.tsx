"use client";

import { useId, useMemo, useState } from "react";
import { ImageCarousel } from "@/components/image-carousel";

type Props = {
  projectTitle: string;
  beforeImages: string[];
  afterImages: string[];
};

export function BeforeAfterTabs({
  projectTitle,
  beforeImages,
  afterImages,
}: Props) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  const tabsId = useId();
  const tabs = useMemo(
    () => [
      { key: "before" as const, label: "Before", images: beforeImages },
      { key: "after" as const, label: "After", images: afterImages },
    ],
    [beforeImages, afterImages],
  );

  const activeImages = tabs.find((tab) => tab.key === activeTab)?.images ?? [];

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label={`${projectTitle} before and after views`}
        className="inline-flex rounded-full border border-[var(--border)] bg-white/80 p-1"
      >
        {tabs.map((tab) => {
          const selected = activeTab === tab.key;
          const tabId = `${tabsId}-${tab.key}-tab`;
          const panelId = `${tabsId}-${tab.key}-panel`;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.key)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                selected
                  ? "bg-[var(--foreground)] text-white shadow-[0_8px_20px_rgba(11,15,25,0.18)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tabsId}-${activeTab}-panel`}
        aria-labelledby={`${tabsId}-${activeTab}-tab`}
        className="transition-opacity duration-300"
      >
        <ImageCarousel
          images={activeImages.map((src, index) => ({
            src,
            alt: `${projectTitle} ${activeTab} screenshot ${index + 1}`,
          }))}
          aspectClassName="aspect-[16/10]"
          sizes="(max-width: 768px) 100vw, 55vw"
          priority
        />
      </div>
    </div>
  );
}
