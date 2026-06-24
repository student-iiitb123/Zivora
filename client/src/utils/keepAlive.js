// src/utils/keepAlive.js
export const keepServerAwake = () => {
  setInterval(() => {
    fetch("https://zivora-262a.onrender.com/api/orders/admin").catch(() => {});
  }, 5 * 60 * 1000);
};