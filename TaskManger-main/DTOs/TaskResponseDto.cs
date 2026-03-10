namespace TaskManagementApi.DTOs;

/// <summary>
/// Data transfer object for task responses
/// </summary>
public class TaskResponseDto
{
    /// <summary>
    /// Unique identifier for the task
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Title of the task
    /// </summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Detailed description of the task
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// Indicates whether the task is completed
    /// </summary>
    public bool IsCompleted { get; set; }

    /// <summary>
    /// Priority level: Low, Medium, or High
    /// </summary>
    public string Priority { get; set; } = string.Empty;

    /// <summary>
    /// Timestamp when the task was created
    /// </summary>
    public DateTime CreatedAt { get; set; }

    /// <summary>
    /// Timestamp when the task was last updated
    /// </summary>
    public DateTime? UpdatedAt { get; set; }
}
