interface Props {
  params: {
    id: string;
  };
}

const SwitchDetailPage = ({ params }: Props) => {
  return (
    <div>{params.id}</div>
  );
};

export default SwitchDetailPage;