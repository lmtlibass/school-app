/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\nvar donness = [\n    {\n        prenom : \"libs\",\n        nom : \"thiam\",\n        photo : \"/img/ex.png\",\n        bio : \"ceci est mon histoire\",\n        niveau : \"niveau5\"\n\n    },\n    {\n        prenom : \"mouha\",\n        nom : \"thiare\",\n        photo : \"/img/ex.png\",\n        bio : \"ceci est mon histoire en 2000\",\n        niveau : \"niveau2\"\n\n    }\n]\n\nconst form = document.getElementById(\"Myform\")\nconst nom = document.querySelector(\"input#nom\")\nconst prenom = document.querySelector(\"input#prenom\")\nconst photo = document.querySelector(\"input#photo\")\nconst biographie = document.querySelector(\"input#bio\")\nconst afficheApprenant = document.querySelector(\"affiche-apprenant\")\n\nform.addEventListener('submit', (e)=>{\n    e.preventDefault();\n    console.log(photo.value)\n})\n\nafficheApprenant.insertAdjacentElement(\n    \"afterend\",\n    `<div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"/img/ex.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <div class=\"card-icone d-flex flex-row  justify-content-between\">\n    <a href=\"#\" class=\"btn btn-outline-success\"><i class=\"bi bi-pen\"></i></a>\n    <a href=\"#\" class=\"btn btn-outline-success\"><i class=\"bi bi-x-circle\"></i></a>\n    </div>\n    </div>\n</div>`\n)\n\n\n//# sourceURL=webpack://school-app/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;