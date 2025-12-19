import { useEffect, useState } from "react";

const CountDown = () => {
    const [countDown, setCountDown] = useState(5);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown((prevCount) => {
                if (prevCount <= 0) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return (() => {
            clearInterval(timerId);
        })
    }, []);
    useEffect(() => {
        document.title = `${countDown}`
    }, [countDown])
    return (
        <></>
    );
};
export default CountDown;