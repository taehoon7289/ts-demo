export const func = (x: number) => {
    console.log('test 에서 실행', x)
}

class Main {
    function = func
    function2 = func
}

export default Main
