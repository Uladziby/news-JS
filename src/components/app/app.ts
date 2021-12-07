import { IGetNews } from './../../interfaces';
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
            .addEventListener('click', (e: any ): void => {
                this.controller.getNews(e , (data: IGetNews) => {
                    this.view.drawNews(data);
                })
            });
            
        this.controller.getSources((data:IGetNews) => {
            this.view.drawSources(data)
        });
    }
}

export default App;
