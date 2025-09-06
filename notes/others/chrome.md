# chrome


### chrome devtools

```shell
var _path = '//div//text()'
var result = $x(_path).map(function(i){return i.textContent} ); copy(result);
```

```shell
var _path = '//a//@href';
var result = $x(_path)
  .map(i => i.textContent)
  .filter(url => url.includes('/reel/'));
copy(result);
```

### Chrome书签文件的位置
```shell
Windows: C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data\Default\Bookmarks
macOS: ~/Library/Application\ Support/Google/Chrome/Default/Bookmarks
Linux: ~/.config/google-chrome/Default/Bookmarks
```

### 更新插件失败时
    - 打开[未安装的应用列表](https://chromewebstore.google.com/user/library) 手动依次安装

### [ZeroOmega](https://gist.github.com/hjkl01/295feb8715a66f04dd1a05af25b60c82)

### web scraper

> https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn

```json
{
  "_id": "test",
  "startUrl": [
    "https://list.jd.com/list.html?cat=9987,653,655",
    "https://list.jd.com/list.html?cat=9987,653,655&page=2&s=58&click=0"
  ],
  "selectors": [
    {
      "delay": 0,
      "id": "name",
      "multiple": true,
      "parentSelectors": ["_root"],
      "selector": "#J_goodsList > ul > li",
      "type": "SelectorElement"
    },
    {
      "delay": 0,
      "id": "sku_name",
      "multiple": false,
      "parentSelectors": ["name"],
      "regex": "",
      "selector": "a em",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "price",
      "multiple": false,
      "parentSelectors": ["name"],
      "regex": "",
      "selector": " div > div.p-price > strong > i",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "comments",
      "multiple": false,
      "parentSelectors": ["name"],
      "regex": "",
      "selector": ".p-commit strong a",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "shop",
      "multiple": false,
      "parentSelectors": ["name"],
      "regex": "",
      "selector": ".p-shop span a",
      "type": "SelectorText"
    }
  ]
}
```

```json
{
  "_id": "tianmao",
  "startUrl": [
    "https://list.tmall.com/search_product.htm?spm=a220m.1000858.0.0.219b2a680geXJ0&s=120&q=%CA%D6%BB%FA&sort=s&style=g&from=mallfp..pc_1_searchbutton&active=1&type=pc#J_Filter"
  ],
  "selectors": [
    {
      "delay": 0,
      "id": "sku",
      "multiple": true,
      "parentSelectors": ["_root"],
      "selector": "#J_ItemList .product",
      "type": "SelectorElement"
    },
    {
      "delay": 0,
      "id": "name",
      "multiple": false,
      "parentSelectors": ["sku"],
      "regex": "",
      "selector": ".productTitle a",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "price",
      "multiple": false,
      "parentSelectors": ["sku"],
      "regex": "",
      "selector": ".productPrice em",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "shop",
      "multiple": false,
      "parentSelectors": ["sku"],
      "regex": "",
      "selector": "a.productShop-name",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "sales",
      "multiple": false,
      "parentSelectors": ["sku"],
      "regex": "",
      "selector": "span em",
      "type": "SelectorText"
    },
    {
      "delay": 0,
      "id": "comments",
      "multiple": false,
      "parentSelectors": ["sku"],
      "regex": "",
      "selector": "span a[data-p]",
      "type": "SelectorText"
    }
  ]
}
```
