export const unify = (array) => {
	for (let i = 0; i < array.length; i++) {
		array[i].id = i;
	}
};
