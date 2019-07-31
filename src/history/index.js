import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
console.log("pathname")

const history = createBrowserHistory();
ReactGA.initialize('UA-000000-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
})

export default history;