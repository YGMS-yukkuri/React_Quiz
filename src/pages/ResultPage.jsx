import { Link, useLocation } from "react-router-dom"
import Result from "../components/Result/Result"
import { ROUTES } from "../const"

export default function ResultPage() {
  const local = useLocation();
  const maxQuizLen = local.state.maxQuizLen;
  const correctNumLen = local.state.correctNumLen;

  return (
    <>
        <h1>Result</h1>
        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
        <br/>
        <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
    </>
  )
}
