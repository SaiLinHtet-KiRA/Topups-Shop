declare class BaseError extends Error {
    readonly name: string;
    readonly status: number;
    readonly message: string;
    constructor(name: string, status: number, description: string);
}
export declare class APIError extends BaseError {
    constructor(description?: string);
}
export declare class ValidationError extends BaseError {
    constructor(description?: string);
}
export declare class AuthorizeError extends BaseError {
    constructor(description?: string);
}
export declare class NotFoundError extends BaseError {
    constructor(description?: string);
}
export {};
