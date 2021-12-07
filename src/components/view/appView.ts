import { IGetNews} from './../../interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    readonly news: News;
    readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IGetNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IGetNews) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
