import Link from 'next/link'
import A from '../props/A';
const Index = () => {
    return (
        <>
            <div>
                <A href={"/"} text={"Home"}/>
                <A href={"/auth/login"} text={"Login"}/>
            </div>
            <h1>Index Page</h1>
        </>
    );
};

export default Index;