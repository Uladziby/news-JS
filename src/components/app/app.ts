import { getNews } from '../../interfaces';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';



class App {
    readonly controller: AppController;
    readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data: getNews) => {
                this.view.drawNews(data);
            }));
            
        this.controller.getSources((data: getNews) => this.view.drawSources(data));
    }
}

export default App;
