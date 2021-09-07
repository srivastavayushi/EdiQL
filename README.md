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

<img width="1440" alt="Screenshot 2021-09-07 at 10 46 26 AM" src="https://user-images.githubusercontent.com/56116708/132289454-da310ada-4325-43e6-93a6-db99486623f8.png">

<img width="676" alt="Screenshot 2021-09-07 at 11 02 51 AM" src="https://user-images.githubusercontent.com/56116708/132289552-b77d041d-20ff-424f-9ac8-7d87c09b480e.png">

## How to run:

1. [Download]() or [Clone]() the Repository.
2. Run `npm install` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Screenshots

<img width="1439" alt="Screenshot 2021-09-07 at 11 05 40 AM" src="https://user-images.githubusercontent.com/56116708/132289773-32250d77-3203-4d7b-b4a6-751672a45957.png">

<img width="1439" alt="Screenshot 2021-09-07 at 11 05 57 AM" src="https://user-images.githubusercontent.com/56116708/132289814-0c3f2601-dc23-43d8-9518-e41beaa05ba2.png">

<img width="1440" alt="Screenshot 2021-09-07 at 11 06 49 AM" src="https://user-images.githubusercontent.com/56116708/132289888-05f87a54-f461-4df8-8912-e9e58d70b462.png">

<img width="1427" alt="Screenshot 2021-09-07 at 11 08 22 AM" src="https://user-images.githubusercontent.com/56116708/132290058-f599c2f4-577e-4efa-b516-4f7814c82413.png">

<img width="1440" alt="Screenshot 2021-09-07 at 11 09 10 AM" src="https://user-images.githubusercontent.com/56116708/132290096-71c22dc1-b534-4ee8-b312-db5ab2a9f4af.png">



