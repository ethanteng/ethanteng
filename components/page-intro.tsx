export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
