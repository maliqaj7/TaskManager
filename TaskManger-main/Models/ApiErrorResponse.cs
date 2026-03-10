namespace TaskManagementApi.Models;

/// <summary>
/// Standardized error response for API errors
/// </summary>
public class ApiErrorResponse
{
    /// <summary>
    /// HTTP status code
    /// </summary>
    public int StatusCode { get; set; }

    /// <summary>
    /// Error message
    /// </summary>
    public string Message { get; set; } = string.Empty;

    /// <summary>
    /// Additional error details (e.g., validation errors)
    /// </summary>
    public object? Details { get; set; }
}
