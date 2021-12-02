import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7eaa86e2cf094e038fabb0fac127d6d0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
