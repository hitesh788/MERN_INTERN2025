import { useState, useMemo } from 'react';

var slowFunction = () => {
    for (var slow = 0; slow < 100000; slow++) {}
};

const UseMemo = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(false);

    var styling = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    };

    const computedNum = useMemo(() => {
        slowFunction();
        return num;
    }, [num]);

    return (
        <div>
            <h2>This page is meant for useMemo Hook.</h2>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value) || 0)}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle Theme
            </button>
            <h3 style={styling}>Number is {computedNum}</h3>
        </div>
    );
};

export default UseMemo;