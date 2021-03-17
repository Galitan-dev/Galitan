const S = 20;
let C = 40;
let R = 20;

const shapes = [
	null,
	'0.5;0;0;0.5',
	'0.5;0;1;0.5',
	'0;0.5;1;0.5',
	'0;0.5;0.5;1',
	'0.5;0;0.5;1',
	'0.5;0;0;0.5&0.5;1;1;0.5',
	'0.5;1;1;0.5',
	'0.5;1;1;0.5',
	'0.5;0;1;0.5&0;0.5;0.5;1',
	'0.5;0;0.5;1',
	'0;0.5;0.5;1',
	'0;0.5;1;0.5',
	'0.5;0;1;0.5',
	'0.5;0;0;0.5'
]

function shape(i) {
	const schema = i.toString(2);
	return schema;
}

/** @type {Array2D} */
let nodes;

function noiseNode(x, y) {
	return { flag: noise(x / 2, y / 2, millis() * 0.0001) < .5 ? false : true, x, y };
	// return { flag: Math.floor(Math.random() * 2), x, y };
}

function setup() {
	createCanvas((C - 1) * S, (R - 1) * S);
	nodes = createArray2D(C, R, noiseNode);
}

function draw() {
	background(51);

	nodes.fill(noiseNode)

	for (let x = 0; x < C - 1; x++)
		for (let y = 0; y < R - 1; y++) {
			const rNodes = [];
			rNodes[0] = nodes.get(x + 0, y + 0);
			rNodes[1] = nodes.get(x + 1, y + 0);
			rNodes[2] = nodes.get(x + 0, y + 1);
			rNodes[3] = nodes.get(x + 1, y + 1);
			const schema = rNodes.map(n => n.flag ? 1 : 0).reverse().join('');
			// const schema = "10";
			const shape = shapes[parseInt(schema, 2)];

			stroke(100)
			if (!!shape)
				for (let cosS of shape.split('&')) {
					const cos = cosS
						.split(';')
						.map(s => parseFloat(s))
						.map(f => f * S);

					line(cos[0] + x * S, cos[1] + y * S, cos[2] + x * S, cos[3] + y * S);
				}

			// fill(100);
			// noStroke();
			// rNodes.forEach((node) => {
			// 	if (node.flag) circle(node.x * S, node.y * S, 5);
			// })
		}

	// noLoop();
}
