import { Link, useLocation } from "react-router-dom"

export default function ResultPage() {
  const local = useLocation();
  const maxQuizLen = local.state.maxQuizLen;
  const correctNumLen = local.state.correctNumLen;

  return (
    <>
        <h1>Result</h1>
        <p>あなたの正解数は...</p>
        <p>{`全${maxQuizLen}問中${correctNumLen}問正解でした!!!`}</p>
        <br/>
        <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
    </>
  )
}
