using Microsoft.EntityFrameworkCore;
using TaskManagementApi.Models;

namespace TaskManagementApi.Data;

/// <summary>
/// Database context for the Task Management API
/// </summary>
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    /// <summary>
    /// DbSet for TaskItem entities
    /// </summary>
    public DbSet<TaskItem> Tasks { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure TaskItem entity
        modelBuilder.Entity<TaskItem>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Priority).IsRequired();
            entity.Property(e => e.CreatedAt).IsRequired();

            // Create index on IsDeleted for better query performance
            entity.HasIndex(e => e.IsDeleted);
            entity.HasIndex(e => e.CreatedAt);

            // Global query filter to exclude soft-deleted items by default
            entity.HasQueryFilter(e => !e.IsDeleted);
        });

        // Seed initial data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        var now = DateTime.UtcNow;

        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem
            {
                Id = 1,
                Title = "Complete project documentation",
                Description = "Write comprehensive README and API documentation for the task management system",
                IsCompleted = false,
                Priority = "High",
                CreatedAt = now.AddDays(-5),
                IsDeleted = false
            },
            new TaskItem
            {
                Id = 2,
                Title = "Review code changes",
                Description = "Review pull requests and provide feedback to team members",
                IsCompleted = true,
                Priority = "Medium",
                CreatedAt = now.AddDays(-3),
                UpdatedAt = now.AddDays(-1),
                IsDeleted = false
            },
            new TaskItem
            {
                Id = 3,
                Title = "Update dependencies",
                Description = "Check and update NuGet packages to latest stable versions",
                IsCompleted = false,
                Priority = "Low",
                CreatedAt = now.AddDays(-2),
                IsDeleted = false
            },
            new TaskItem
            {
                Id = 4,
                Title = "Implement user authentication",
                Description = "Add JWT-based authentication to secure API endpoints",
                IsCompleted = false,
                Priority = "High",
                CreatedAt = now.AddDays(-4),
                IsDeleted = false
            },
            new TaskItem
            {
                Id = 5,
                Title = "Write unit tests",
                Description = "Create comprehensive unit tests for all controller endpoints",
                IsCompleted = true,
                Priority = "Medium",
                CreatedAt = now.AddDays(-6),
                UpdatedAt = now.AddDays(-2),
                IsDeleted = false
            }
        );
    }
}
