export interface getNews {
    sources: any;
    status: string;
    totalResults: number;
    articles: IArticles[];
}

export interface IArticles {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}

export interface GetResponse {
    endpoint: string;
    options?: {};
}

export interface ISources{
    sources : String[]
}

export interface IerrorHandler{
    ok: string;
    status : number;
    statusText: string | undefined;
}
export interface IData{
    name: string;
    id: string;
    articles: [];
    sources: [];

}