export function kklToString(kkl: number){
    const threeNumbers: string[] = [];
    let cur: string[] = [];
    const kklStr = Math.round(kkl).toString();
    for (let i = 0; i < kklStr.length; i++) {
        cur.push(kklStr[kklStr.length - 1 - i]);
        if (cur.length === 3 || i === kklStr.length - 1){
            console.log(cur);
            cur.reverse();
            threeNumbers.push(cur.join(''));
            cur = []
        }
    }
    threeNumbers.reverse();
    return threeNumbers.join(' ')
}
