const solution = (my_string) =>
  Array.from(my_string, (el) => el.toLowerCase())
    .sort()
    .join("");
