import ReactGA from "react-ga";

export const initGA = (trackingID) => {
    return ReactGA.initialize(trackingID);
}

export const PageView = () => {
    console.log(window.location.pathname + window.location.search)
    return ReactGA.pageview(window.location.pathname + window.location.search);
}

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
export const Event = (category, action, label) => {
    console.log(category, action, label)
    return ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};