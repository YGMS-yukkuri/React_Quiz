import { Link, useLocation } from "react-router-dom"
import Result from "../components/Result/Result"
import { ROUTES } from "../const"
import Confetti from "react-confetti";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const local = useLocation();
  const maxQuizLen = local.state.maxQuizLen;
  const correctNumLen = local.state.correctNumLen;

  useEffect(() => {
    setTimeout(() => setActive(true), 3000);
  }, []);
  return (
    <>
      <Loading active={active} />
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
      <Confetti />
    </>
  )
}
