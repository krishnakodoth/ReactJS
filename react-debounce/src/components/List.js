import useSWR from 'swr';
import Item from './Item'
import { getWikiSearchResults } from '../api/wikiApi'

const List = ({ searchTerm }) => {
    const {
        isLoading,
        error,
        data
    } = useSWR(
        searchTerm ? searchTerm : null,
        getWikiSearchResults
    );

    let content;
    if (isLoading) content = <p>Loading...</p>
    else if (error) content = <p>{error.message}</p>
    else if (data?.query?.pages) {
        const result = data?.query?.pages;
        content = (
            <ul>
                {
                    Object.values(result).map(result => {
                        return <Item key={result.pageid} result={result} />
                    })
                }
            </ul>
        )
    }
    return content;
}

export default List;