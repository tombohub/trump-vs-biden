const axios = require('axios')
const cheerio = require('cheerio')

class html{
  biden = 'ee'
  async fetchHtml(url) {
    const { data } = await axios.get(url);
    this.biden = 'ko'
    return cheerio.load(data);
  }
  
  async showHtml(){
      const $ = await this.fetchHtml('https://ig.ft.com/us-election-2020/');
      let votes = {}
      votes.biden = $('g.vx-group:nth-child(2)').find('text').html()
      votes.trump = $('g.vx-group:nth-child(3)').find('text').html()
      console.log(votes.biden, votes.trump)
  
  }
  
}


function ko(){
  function mo(){
    console.log('mo')
  }
  mo()
}

ko()
