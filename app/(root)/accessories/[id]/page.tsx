interface Props {
  params: {
    id: string;
  };
}

const AccessorieDetailPage = ({ params }: Props) => {
  return (
    <div>{params.id}</div>
  );
};

export default AccessorieDetailPage;