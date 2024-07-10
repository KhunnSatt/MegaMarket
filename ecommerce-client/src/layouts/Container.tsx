import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: props) => {
    let newClassName = twMerge("max-w-screen-xl mx-auto py-10 px-4 lg:px-0", className)
    return (
        <>
            <div className={newClassName}>{children}</div>
        </>
    )
}

export default Container