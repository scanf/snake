const rp = require('request-promise');
const cheerio = require('cheerio');

export class Scraper{
    constructor(url){
        const options = {
            uri: url,
            transform: function (body) {
              return cheerio.load(body);
            }
          };
        rp(options)
            .then(($) => {
                console.log($);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}