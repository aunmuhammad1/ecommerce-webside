import puppeteer from 'puppeteer';

export default function scraper(){
    async function scraperProduct(url){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
    
        const [el] = await page.$x('//*[@id="mosaic-provider-jobcards"]/ul');
        const src = await el.getProperty('className');
        const srcTxt = await src.jsonValue();
    
        console.log({srcTxt});
    
        browser.close();
    }
    
    
    
    const customUrl = (research) => {
        scraperProduct(`https://pk.indeed.com/${research}-jobs?vjk=04a3f8ae9ebd4154`)
    }
    
    customUrl('software-engineer');
    return(
        <div>dfogj</div>
    )
}

