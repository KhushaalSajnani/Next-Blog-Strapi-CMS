import React, {type PropsWithChildren} from 'react';

function Container(props:PropsWithChildren) {
    return (
        <main className={'w-[80%] h-screen flex flex-col justify-center items-center bg-red-500'}>
            {props.children}
        </main>
    );
}

export default Container;