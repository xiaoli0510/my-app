export default function Home1Layout({
  children,
  five,
}: {
  children: React.ReactNode;
  five: React.ReactNode;
}) {
  return (
    <div>
        {children}
        {five}
    </div>
  );
}
