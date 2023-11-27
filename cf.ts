type Chemical = string;
type Molecule = string;

type SymbolMark = Chemical & Molecule;
type OnEq = {
	"left": SymbolMark[],
	"right": SymbolMark[]
}

type StrEq = `${string} = ${string}`

const questions: OnEq[] = [
	{
		"left": ["C", "O_2"],
		"right": ["CO2"]
	}
]

function randomPick<T = unknown>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)]
}

function createQuestion(): OnEq {
	return randomPick<OnEq>(questions);
}

function parseEq(question: OnEq): StrEq {
	return `${question["left"].join(" + ")} = ${question["right"].join(" + ")}`;
}

console.log(parseEq(createQuestion()))
