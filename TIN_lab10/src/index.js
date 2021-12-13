import {
	cToF,
	cToK,
	fToC,
	fToK,
	kToC,
	kToF
} from './tempConverter';

import {
	kmToM,
	mToKM
} from './distConverter';

const C = document.getElementById('C');
const F = document.getElementById('F');
const K = document.getElementById('K');

C.addEventListener("input", (e) => {
	F.value = cToF(e.target.value);
	K.value = cToK(e.target.value);
});

F.addEventListener("input", (e) => {
	C.value = fToC(e.target.value);
	K.value = fToK(e.target.value);
});

K.addEventListener("input", (e) => {
	C.value = kToC(e.target.value);
	F.value = kToF(e.target.value);
});

const KM = document.getElementById('KM');
const M = document.getElementById('M');

KM.addEventListener("input", (e) => {
	M.value = kmToM(e.target.value);
});

M.addEventListener("input", (e) => {
	KM.value = mToKM(e.target.value);
});

