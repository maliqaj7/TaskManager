using System.ComponentModel.DataAnnotations;

namespace TaskManagementApi.DTOs;

/// <summary>
/// Data transfer object for updating an existing task
/// </summary>
public class UpdateTaskDto
{
    /// <summary>
    /// Title of the task (optional, max 200 characters)
    /// </summary>
    [MaxLength(200, ErrorMessage = "Title cannot exceed 200 characters")]
    public string? Title { get; set; }

    /// <summary>
    /// Detailed description of the task (optional)
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// Indicates whether the task is completed (optional)
    /// </summary>
    public bool? IsCompleted { get; set; }

    /// <summary>
    /// Priority level: Low, Medium, or High (optional)
    /// </summary>
    [RegularExpression("^(Low|Medium|High)$", ErrorMessage = "Priority must be Low, Medium, or High")]
    public string? Priority { get; set; }
}
