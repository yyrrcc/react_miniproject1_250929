import "./css/ScoreList.css";

const ScoreItem = ({ score, onDelete }) => {
  return (
    <>
      <tr>
        <td>{score.name}</td>
        <td>{score.math}</td>
        <td>{score.eng}</td>
        <td>{score.sci}</td>
        <td>{score.avg}</td>
        <td>
          <button onClick={() => onDelete(score.id)}>삭제</button>
        </td>
      </tr>
      {/* {scores.map((it) => (
        <tr key={it.id}>
          <td>{it.name}</td>
          <td>{it.math}</td>
          <td>{it.eng}</td>
          <td>{it.sci}</td>
          <td>{it.avg}</td>
          <td>
            <button onClick={() => onDelete(it.id)}>삭제</button>
          </td>
        </tr>
      ))} */}
    </>
  );
};

export default ScoreItem;
