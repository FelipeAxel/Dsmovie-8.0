import FormCard from 'components/FormCard';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'types/movie';


type Props = {
    movie:Movie;
}


function Forms() {


    const params = useParams();


    return (
        <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Forms;