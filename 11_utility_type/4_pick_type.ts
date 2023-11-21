/*
* Pick<Type, Keys>
* */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

// 입력하고 싶은 값만 고를 수 있음
function createdPost(post: Pick<Post, 'title' | 'content'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createdPost({
    title: '제목',
    content: '내용',
})
