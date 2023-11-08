import puppeteer from 'puppeteer';

export class ProductWebScrapping {
    private readonly URL = 'https://www.amazon.com.br';

    public async call(productName: string) {
        const browser = await puppeteer.launch({ headless: 'new' });
        const [ page ] = await browser.pages();

        await page.goto(this.URL);

        await page.type('#twotabsearchtextbox', productName);
        await page.click('#nav-search-submit-button');

        await page.waitForNavigation();

        const data = await page.$$('div[data-component-type="s-search-result"]');

        const promises = data.map(async product => {
            const name = await product.$eval('span.a-size-base-plus.a-color-base.a-text-normal', element => element.innerText);
            const price = await product.$eval('span.a-offscreen', element => element.innerText);
            const link = await product.$eval('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal', element => element.getAttribute('href'));

            return {
                name: name,
                price: price,
                link: this.URL + link,
            };
        });

        const products = await Promise.all(promises);

        await browser.close();

        return products;
    }
}
