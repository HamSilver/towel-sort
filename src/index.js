module.exports = towelSort = (m = []) => m.map((e, i) => !(i % 2) ? e : e.reverse()).flat();
