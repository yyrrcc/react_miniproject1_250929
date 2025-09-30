import "./css/ScoreList.css";
import ScoreItem from "./ScoreItem";

const ScoreList = ({ scores, onDelete }) => {
  return (
    <>
      <div className="ScoreList">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>수학</th>
              <th>영어</th>
              <th>과학</th>
              <th>평균</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {/* <ScoreItem scores={scores} onDelete={onDelete} /> */}
            {/* ScoreItem에 단일 객체만 넘겨주는 것이 더 좋음 (List는 "목록 관리", Item은 "한 행 표현") */}
            {scores.map((score) => (
              <ScoreItem key={score.id} score={score} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScoreList;
