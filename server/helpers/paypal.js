const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfqcyZeEYwllNmL4FIrmipybv6R1F8GQYVCK5Tr52-dlZ29_KsfHP2NbP6Zzo7iw28ZB1GpAg4QP402X",
  client_secret: "EGBuOhkuAtOebVQTE3OflTMUjJlFGMk3lWnCdlqRRF8yOi-Qhn1Bwi_wtFiKxBoIaoqXFIV3_HevWyYc",
});

module.exports = paypal;
