import {withRouter} from 'next/router';
import Link from 'next/link';

function Query({router}){
    return(
        <>
            <h1>{router.query.name}</h1>
            <h1><Link href="/"><a>返回首页</a></Link></h1>      
        </>
    )
}

export default withRouter(Query)