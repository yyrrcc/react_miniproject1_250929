import "./css/ScoreList.css";

const ScoreItem = ({ scores, onDelete }) => {
  return (
    <>
      {scores.map((it) => [
        <tr key={it.id}>
          <td>{it.name}</td>
          <td>{it.math}</td>
          <td>{it.eng}</td>
          <td>{it.sci}</td>
          <td>{it.avg}</td>
          <td>
            <button onClick={() => onDelete(it.id)}>삭제</button>
          </td>
        </tr>,
      ])}
    </>
  );
};

export default ScoreItem;
