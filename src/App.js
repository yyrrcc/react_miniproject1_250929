import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreInput from "./components/ScoreInput";
import ScoreList from "./components/ScoreList";

const mockDate = [
  { id: 1, name: "홍길동", math: 80, eng: 40, sci: 70, avg: 63.33 },
  { id: 0, name: "김민지", math: 90, eng: 80, sci: 90, avg: 86.67 },
];

function App() {
  const idRef = useRef(2); // 기본키 id값
  const [scores, setScores] = useState(mockDate);

  // 성적추가함수
  const onCreate = (name, math, eng, sci, avg) => {
    // input 폼에서 받아온 새 객체 (변수 이름과 프로퍼티 이름이 같다면 math : math 생략가능)
    const newScore = {
      id: idRef.current,
      name,
      math,
      eng,
      sci,
      avg,
    };
    setScores([newScore, ...scores]);
    idRef.current += 1;
  };

  // 성적삭제함수 (삭제 할 아이템의 아이디 값을 제외한 나머지를 필터해서 배열로 가져오기..)
  const onDelete = (targetId) => {
    setScores(scores.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <ScoreInput onCreate={onCreate} />
      <ScoreList scores={scores} onDelete={onDelete} />
    </div>
  );
}

export default App;
