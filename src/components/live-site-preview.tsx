type Props = {
  url: string;
  title: string;
};

export function LiveSitePreview({ url, title }: Props) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0f19]">
      <iframe
        src={url}
        title={`${title} live preview`}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
      />
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
