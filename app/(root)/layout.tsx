export default function SubpageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='max-w-7xl m-auto'>
      {children}
    </div>
  );
}