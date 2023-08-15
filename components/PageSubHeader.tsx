interface Props {
  title: string;
}

const PageSubHeader = ({ title }: Props) => {
  return (
    <section className='p-8 border-b'>
      <h1 className='text-2xl lg:text-3xl font-bold'>{title}</h1>
    </section>
  );
};

export default PageSubHeader;