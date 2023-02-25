import { useNavigate } from "react-router-dom";

function OtherPage() {
  const navigate = useNavigate();
  return (
    <>
      Something Other
      <br /> <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default OtherPage;
