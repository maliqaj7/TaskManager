using System.ComponentModel.DataAnnotations;

namespace TaskManagementApi.Models;

/// <summary>
/// Represents a task item in the task management system
/// </summary>
public class TaskItem
{
    /// <summary>
    /// Unique identifier for the task
    /// </summary>
    public int Id { get; set; }

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
    /// Indicates whether the task is completed
    /// </summary>
    public bool IsCompleted { get; set; } = false;

    /// <summary>
    /// Priority level: Low, Medium, or High
    /// </summary>
    [Required(ErrorMessage = "Priority is required")]
    [RegularExpression("^(Low|Medium|High)$", ErrorMessage = "Priority must be Low, Medium, or High")]
    public string Priority { get; set; } = "Medium";

    /// <summary>
    /// Timestamp when the task was created
    /// </summary>
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    /// <summary>
    /// Timestamp when the task was last updated (nullable)
    /// </summary>
    public DateTime? UpdatedAt { get; set; }

    /// <summary>
    /// Indicates whether the task is soft deleted
    /// </summary>
    public bool IsDeleted { get; set; } = false;

    /// <summary>
    /// Timestamp when the task was soft deleted (nullable)
    /// </summary>
    public DateTime? DeletedAt { get; set; }
}
