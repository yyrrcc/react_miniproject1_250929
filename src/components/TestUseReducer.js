import { useReducer } from "react";

// 1. useReducer 함수 새로 만들어서 컴포넌트 밖에 만들어주기 (상태 변화 함수)
// reducer(현재 State의 값, 함수 dispatch를 호출하면서 인수로 전달한 action 객체)
function reducer(state, action) {
  // action.type과 action.data 이용
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      state = action.data;
      return state;
    default:
      return state;
  }
}

const TestUseReducer = () => {
  // 1. const [state 변수, 상태 변화 촉발 함수] = useReducer(상태 변화 함수, 초깃값)
  const [count, dispatch] = useReducer(reducer, 0);

  // const [count, setCount] = useState(0);

  // // 0. 상태 변화 코드 -> 컴포넌트 외부로 분리하는 게 좋음 (useReducer 사용하면 됨!)
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <h3>테스트 컴포넌트</h3>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        {/* <button onClick={onIncrease}>증가(+)</button> */}

        {/* data : 상태 변화에 필요한 값 */}
        {/* dispatch 촉발함수가 reducer 상태 변화 함수를 호출하게 된다 */}
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>증가(+)</button>
        <button onClick={() => dispatch({ type: "INIT", data: 0 })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>감소(-)</button>
      </div>
    </>
  );
};

export default TestUseReducer;
