/*
* Omit<Type, Keys>
* */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

// 선택하고 싶지 않은 key 고르기
function createdPost(post: Omit<Post, 'createdAt'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}
