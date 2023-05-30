const solution = (n) => Number([...(n + "")].sort((a, b) => b - a).join(""));
