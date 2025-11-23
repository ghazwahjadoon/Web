import 'bootstrap/dist/css/bootstrap.min.css';
import cover from './assets/covercheck.png';

function Cover() {
    return (
        <>
            <div className="container-fluid p-0 m-0">
                <img
                    src={cover}
                    alt="Cover"
                    style={{ width: "100%", height: "650px", display: "block", objectFit: "cover", borderRadius: "20px" }}
                />
            </div>
        </>
    );
}

export default Cover;
