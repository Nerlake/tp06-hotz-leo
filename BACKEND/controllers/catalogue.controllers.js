const fs = require('fs');

const getProductsFromFile = () => {
	const path = require('path');
	const filePath = path.join(__dirname, '/bouchon/produits.json');
	const usersData = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(usersData);
  };


exports.get = (req, res) => {

	const catalogue = getProductsFromFile();
		
	
	res.setHeader('Content-Type', 'application/json');
      
    res.send(catalogue);
};    

exports.searchProducts = (req, res) => {
	
	const catalogue = getProductsFromFile();
	var search = req.params.name;
	search = search.toLowerCase();
	
	const foundProducts = catalogue.filter(product => product.nom.toLowerCase().includes(req.params.name.toLowerCase()));
	
	res.setHeader('Content-Type', 'application/json');
	  
	res.send(foundProducts);
}


