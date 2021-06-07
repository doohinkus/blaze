
import { useEffect, useState } from "react";
import queryGraphQl from "../async/queryData";

export default function useCount() {
    const [count, setCount] = useState(0);
    const query = `
    {
        getCount
    }
    `
    const fetchData = async () => {
        try {
            let count = await queryGraphQl({ query });
            // console.log("Count >>>", count, count.getCount);
            setCount(count.getCount);
        }
        catch (err) {
            console.log(err);
            setCount(0)
        }

    }
    // load data
    useEffect(() => {
        fetchData(query);

    }, []);

    return { count };
};
