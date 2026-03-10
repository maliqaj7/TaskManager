using System.ComponentModel.DataAnnotations;

namespace TaskManagementApi.DTOs;

/// <summary>
/// Data transfer object for creating a new task
/// </summary>
public class CreateTaskDto
{
    /// <summary>
    /// Title of the task (required, max 200 characters)
    /// </summary>
    [Required(ErrorMessage = "Title is required")]
    [MaxLength(200, ErrorMessage = "Title cannot exceed 200 characters")]
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Detailed description of the task (optional)
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// Priority level: Low, Medium, or High (default: Medium)
    /// </summary>
    [Required(ErrorMessage = "Priority is required")]
    [RegularExpression("^(Low|Medium|High)$", ErrorMessage = "Priority must be Low, Medium, or High")]
    public string Priority { get; set; } = "Medium";
}
