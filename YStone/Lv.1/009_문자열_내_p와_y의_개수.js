const solution = (s) =>
  [...s.toLowerCase()].filter((p) => p === "p").length ===
  [...s.toLowerCase()].filter((y) => y === "y").length
    ? true
    : false;
