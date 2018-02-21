const CREDS = require('./creds');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
  headless: false
});
  	const page = await browser.newPage();
	const username = 'forevermark_super';
	const password = 'optqa';

  await page.goto('https://optqa.optcentral.com/optportal/login.jsp');


  const uname = '#username';
  const pwd = '#password';
  const login = '#loginform > button';

  await page.click(uname);
  await page.keyboard.type(username);

  await page.click(pwd);
  await page.keyboard.type(password);

  await page.click(login);

  await page.waitForNavigation();

  await page.screenshot({ path: 'screenshot/github.png' });
  
  browser.close();
}

run();