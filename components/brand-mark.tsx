// Two overlapping squares in the site's navy and blue, with the overlap left
// white. app/icon.svg is the same mark with favicon padding.
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 3" className={className} aria-hidden="true">
      <rect width="2" height="2" fill="#172333" />
      <rect x="1" y="1" width="2" height="2" fill="#2457ce" />
      <rect x="1" y="1" width="1" height="1" fill="#fff" />
    </svg>
  );
}
