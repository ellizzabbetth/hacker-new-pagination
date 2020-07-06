export interface ApiResponse{
    succeeded: boolean;
    errorMessage: string | null;
    result: string | null;
    details: [];
}