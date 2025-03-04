const primary = (opacity) => {
	return !opacity ? "rgb(97, 94, 255)" : `rgba(97, 94, 255, ${opacity})`;
};

const secondary = (opacity) => {
	return !opacity ? "rgb(225, 232, 240)" : `rgba(225, 232, 240, ${opacity})`;
};

const warning = (opacity) => {
	return !opacity ? "rgb(255, 222, 33)" : `rgba(255, 222, 33, ${opacity})`;
};

const danger = (opacity) => {
	return !opacity ? "rgb(250, 45, 55)" : `rgba(250, 45, 55, ${opacity})`;
};

const success = (opacity) => {
	return !opacity ? "rgb(4, 222, 113)" : `rgba(4, 222, 113, ${opacity})`;
};
const dark = (opacity) => {
	return !opacity ? "rgb(15, 23, 43)" : `rgba(15, 23, 43, ${opacity})`;
};

export default {
	primary,
	secondary,
	warning,
	success,
	danger,
	dark,
};
