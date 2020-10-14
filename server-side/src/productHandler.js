const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

async function getProductByType(type){
  const quotes = await getProductList();
  return quotes.products.filter(item => item.type == type);
}

async function getRandomProductList(){
  const quotes = await getProductList();
  const allProductList = quotes.products;

  let randomProductList = [];
	for(let i=0;i<5;i++)
	{
      var item = allProductList[Math.floor(Math.random() * allProductList.length)];
      randomProductList.push(item);
  }
  return randomProductList;
}

async function getProductDetail(id){
  const quotes = await getProductList();
  return quotes.products.find(record => record.id == id);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/productDataSet.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getProductList(){
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/productDataSet.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

function getProducts(){
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/productDataSet.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

async function getQuote(id){
  const quotes = await getProductList();
  return quotes.products.find(record => record.id == id);
}

module.exports = {
  getProductByType,
  getProductDetail,
  getRandomProductList
}
