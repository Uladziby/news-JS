export type IData =IGetNews |IGetSources;

export interface IGetNews {
    status: string;
    totalResults: number;
    articles: IArticles[];
    sources: ISources<string>[];

}

export interface IArticles {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    content: string;
    source: { name: string };
    description: string;
    url: string;
}

export interface IGetResponse {
    endpoint: string;
    options?: {};
    
}

export interface IGetSources {
    status: string;
    sources: ISources<string>[];
}
export interface ISources<T> {
    id: T;
    category: T;
    country: T;
    description: T;
    language: T;
    name: T;
    url: T;
}
export interface IerrorHandler {
    ok: string;
    status: number;
    statusText: string | undefined;
}

