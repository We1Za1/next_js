import Link from 'next/link'

export default function pageA(){
    return(
        <>
            <div>pageA</div>
            <h1>
                <Link href="/"><a>返回首页</a></Link>
            </h1>
        </>
    )
}