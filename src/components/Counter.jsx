import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../redux/features/counter/counterSlice.jsx";

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch()

    return (
        <div className="flex gap-10 w-fit mx-auto py-14">
            <button onClick={() => dispatch(increment())}>Increase</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    );
};

export default Counter;