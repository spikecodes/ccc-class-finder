const express = require("express");
const router = express.Router();
const { verifySignUp, authJwt } = require("./middleware");
const authController = require("./controller/auth.controller");
const userController = require("./controller/user.controller");
const stocksController = require("./controller/stocks.controller");

// Auth routes
/**
 * @openapi
 * /ice-cream:
 *   post:
 *     description: This is where you can give some background as to why this route is being created or perhaps reference a ticket number.
 *     tags:
 *       - Ice Cream
 *     summary: This should create a new ice cream.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           flavor:
 *           type: string
 *     responses:
 *       200:
 *         description: Receive back flavor and flavor Id.
 */
router.post(
	"/api/auth/signup",
	[verifySignUp.checkDuplicateUsername],
	authController.signup,
);
router.post("/api/auth/login", authController.login);

// User data routes
router.get("/api/user/ledger", [authJwt.verifyToken], userController.getLedger);
router.get(
	"/api/user/holdings",
	[authJwt.verifyToken],
	userController.getHoldings,
);
router.get(
	"/api/user/portfolioValue",
	[authJwt.verifyToken],
	userController.getPortfolioValue,
);

// Stocks routes
router.get("/api/stocks/:symbol/info", stocksController.getInfo);
router.get("/api/stocks/:symbol/historical", stocksController.getHistorical);

router.post(
	"/api/stocks/:symbol/buy",
	[authJwt.verifyToken],
	stocksController.buyStock,
);

router.post(
	"/api/stocks/:symbol/sell",
	[authJwt.verifyToken],
	stocksController.sellStock,
);

module.exports = router;
