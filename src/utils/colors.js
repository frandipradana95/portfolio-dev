export const colors = {
	primary: (v) => (v != null ? `rgba(78, 56, 245,${v})` : "rgb(78, 56, 245)"),
	dark: (v) => (v != null ? `rgba(15, 23, 43,${v})` : "rgb(15, 23, 43)"),
	danger: (v) => (v != null ? `rgba(232, 0, 12,${v})` : "rgb(232, 0, 12)"),
	success: (v) => (v != null ? `rgba(0, 201, 81,${v})` : "rgb(0, 201, 81)"),
	warning: (v) => (v != null ? `rgba(255, 222, 33,${v})` : "rgb(255, 222, 33)"),
	secondary: (v) =>
		v != null ? `rgba(208, 212, 219,${v})` : "rgb(208, 212, 219)",
};
