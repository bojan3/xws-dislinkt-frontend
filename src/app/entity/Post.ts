export class Post {
    text: string;
    likeCount: number;
    dislikeCount: number;
    constructor(text: string, likeCount: number, dislikeCount: number){
        this.text = text;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
    }
}