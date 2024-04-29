# API and CRUD
 - Thrid Party API: YGOPRODeck (https://db.ygoprodeck.com/api/v7/cardinfo.php)
 - Card fetch example: https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker
 - Endpoint Parameters to Fetch: [name, fname (fuzzy name), id (card id), card_prices -> cardmarket_price, card_images, ygoprodeck_url]
 - Note: Must download and rehost images.4
 - Rate Limiting on the API is enabled. The rate limit is 20 requests per 1 second.

# Backend
 - Fetch from YGOPRODeck API
 - Keep track of card inventory
 - Manage payment processing

# Frontend
 - Fetch from Backend