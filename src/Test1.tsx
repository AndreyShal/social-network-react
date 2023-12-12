import React, {useEffect, useState} from "react";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type FilterType = "likesCount-all" | "likesCount-11" | "likesCount-12";

let postsArray = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11},
    {id: 5, message: 'Dada', likesCount: 12},
]

const Test1 = () => {
    const [filter, setFilter] = useState<FilterType>("likesCount-all")
    // let [a, setA] = useState(0);

    const onClickHandler = () => {
        // setA(++a);
        // console.log(a)
    }
    // const onClickHandler2 = () => {
    //   setTimeout(()=> {
    //     setA((prevState) => prevState + 1);
    //     setA(a + 1);
    //   },2000)
    //   setA(a + 1);
    //   setA((prevState) => prevState + 1);
    // }

    let posts = postsArray;

    if (filter === "likesCount-12") {
        posts = postsArray.filter((el: PostType) => el.likesCount === 12);
    }

    if (filter === "likesCount-11") {
        posts = postsArray.filter((el: PostType) => el.likesCount === 11);
    }


    const filterHandler = (filterName: FilterType) => {
        setFilter(filterName)
    }


    return (
        <div>
            {/*<h2>{a}</h2>*/}
            {/*<button onClick={onClickHandler}>onClickHandler</button>*/}
            {/*<button onClick={onClickHandler2}>onClickHandler2</button>*/}
            {posts?.map(el => (
                <h4 key={el.id}>{el.likesCount}</h4>
            ))}

            <div>
                <button onClick={() => filterHandler("likesCount-all")}>{"likesCount-all"}</button>
                <button onClick={() => filterHandler("likesCount-12")}>{"likesCount-12"}</button>
                <button onClick={() => filterHandler("likesCount-11")}>{"likesCount-11"}</button>
            </div>

        </div>
    )
}

export default Test1

// <a>Home</a>
// <a>News Feed</a>
// <a>Messages</a>