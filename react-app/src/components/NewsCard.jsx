function NewsCard({articles}){
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {articles.map((article) =>(
                <div className="col">
                    <div className="card h-100">
                    <img src={article.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                    </div>
                    </div>
                </div>
            ))}  
        </div>
    );
}

export default NewsCard;