const nombre = "Eduardo";
const apellido = "Marcet";
const dataUser = {
  nombre,
  apellido,
};

// sessionStorage.setItem("dataUser", JSON.stringify(dataUser));
// localStorage.setItem("dataUser", JSON.stringify(dataUser));
// const timeExpires = new Date(new Date().getTime() + 120000).toGMTString();
// const cookie = (document.cookie =
//   "data=" + JSON.stringify(dataUser) + "; expires= " + timeExpires);

console.log(JSON.parse(sessionStorage.getItem("dataUser")));
console.log(JSON.parse(localStorage.getItem("dataUser")));
console.log(cookie);
