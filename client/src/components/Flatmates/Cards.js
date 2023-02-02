function Cards() {
    return (
        <div
            className="row row-cols-1 row-cols-md-3 g-4 "
            style={{
                width: "80%",
                margin: "auto",
                marginTop: "20px",
            }}
        >
            <div className="col">
                <div className="card h-100">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                        className="card-img-top"
                        alt="Skyscrapers"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                        className="card-img-top"
                        alt="Los Angeles Skyscrapers"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This card has supporting text below as a natural
                            lead-in to additional content.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                        className="card-img-top"
                        alt="Palm Springs Road"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                        className="card-img-top"
                        alt="Palm Springs Road"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
