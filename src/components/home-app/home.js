import { Link } from 'react-router-dom';

function home () {
    return (
        <>
            <h1> this is the home page </h1>
            <Link to="/stopwatch">
                <button>
                    go to stopwatch page
                </button>
            </Link>
        </>
    );
}

export default home; 