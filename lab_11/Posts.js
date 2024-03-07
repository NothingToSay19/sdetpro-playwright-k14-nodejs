export class Posts {
    constructor(userId, postId) {
        this._userId = userId;
        this._postId = postId;
    }

    get userId() {
        return this._userId;
    }

    get postId() {
        return this._postId;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set postId(postId) {
        this._postId = postId;
    }
}