import "./css/ScoreInput.css";
import { useRef, useState } from "react";

const ScoreInput = ({ onCreate }) => {
  // input 폼 변수들 가져오기
  const [name, setName] = useState("");
  const [math, setMath] = useState("");
  const [eng, setEng] = useState("");
  const [sci, setSci] = useState("");

  // 숫자로 변환한 뒤 소수점 2자리까지만
  let avg = ((Number(math) + Number(eng) + Number(sci)) / 3).toFixed(2);

  const inputName = useRef();

  // input 폼에 입력된 값 가져오기
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMath = (e) => {
    setMath(e.target.value);
  };
  const onChangeEng = (e) => {
    setEng(e.target.value);
  };
  const onChangeSci = (e) => {
    setSci(e.target.value);
  };

  // 추가 버튼 눌렀을 때 실행 될 함수
  const onSubmit = () => {
    if (!name || !math || !eng || !sci || name.trim() === "") {
      alert("양식을 모두 채워주세요.");
      inputName.current.focus();
      return;
    }
    if (!(math >= 0 && math <= 100) || !(eng >= 0 && eng <= 100) || !(sci >= 0 && sci <= 100)) {
      alert("점수는 0~100점 사이여야 합니다.");
      inputName.current.focus();
      return;
    }
    onCreate(name, math, eng, sci, avg);
    setName("");
    setMath("");
    setEng("");
    setSci("");
    inputName.current.focus();
  };

  // 키보드 enter 키로 submit 하기
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <>
      <div className="ScoreInput">
        <input
          type="text"
          ref={inputName}
          value={name}
          onChange={onChangeName}
          onKeyDown={onKeyDown}
          placeholder="이름"
        />
        <input type="number" value={math} onChange={onChangeMath} onKeyDown={onKeyDown} placeholder="수학" />
        <input type="number" value={eng} onChange={onChangeEng} onKeyDown={onKeyDown} placeholder="영어" />
        <input type="number" value={sci} onChange={onChangeSci} onKeyDown={onKeyDown} placeholder="과학" />
        <button onClick={onSubmit}>추가</button>
      </div>
    </>
  );
};

export default ScoreInput;
