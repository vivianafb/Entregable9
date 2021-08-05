"use strict";

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./routes/productos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const puerto = 8080;
const server = app.listen(puerto, () => console.log('Server up en puerto', puerto));
server.on('error', err => {
  console.log('ERROR ATAJADO', err);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/productos', _productos.default);