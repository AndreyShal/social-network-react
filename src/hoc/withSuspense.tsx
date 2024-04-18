import React, {ComponentType} from "react";
import {Preloader} from "components/common/Preloader/Preloader";

type WithSuspenseProps = {
    children: React.ReactNode
}

export function WithSuspense(Component:  React.LazyExoticComponent<React.ComponentType<object>>) {
    return ()=> {
        return <React.Suspense fallback={<Preloader/>}>
            <Component/>
        </React.Suspense>
    }
}

// export function WithSuspense(props: WithSuspenseProps) {
//     return <React.Suspense fallback={<Preloader/>}>
//         {props.children}
//     </React.Suspense>
// }



// export function WithSuspense<T>(Component:  React.LazyExoticComponent<React.ComponentType<T>>) {
//     return (props: T)=> {
//         return <React.Suspense fallback={<Preloader/>}>
//             <Component {...props}/>
//         </React.Suspense>
//     }
// }


