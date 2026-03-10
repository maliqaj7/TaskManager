import { taskApi } from './api.js';

// State
let currentEditId = null;
let currentFilters = {
  status: '',
  priority: ''
};

// DOM Elements
const taskForm = document.getElementById('taskForm');
const tasksList = document.getElementById('tasksList');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const filterStatus = document.getElementById('filterStatus');
const filterPriority = document.getElementById('filterPriority');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtnText = document.getElementById('submitBtnText');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  loadStats();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  taskForm.addEventListener('submit', handleSubmit);
  filterStatus.addEventListener('change', handleFilterChange);
  filterPriority.addEventListener('change', handleFilterChange);
  cancelBtn.addEventListener('click', cancelEdit);
}

// Load tasks
async function loadTasks() {
  try {
    showLoading(true);
    hideError();

    const tasks = await taskApi.getTasks(currentFilters);
    renderTasks(tasks);
  } catch (error) {
    showError('Failed to load tasks: ' + error.message);
  } finally {
    showLoading(false);
  }
}

// Load statistics
async function loadStats() {
  try {
    const stats = await taskApi.getStats();
    document.getElementById('totalTasks').textContent = stats.total;
    document.getElementById('pendingTasks').textContent = stats.pending;
    document.getElementById('inProgressTasks').textContent = stats.inProgress;
    document.getElementById('completedTasks').textContent = stats.completed;
  } catch (error) {
    console.error('Failed to load stats:', error);
  }
}

// Handle form submit
async function handleSubmit(e) {
  e.preventDefault();

  const taskData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    status: document.getElementById('status').value,
    priority: document.getElementById('priority').value,
    dueDate: document.getElementById('dueDate').value || null
  };

  try {
    if (currentEditId) {
      await taskApi.updateTask(currentEditId, taskData);
      currentEditId = null;
      submitBtnText.textContent = 'Create Task';
      cancelBtn.style.display = 'none';
    } else {
      await taskApi.createTask(taskData);
    }

    taskForm.reset();
    await loadTasks();
    await loadStats();
  } catch (error) {
    showError('Failed to save task: ' + error.message);
  }
}

// Handle filter change
function handleFilterChange() {
  currentFilters = {
    status: filterStatus.value,
    priority: filterPriority.value
  };
  loadTasks();
}

// Edit task
async function editTask(id) {
  try {
    const task = await taskApi.getTask(id);
    if (!task) return;

    currentEditId = id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description || '';
    document.getElementById('status').value = task.status;
    document.getElementById('priority').value = task.priority;

    if (task.due_date) {
      const date = new Date(task.due_date);
      const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      document.getElementById('dueDate').value = localDate.toISOString().slice(0, 16);
    }

    submitBtnText.textContent = 'Update Task';
    cancelBtn.style.display = 'inline-block';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    showError('Failed to load task: ' + error.message);
  }
}

// Cancel edit
function cancelEdit() {
  currentEditId = null;
  taskForm.reset();
  submitBtnText.textContent = 'Create Task';
  cancelBtn.style.display = 'none';
}

// Delete task
async function deleteTask(id) {
  if (!confirm('Are you sure you want to delete this task?')) return;

  try {
    await taskApi.deleteTask(id);
    await loadTasks();
    await loadStats();
  } catch (error) {
    showError('Failed to delete task: ' + error.message);
  }
}

// Render tasks
function renderTasks(tasks) {
  if (!tasks || tasks.length === 0) {
    tasksList.innerHTML = `
      <div class="empty-state">
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    `;
    return;
  }

  tasksList.innerHTML = tasks.map(task => `
    <div class="task-item">
      <div class="task-header">
        <div class="task-title">${escapeHtml(task.title)}</div>
      </div>

      <div class="task-badges">
        <span class="badge badge-${task.status.toLowerCase()}">${task.status}</span>
        <span class="badge badge-${task.priority.toLowerCase()}">${task.priority}</span>
      </div>

      ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ''}

      <div class="task-meta">
        <span>Created: ${formatDate(task.created_at)}</span>
        ${task.due_date ? `<span>Due: ${formatDate(task.due_date)}</span>` : ''}
      </div>

      <div class="task-actions">
        <button class="btn-edit" onclick="window.editTask('${task.id}')">Edit</button>
        <button class="btn-delete" onclick="window.deleteTask('${task.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Utility functions
function showLoading(show) {
  loadingSpinner.style.display = show ? 'block' : 'none';
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

function hideError() {
  errorMessage.style.display = 'none';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Expose functions to window for inline event handlers
window.editTask = editTask;
window.deleteTask = deleteTask;
