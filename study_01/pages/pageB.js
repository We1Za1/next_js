import Link from 'next/link'

export default function pageB(){
    return(
        <>
            <div>pageB</div>
            <h1>
                <Link href="/"><a>返回首页</a></Link>
            </h1>
        </>
    )
}