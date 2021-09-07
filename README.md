# EdiQL

### SQL Editor as a part of Atlan Assignment

You can check out the application at : **https://edi-ql.vercel.app/**

The application fulfils all the requirements that were mentioned by team Atlan.

You can run different queries on the table and view data of each table. The queries are : ALTER TABLE, ANALYZE, CREATE VIEW, DROP TABLE

**Task :** Create a SQL editor view where your users can query easily on a table using SQL, and see the results.

## Data

I have coverted the csv files provided by team Atlan to JSON format and thus loaded it anytime a query is demanding the data to be retrieved from the file.

## List of all major libraries utilised in the application:

I tried to use as less libraries as possible so as to make application load faster and code the proper way.

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Import for `react-ace` editor was long tasks running during page load, Converted it to Lazy loaded component using `React.lazy()` for code-splitting and delaying it's loading.

3. Only importing used Module in a component from library rather than importing whole library.

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img]()

## How to run:

1. [Download]() or [Clone]() the Repository.
2. Run `npm install` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Screenshots
