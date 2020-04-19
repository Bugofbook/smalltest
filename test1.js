// Need ES6
const reverseText = (text="") =>`${text}`.split(' ').map(element=>[...`${element}`].reverse().join("")).join(' ')

// reverseText("junyiacademy") === "ymedacaiynuj"
// reverseText("flipped class room is important") == "deppilf ssalc moor si tnatropmi"