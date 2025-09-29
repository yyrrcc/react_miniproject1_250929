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
            <ScoreItem scores={scores} onDelete={onDelete} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScoreList;
