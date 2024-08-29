import Link from "next/link";

export default function ({href, text, className}) {
    return (
        <Link href={href} className={className}>
                {text}
        </Link>
    );
};