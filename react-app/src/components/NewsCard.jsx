function NewsCard({articles}){

    const formatDate = (timestamp) =>{
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1);
        const day = String(date.getDate());
        const hours = String(date.getHours()).padStart(2, 0);
        const minutes = String(date.getMinutes()).padStart(2, 0);

        return `${month}-${day}-${year} | ${hours}:${minutes}`;
    };

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {articles.length === 0 ?(
                <>
                    <div className="col">
                        <div className="no-articles-text">No Articles to Display</div>
                    </div>
                    <div className="col">
                        <div className="no-articles-text">No Articles to Display</div>
                    </div>
                </>
        ) : (articles.map((article, index) =>(
                <div key={index} className="col">
                    <div className="card h-100 news-card">
                        <img src={article.urlToImage || "/placeholderImage.png"} className="card-img-top" onError={(e)=>{e.target.onerror=null; e.target.src="/placeholderImage.png"}}/>
                        <div className="card-body news-card-body">
                            <h5 className="news-card-title">{article.title}</h5>
                            <p className="news-card-text">{article.description}</p>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-center gap-5 news-card-footer">
                            <a href={article.url} style={{fontWeight: "bold" }} className="card-link">{article.source.name}</a>
                            <div className="d-inline">{formatDate(article.publishedAt)}</div>
                        </div>
                    </div>
                </div>
            )))}  
        </div>
    );
}

export default NewsCard;