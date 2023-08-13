interface Props {
  params: {
    id: string;
  };
}

const KeyboardDetailsPage = ({ params }: Props) => {
  return (
    <div>{params.id}</div>
  );
};

export default KeyboardDetailsPage;