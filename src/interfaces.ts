
export interface getNews{
    status: string;
    totalResults : number;
    articles : IArticles[];
}

export interface IArticles{
    author: string;
    content : string;
    description: string;
    publishedAt : string;
    title: string;
    url : string;
    urlToImage : string;
}