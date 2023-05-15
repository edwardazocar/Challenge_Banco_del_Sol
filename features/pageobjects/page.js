
class Page {
    
    async openHomePage () {
        await browser.url(`https://www.ebay.com/`)
        await browser.maximizeWindow()
        await expect(browser).toHaveUrl('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=Pilas&_sacat=0')
    }
}
export default new Page();
