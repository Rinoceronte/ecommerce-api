
const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price){
        let items = products.filter(p => p.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
    res.status(200).send(products)
  };

  const getProduct = (req, res) => {
      const item = products.find((val) => val.id === parseInt(req.params.id))
      if(!item){
          return res.status(500).send('Item not in list');
      }
      res.status(200).send(item);
  }

  module.exports = {getProducts, getProduct};