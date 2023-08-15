export default function SubpageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='max-w-[1312px] m-auto px-8'>
      {children}
    </div>
  );
}