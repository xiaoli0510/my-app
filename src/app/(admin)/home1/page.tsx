export default function Home({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div>
      <div>admin home</div>
      {left}
      <div>11111</div>
      {children}
      {right}
    </div>
  );
}
