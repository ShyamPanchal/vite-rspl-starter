import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      Something <br /> <button onClick={() => navigate("/other")}>Next</button>
    </>
  );
}

export default HomePage;
