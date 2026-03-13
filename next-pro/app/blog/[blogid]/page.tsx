interface BlogIDPageProps {
    params: Promise<{blogid: string;}>;
}

export default async function BlogIDPage({params}: BlogIDPageProps) {
    const{ blogid } = await params;
    return (
        <div>
            <h1>hello from the blogID page</h1>
            <p>Blog-ID={blogid}</p>
        </div>
    );
}