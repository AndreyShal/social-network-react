import s from "./paginator.module.css"
import React, {useState} from "react";
import cn from "classnames"

type UsersProps = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}: UsersProps) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(currentPage ? currentPage :3 )
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    const onPageChangedCb = (p: number) => {
        onPageChanged && onPageChanged(p)
    }

    return (<div className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)} key={p}
                             onClick={()=>onPageChangedCb(p)}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>)
}