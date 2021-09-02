type Fn = () => any;

/**
 * simple method call debounce (swe do not need lodash for just one simple thing :) )
 * @param fn - method that will be wrapped
 * @param debounceIntervalMilliseconds - interval of debounce in ms
 */
export const debounce = (fn: Fn, debounceIntervalMilliseconds: number = 250): Fn => {
    let lastInvoked = Date.now();

    return () => {
        const now = Date.now();

        if (now - lastInvoked > debounceIntervalMilliseconds) {
            lastInvoked = now;

            fn();
        }
    };
};

/**
 * you've asked to use events-driven features: here are they 
 * we will dispatch this event if we want to go up in table
 */
export const scrollTableTopEvent = new CustomEvent('scrolltabletop');

export const isDev = () => process.env.NODE_ENV === 'development';

