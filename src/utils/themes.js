export const switchTheme = () => {
  const body = document.body;
  const isDark = localStorage.getItem("theme") === "dark";
  body.classList.toggle("dark", !isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
};
