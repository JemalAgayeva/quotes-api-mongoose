const QuoteController = require("../controllers/quote.controller")

module.exports = app => {
    app.get("/api/quotes/all", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createOneQuote)
    app.get("/api/quotes/random", QuoteController.randomQuote)
    app.get("/api/quotes/:quoteid", QuoteController.findAQuote)
    app.put("/api/quotes/update/:quoteid", QuoteController.updateAQuote)
    app.delete("/api/quotes/delete/:quoteid", QuoteController.deleteQuote)


}