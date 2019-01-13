const puppeteer = require('puppeteer');
const store = require('../injector');

describe('injection test', () => {

  let browser;
  let page;

  beforeAll(async () => {
      browser = await puppeteer.launch({
          headless: true,
      });
      page = await browser.newPage();

      page.emulate({
          viewport: {
              width: 500,
              height: 500,
          },
          userAgent: 'test',
      });
  }, 30000);

  afterAll(() => {
      browser.close();
  });

  it('will inject', async () => {
    await page.exposeFunction('$puppeteerStore', store.set);
    await page.goto(`http://localhost:8080/`);
    console.log('injector store', store.getAll());
    expect(store.get('a').b.foo).toEqual('bar');

  });

});