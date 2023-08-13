interface Props {
  params: {
    id: string;
  };
}

const KeycapDetailPage = ({ params }: Props) => {
  return (
    <div>{params.id}</div>
  );
};

export default KeycapDetailPage;