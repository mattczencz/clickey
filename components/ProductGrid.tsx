const ProductGrid = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 lg:py-16'>
      {children}
    </section>
  );
};

export default ProductGrid;