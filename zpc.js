// Jednoduchý hash-router
const routes = ["home", "main", "minis", "mini-1", "mini-2"];

function currentRoute() {
  const hash = location.hash.slice(1);
  return routes.includes(hash) ? hash : "home";
}

function render() {
  const route = currentRoute();
  document.querySelectorAll("[data-route]").forEach(sec => {
    sec.hidden = sec.getAttribute("data-route") !== route;
  });

  document.querySelectorAll("[data-nav]").forEach(link => {
    const isActive =
      link.getAttribute("data-nav") === route ||
      (route.startsWith("mini") && link.getAttribute("data-nav") === "minis");
    link.classList.toggle("active", isActive);
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
